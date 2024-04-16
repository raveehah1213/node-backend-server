const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const jobController = require("../controller/job");
router.post("/create", verifyToken, jobController.createJobPost);
router.get("/job-details/:jobId", verifyToken, jobController.getJobDetailsById);
router.put("/update/:jobId", verifyToken, jobController.updateJobDetailsById);
router.get("/all", jobController.getAllJobs);
module.exports = router;
