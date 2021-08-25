import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostRoutes from "./routes/posts.js";
import TechnologyRoutes from "./routes/technology.js";
import FacilityRoutes from "./routes/facility.js";
import CloudinaryRoutes from "./routes/cloudinary.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/posts", PostRoutes);
app.use("/", TechnologyRoutes);

app.use("/", FacilityRoutes);
app.use("/", CloudinaryRoutes);

// app.use(bodyParser.json({ limit: "30mb", extended: true }));

// const CONNECTION_URL = "mongodb://localhost:27017/sliit";
const CONNECTION_URL ='mongodb+srv://Theebanraj:Theeban2021@cluster0.ig2tw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
