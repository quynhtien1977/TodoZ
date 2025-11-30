import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);

        console.log("Kết nối DB thành công!");
    } catch (error) {

        console.error("Kết nói DB thất bại!", error);
        process.exit(1); //Đóng connect nếu fail
    }
};