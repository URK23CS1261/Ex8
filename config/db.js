import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://tanviksri_db_user:PVVp1QHUkgyqnqHN@athena.vin4dwf.mongodb.net/realestateDB");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};

export default connectDB;
