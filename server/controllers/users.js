const Fellow = require("../models/fellow.js");
const Mentor = require("../models/mentor.js");
const ProgramManager = require("../models/program_manager.js");

// PLEASE NOTE
// for fellows, the attendence field is named "attendence" with E
// for mentors, the attendance field is named "attendance" with A
// be sure to check that when u write code thanks
const addAttendance = async (req, res) => {
  if (req.type === "fellow") {
    try {
      const fellow = await Fellow.findOne({ _id: req.userId });
      if (!fellow) {
        res.status(404).json("User not found");
      }
    //   console.log(fellow);
      fellow.attendence += 1;
      fellow.save();

      res.status(200).json({ attendence: fellow.attendence, msg: "Attendance added successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
  }
  else if (req.type === "mentor") {
    try {
      const mentor = await Mentor.findOne({ _id: req.userId });
      console.log(mentor);
      if (!mentor) {
        res.status(404).json("User not found");
      }
      mentor.attendance += 1;
      await mentor.save();

      res.status(200).json({ attendence: mentor.attendance, msg: "Attendance added successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
  }
};

module.exports = { addAttendance };
