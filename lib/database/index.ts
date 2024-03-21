//連接伺服數據庫

import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

//初始化
//如果沒有找到mongodb的全域屬性，將連線和設定為「空值」。
//(global as any)是指出在node.js中的mongoose，並非使用import的"mongoose"內容。
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn; //緩存是否已經連接Database?

  if (!MONGODB_URL) throw new Error("遺缺MONGODB_URL");

  //緩存連接到現有的Database，或者創建新的Database。
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "evently",
      bufferCommands: false, //禁止緩衝，與相關的所有型號連接
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

// 伺服器動作
// conectToDatabase() ... Database
// 確保動作可以在現有連接下進行，無需不斷創建新的連接。
// 緩取可以保持原有的承諾，讓動作可以重覆使用此通道; 或者創建一個新的通道並保存承諾。
