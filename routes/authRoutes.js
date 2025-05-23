const express = require("express");
const {Protect} = require("../middleware/authmiddleware");


const{
    registerUser,
    loginUser,
    getUserInfo,
} = require("../controllers/authController");
const upload = require("../middleware/uploadmiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getuser", Protect,getUserInfo);

router.post("/upload-image",upload.single("image"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl =  req.file.path ; // either works
    res.status(200).json({ imageUrl });
});

module.exports = router;