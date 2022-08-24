import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    projName: {
      type: String,
      required: true,
    },
    projDescription: {
      type: String,
      required: false,
      default: "프로젝트 설명이 아직 없습니다. 추가해주세요",
    },
  },
  {
    timestamps: true,
  }
);

export { ProjectSchema };
