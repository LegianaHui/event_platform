import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  //透過clerk註冊登入的帳號﹐衍生的ID。
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  photo: { type: String, required: true },
});

//使用現在的Database模型，或者創建新的模型。
const User = models.User || model("User", UserSchema);

export default User;
