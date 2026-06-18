import mongoose, { type Model, Schema, type InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: true,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    refreshToken: {
      type: String,
      select: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

type UserDocument = InferSchemaType<typeof userSchema>;
type UserModel = Model<UserDocument>;

export const User = mongoose.model<UserDocument, UserModel>("User", userSchema);
