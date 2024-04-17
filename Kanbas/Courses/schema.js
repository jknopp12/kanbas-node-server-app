import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: String,
    startDate: Date,
    endDate: Date,
    //image: Image,
  },
  { collection: "courses" });
export default courseSchema;