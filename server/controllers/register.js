const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Fellow = require("../models/fellow.js");
const Mentor = require("../models/mentor.js");
const ProgramManager = require("../models/program_manager.js");

const register = async (req, res) => {
    try {
        const {
            name, 
            email,
            password,
            type,
        } = req.body;
        
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        
        if(type === "fellow") {
            const newFellow = new Fellow({
                name,
                email,
                password: passwordHash,
            });
    
            const savedFellow = await newFellow.save();
            res.status(201).json(savedFellow);
        }
        else if(type === "mentor") {
            const newMentor = new Mentor({
                name,
                email,
                password: passwordHash,
            });
    
            const savedMentor = await newMentor.save();
            res.status(201).json(savedMentor);
        }
        else if(type === "programManager") {
            const newProgramManager = new ProgramManager({
                name,
                email,
                password: passwordHash,
            });
    
            const savedProgramManager = await newProgramManager.save();
            res.status(201).json(savedProgramManager);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { register };