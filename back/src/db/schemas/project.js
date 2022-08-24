import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: false,
      default: "프로젝트 설명이 아직 없습니다. 추가해주세요",
    },
  },
  {
    timestamps: true,
  }
);
const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel, ProjectSchema };
