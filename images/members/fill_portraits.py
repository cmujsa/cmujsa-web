import cv2
import numpy as np
import os
import glob

# =================Configuration=================
TEMPLATE_FILE = "blank.png" 
PORTRAITS_FOLDER = "input_portraits"
OUTPUT_FOLDER = "finished_templates"

#COLOR RANGE
lower_purple = np.array([117, 80, 145]) 
upper_purple = np.array([121, 255, 255])

MASK_EROSION_PIXELS = 2 
MIN_AREA_THRESHOLD = 1000 
# ===============================================

def center_crop_and_resize(image, target_w, target_h):
    h, w = image.shape[:2]
    target_aspect = target_w / target_h
    image_aspect = w / h
    
    if image_aspect > target_aspect:
        # Image is wider than slot
        new_w = int(h * target_aspect)
        start_x = (w - new_w) // 2
        cropped = image[:, start_x:start_x + new_w]
    else:
        # Image is taller than slot
        new_h = int(w / target_aspect)
        start_y = (h - new_h) // 2  # Fixed: was target_y
        cropped = image[start_y:start_y + new_h, :]
        
    return cv2.resize(cropped, (target_w, target_h), interpolation=cv2.INTER_AREA)

def process_member(template_path, portrait_path):
    """Processes a single member portrait into the blank template."""
    img_rgba = cv2.imread(template_path, cv2.IMREAD_UNCHANGED)
    if img_rgba is None: return False

    if img_rgba.shape[2] == 4:
        img_bgr = img_rgba[:, :, :3]
        alpha_channel = img_rgba[:, :, 3]
    else:
        img_bgr = img_rgba
        alpha_channel = np.ones((img_bgr.shape[0], img_bgr.shape[1]), dtype=np.uint8) * 255

    hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    purple_mask = cv2.inRange(hsv, lower_purple, upper_purple)
    
    kernel = np.ones((MASK_EROSION_PIXELS, MASK_EROSION_PIXELS), np.uint8)
    eroded_mask = cv2.erode(purple_mask, kernel, iterations=1)
    
    outline_mask = cv2.bitwise_not(purple_mask)
    just_outline = cv2.bitwise_and(img_bgr, img_bgr, mask=outline_mask)

    # Find the purple shape(s)
    contours, _ = cv2.findContours(purple_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    valid_contours = [c for c in contours if cv2.contourArea(c) > MIN_AREA_THRESHOLD]

    if not valid_contours:
        return False

    result_bgr = np.zeros_like(img_bgr)
    port_img = cv2.imread(portrait_path)
    if port_img is None: return False

    # Fill every purple slot in the template with this one person's photo
    for cnt in valid_contours:
        x, y, w, h = cv2.boundingRect(cnt)
        processed_port = center_crop_and_resize(port_img, w, h)
        local_mask = eroded_mask[y:y+h, x:x+w]
        
        roi = result_bgr[y:y+h, x:x+w]
        fg = cv2.bitwise_and(processed_port, processed_port, mask=local_mask)
        result_bgr[y:y+h, x:x+w] = cv2.add(roi, fg)

    # Final Composite
    final_bgr = cv2.bitwise_and(result_bgr, result_bgr, mask=eroded_mask)
    final_bgr = cv2.add(final_bgr, just_outline)
    final_rgba = cv2.merge([final_bgr[:,:,0], final_bgr[:,:,1], final_bgr[:,:,2], alpha_channel])
    
    # Save using the member's name
    member_name = os.path.splitext(os.path.basename(portrait_path))[0]
    output_path = os.path.join(OUTPUT_FOLDER, f"{member_name}.png")
    cv2.imwrite(output_path, final_rgba)
    return True

def main():
    if not os.path.exists(OUTPUT_FOLDER): os.makedirs(OUTPUT_FOLDER)
    
    # Get all portraits
    port_exts = ['*.png', '*.jpg', '*.jpeg', '*.PNG', '*.JPG']
    portrait_paths = []
    for ext in port_exts:
        portrait_paths.extend(glob.glob(os.path.join(PORTRAITS_FOLDER, ext)))
    
    if not os.path.exists(TEMPLATE_FILE):
        print(f"Error: {TEMPLATE_FILE} not found.")
        return

    print(f"Found {len(portrait_paths)} portraits. Using template: {TEMPLATE_FILE}")

    successes = 0
    for p_path in portrait_paths:
        if process_member(TEMPLATE_FILE, p_path):
            print(f"Done: {os.path.basename(p_path)}")
            successes += 1

    print(f"\nFinished! Created {successes} images in '{OUTPUT_FOLDER}'.")

if __name__ == "__main__":
    main()