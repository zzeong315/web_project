import { Schema, model } from "mongoose";

const EducationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export { EducationSchema };
