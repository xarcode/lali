const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const morgan = require("morgan");  
const helmet = require("helmet");
const path = require("path");
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");

const app = express();


dotenv.config();



// middleware
app.use(express.json({ limit: "30mb" }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
    res.send("Hello World");
    }
);

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
    }
);

