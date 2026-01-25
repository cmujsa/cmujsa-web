import cv2
import numpy as np

# Load your image
img = cv2.imread('blank.png')
hsv_img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

def pick_color(event, x, y, flags, param):
    if event == cv2.EVENT_LBUTTONDOWN:
        hsv_value = hsv_img[y, x]
        print(f"HSV value at ({x}, {y}): {hsv_value}")
        print(f"Update your script with:")
        print(f"lower_purple = np.array([{max(0, hsv_value[0]-10)}, 50, 50])")
        print(f"upper_purple = np.array([{min(179, hsv_value[0]+10)}, 255, 255])")

cv2.namedWindow('Click the Purple Part')
cv2.setMouseCallback('Click the Purple Part', pick_color)

print("Click on the PURPLE region in the window. Press any key to close.")
cv2.imshow('Click the Purple Part', img)
cv2.waitKey(0)
cv2.destroyAllWindows()