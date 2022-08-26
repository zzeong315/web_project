import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "프로젝트 설명이 아직 없습니다. 추가해주세요",
    },
    start: {
      type: String,
      required: false,
      default: "시작 날짜를 정해주세요.",
    },
    end: {
      type: String,
      required: false,
      default: "끝난 날짜를 정해주세요.",
    },
  },
  {
    timestamps: true,
  }
);
const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel, ProjectSchema };
