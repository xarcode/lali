const express = require("express");
// import express from "express";
// import { login } from "../controllers/auth.js";
const { addAttendance } = require("../controllers/users.js");
const { verifyToken } = require("../middleware/verify.js");

const router = express.Router();

router.patch('/attend', verifyToken, addAttendance);

module.exports = router; 