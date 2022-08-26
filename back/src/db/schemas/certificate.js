import { Schema, model } from "mongoose";

const CertificateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: "설명이 아직 없습니다. 추가해 주세요.",
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export { CertificateSchema };
