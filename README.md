# cmujsa-web

The official website of the Japanese Student Association at Carnegie Mellon University (CMU JSA).

Initially designed by Catherine Wang ('23) and developed by Emma Tong ('25) in the summer of 2022.

## Directions for Transitioning to a New Executive Board
- In `js/info.js`:
  - Change `mainContactName` and `mainContactAndrewID` to either the President or VP External
    - Doing so will automatically update the contact in the footer and FAQ
  - Add new and remove old executive board members using `execMembers.push(new ExecMember(...))`
    - Move old executive board photos to `images/members/old`
    - Upload new executive board photos to `images/members/andrewID.png`, replacing `andrewID` with the andrew ID of the executive board member
      - You will have to manually add the framing design in a graphic design program (e.g. Figma, Illustrator)
- In `index.html`, change the Google Calendar link
- In `faq.html`, look through and update the FAQ for the new school year

## Directions for Updating the Website for Matsuri
- Before Matsuri:
  - Rename `matsuri.html` to `matsuri-default.html`
  - Create a new `matsuri.html`, either using a previous year's matsuri page as a template or creating a new page from scratch
    - I recommend separating the page style by also creating a `css/matsuri-[semester]-styles.css` 
  - In `index.html`, uncomment and update the `<!-- Matsuri Banner -->` with the right date
- After Matsuri:
  - Rename `matsuri.html` to `matsuri-[semester].html`
  - Rename `matsuri-default.html` back to `matsuri.html`
  - In `index.html`:
    - Comment out the `<!-- Matsuri Banner -->`
    - Change the sponsors on the home page to the new sponsors
  - Add to the matsuri photo gallery:
    - In `js/matsuri-photos.js`, use `galleryYears.push(new MatsuriPhotoGallery(...))` with the correct arguments to create a photo section for the new Matsuri event
  - Upload photos to `images/matsuri/[years]`, make sure the banner is named `banner.png`

## Features/Changes to Add in the Future
- Actually make the Senpai-Kouhai Family Tree
- Restructure folders/files to have consistent naming conventions
- Modularize the FAQ with js