// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
const bcrypt = require("bcrypt");
const Fellow = require("../models/fellow.js");
const Mentor = require("../models/mentor.js");
const ProgramManager = require("../models/program_manager.js");

const login = async (req, res) => {
    try{
        const fellow = await Fellow.findOne({ email: req.body.email });
        if(!fellow) {
            const mentor = await Mentor.findOne({ email: req.body.email });
            if(!mentor) {
                const programManager = await ProgramManager.findOne({ email: req.body.email });
                if(!programManager) {
                    res.status(404).json("User not found");
                }
                else{
                    const validPassword = await bcrypt.compare(req.body.password, programManager.password);
                    if(!validPassword) {
                        res.status(400).json("Wrong password");
                    }else{
                        res.status(200).json(programManager);
                    }
                }
            }
            else{
                const validPassword = await bcrypt.compare(req.body.password, mentor.password);
                if(!validPassword) {
                    res.status(400).json("Wrong password");
                }else{
                    res.status(200).json(mentor);
                }
            }
        }
        else{
            const validPassword = await bcrypt.compare(req.body.password, fellow.password);
            if(!validPassword) {
                res.status(400).json("Wrong password");
            }else{
                res.status(200).json(fellow);
            }
        }
    }
    catch(err){
        res.status(500).json(err);
    }
};

module.exports = { login };