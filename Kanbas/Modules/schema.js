import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  module: String
});

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  course: String,
  lessons: lessonSchema
},
  { collection: "modules" });
export default moduleSchema;
