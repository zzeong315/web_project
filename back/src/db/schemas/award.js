import { Schema } from "mongoose";

const AwardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export { AwardSchema };
