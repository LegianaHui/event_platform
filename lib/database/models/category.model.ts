import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

//使用現在的Database模型，或者創建新的模型。
const Category = models.Category || model("Category", CategorySchema);

export default Category;