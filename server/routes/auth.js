const express = require("express");
// import express from "express";
// import { login } from "../controllers/auth.js";
const { login } = require("../controllers/login.js");
const { register } = require("../controllers/register.js");

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

module.exports = router; 