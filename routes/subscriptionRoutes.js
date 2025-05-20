const express = require("express");
const{
    addSubscription,
    getAllSubscription,
    deleteSubscription,
    downloadSubscriptionExcel
}= require("../controllers/subscriptionController");
const { Protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/add", Protect, addSubscription);
router.get("/get", Protect, getAllSubscription);
router.get("/downloadexcel", Protect, downloadSubscriptionExcel);
router.delete("/:id", Protect, deleteSubscription);

module.exports = router;