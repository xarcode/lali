const express = require("express");
// import express from "express";
// import { login } from "../controllers/auth.js";
const { login, register } = require("../controllers/auth.js");

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

module.exports = router; 