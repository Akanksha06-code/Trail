const multer= require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinaryconfig');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'profile_pics', // folder name in your Cloudinary account
    allowed_formats: ['jpg', 'jpeg', 'png']
  }
});

const  fileFilter= (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']; 
    if (allowedTypes.includes(file.mimetype) ) {
        cb(null, true);
    }
    else {
        cb(new Error('Invalid file type, only JPEG, JPG and PNG are allowed!'), false);
    }
};

const upload = multer({ 
    storage,
    fileFilter
});




module.exports = upload;
