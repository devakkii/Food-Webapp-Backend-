import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://akram:5029147@cluster0.vgjzrcw.mongodb.net/FOOD_DELIVERY').then(()=>console.log("DB Connected"));
}