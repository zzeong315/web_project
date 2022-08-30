import { Schema, model } from "mongoose";
import { EducationSchema } from "./education";
import { ProjectSchema } from "./project";
import { CertificateSchema } from "./certificate";
import { AwardSchema } from "./award";

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    educations: [EducationSchema],
    projects: [ProjectSchema],
    certificates: [CertificateSchema],
    awards: [AwardSchema],
    imgUrl: {
      type: String,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export { UserModel };
