const express = require("express");
const router = express.Router();
const { Protect } = require("../middleware/authmiddleware");
const upload = require("../middleware/uploadmiddleware");
const User = require("../models/User");

router.put(
  "/update-profile-image",
  Protect,
  upload.single("image"),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const userId = req.user.id;
    const imageUrl = req.file.path; // ✅ Correct — IF you're using multer-storage-cloudinary!

    console.log(req.file.path);
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { profileImageUrl: imageUrl },
        { new: true }
      );
      res.status(200).json({ user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: "Failed to update profile image" });
    }
  }
);

module.exports = router;

