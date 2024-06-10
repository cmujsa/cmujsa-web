class MatsuriPhotoGallery{
    constructor(year, folderName, photoNames, extension, hasBanner, largePhotos) {
        this.year = year; // Year of the fall semester
        this.folderName = folderName // Name of the folder
        this.photoNames = photoNames; // Array of the file names of the photos
        this.extension = extension; // File extension of photos (e.g. .png, .jpg)
        this.hasBanner = hasBanner; // Set true if there is a banner
        this.largePhotos = largePhotos; // Set true for two photos per row, set false for three photos per row on desktop
    }
}

const galleryYears = [];

// ADD PHOTOS HERE
galleryYears.push(new MatsuriPhotoGallery(
    2023,
    "2023-24/display",
    ["takoyaki", "kingyo-sukui", "mahjong", "calligraphy", "band", "drinks", "welcome-booth", "dance", "singing", "yakisoba", "gyoza", "street-styles"],
    ".jpg",
    true,
    true
));
galleryYears.push(new MatsuriPhotoGallery(
    2022,
    "2022-23/display",
    ["takoyaki-2", "kingyo-sukui", "calligraphy", "band", "yakisoba", "rajio-taiso", "switch", "takoyaki-3", "performance"],
    ".jpg",
    true,
    false
));
galleryYears.push(new MatsuriPhotoGallery(
    2021,
    "2021-22",
    ["serving", "takoyaki", "kitchen", "yakisoba", "group", "welcome-booth"],
    ".png",
    true,
    false
));
galleryYears.push(new MatsuriPhotoGallery(
    2020,
    "2020-21",
    ["1", "2", "3", "4", "5", "6"],
    ".png",
    false,
    false
));
galleryYears.push(new MatsuriPhotoGallery(
    2019,
    "2019-20",
    ["1", "2", "3", "4", "5", "6"],
    ".png",
    false,
    false
));
galleryYears.push(new MatsuriPhotoGallery(
    2018,
    "2018-19",
    ["1", "2", "3", "4", "5", "6"],
    ".png",
    false,
    false
));
galleryYears.push(new MatsuriPhotoGallery(
    2017,
    "2017-18",
    ["1", "2", "3", "4", "5", "6"],
    ".png",
    false,
    false
));
galleryYears.push(new MatsuriPhotoGallery(
    2016,
    "2016-17",
    ["1", "2", "3", "4", "5", "6"],
    ".png",
    false,
    false
));

MatsuriPhotoGallery.prototype.getPhotos = function () {
    let photosHtmlText = "";
    const folderName = this.folderName;
    const fileExtension = this.extension;
    this.photoNames.forEach(convertToPhotoDiv);

    function convertToPhotoDiv(fileName) {
        photosHtmlText += `
            <div class="col">
                <img class="w-100" src="images/matsuri/${folderName}/${fileName}${fileExtension}">
            </div>
        `;
    }
    return photosHtmlText;
}


MatsuriPhotoGallery.prototype.createGallery = function (i) {
    return `
        <div class="accordion-item">
            <h3 class="accordion-header" id="heading${i}">
                <button class="accordion-button ${i != 1 ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                <div>
                    ${this.year} - ${this.year + 1}
                </div>
                </button>
            </h3>
            <div id="collapse${i}" class="accordion-collapse ${i != 1 ? "collapse" : ""}" aria-labelledby="heading${i}">
                ${this.hasBanner ? '<img class="w-100" src="images/matsuri/' + this.folderName + '/banner.png">' : ''}
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-${this.largePhotos ? 2 : 3} justify-content-center align-items-top matsuri-photos">
                    ${this.getPhotos()}
                </div>
            </div>
        </div>
    `
}

let photoGalleryHtmlText = "";
for (let i = 0; i < galleryYears.length; i++) {
    photoGalleryHtmlText += galleryYears[i].createGallery(i + 1);
}

document.getElementById("matsuri-photo-gallery").innerHTML = photoGalleryHtmlText;