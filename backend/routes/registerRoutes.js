const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController.js");

router.post("/", registerController.createRegistration);

router.get("/", registerController.getAllRegistrations);

router.get("/:id", registerController.getRegistrationById);

router.put("/:id", registerController.updateRegistration);

router.delete("/:id", registerController.deleteRegistration);

module.exports = router;
