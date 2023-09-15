import mongoose from "mongoose";

export default async function connectDB() {
  try {
    //Checking if the connection is established.
    if (mongoose.connection.readyState === 0) {
      //awaiting connection to the database
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
}
