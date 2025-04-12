// routes/callRoutes.js
const express = require("express");
const router = express.Router();
const callController = require("../controllers/callController");

router.post("/call/start", callController.startCall);
router.post("/call/end", callController.endCall);
router.get("/call", callController.getCalls);
router.get("/calls", callController.getCallsInQueue);
router.post("/calls/pick", callController.pickNextCall);
router.get("/calls/completed", callController.getCompletedCalls);



module.exports = router;
