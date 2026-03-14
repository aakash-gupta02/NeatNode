import bcrypt from "bcryptjs";
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) {
    next();
    return;
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

type UserMethods = {
  comparePassword(candidatePassword: string): Promise<boolean>;
};

type UserDocument = InferSchemaType<typeof userSchema> & UserMethods;
type UserModel = Model<UserDocument>;

userSchema.methods.comparePassword = async function comparePassword(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User =
  (mongoose.models.User as UserModel | undefined) ?? mongoose.model<UserDocument, UserModel>("User", userSchema);
