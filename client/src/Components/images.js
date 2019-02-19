const imgPortraits = [
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908949/PhotoProject/pictures/portraits/DSCF2783.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/DSCF2739-2.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/20150724-DSCF3195.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908949/PhotoProject/pictures/portraits/DSCF2783.jpg', alt: 'portrait 4', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/DSCF2739-2.jpg', alt: 'portrait 5', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/20150724-DSCF3195.jpg', alt: 'portrait 6', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908949/PhotoProject/pictures/portraits/DSCF2783.jpg', alt: 'portrait 7', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/DSCF2739-2.jpg', alt: 'portrait 8', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/DSCF2739-2.jpg', alt: 'portrait 5', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/20150724-DSCF3195.jpg', alt: 'portrait 6', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908949/PhotoProject/pictures/portraits/DSCF2783.jpg', alt: 'portrait 7', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/DSCF2739-2.jpg', alt: 'portrait 8', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/DSCF2739-2.jpg', alt: 'portrait 5', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/20150724-DSCF3195.jpg', alt: 'portrait 6', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908949/PhotoProject/pictures/portraits/DSCF2783.jpg', alt: 'portrait 7', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/DSCF2739-2.jpg', alt: 'portrait 8', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/20150724-DSCF3195.jpg', alt: 'portrait 9', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908949/PhotoProject/pictures/portraits/DSCF2783.jpg', alt: 'portrait 10', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/DSCF2739-2.jpg', alt: 'portrait 11', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908948/PhotoProject/pictures/portraits/20150724-DSCF3195.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' }
]


const imgPlaces = [
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' }, { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' }, { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' }, { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' }, { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' }, { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' }, { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'portrait 1', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'portrait 3', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'portrait 2', exif: 'FUJIFILM X-T1 f/2.8 55mm 1/210s ISO 400' },

]
const slideSetAus = [
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/DSC_0089.jpg', alt: 'image 1', price: '€85' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908969/PhotoProject/pictures/DSC_0131.jpg', alt: 'image 2', price: '€85' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908961/PhotoProject/pictures/IMG_20161020_165019.jpg', alt: 'image 3', price: '€85' }
]
const slideHome = [
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150722-DSCF2914.jpg', alt: 'image 1' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150724-DSCF3083.jpg', alt: 'image 2' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150719-DSCF2177.jpg', alt: 'image 3' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/DSC_0089.jpg', alt: 'image 4' },
    { img_url: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/20150721-DSCF2543.jpg', alt: 'image 5' },
]

module.exports = {
    imgPortraits, slideSetAus, slideHome, imgPlaces
}