import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    userNumber: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    userAddress: {
      type: String,
      required: true,
      trim: true,
    },
    userPassword: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const User = model("users", UserSchema);
