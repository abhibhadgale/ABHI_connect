import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-rua2otj-shard-00-00.s536j59.mongodb.net:27017,ac-rua2otj-shard-00-01.s536j59.mongodb.net:27017,ac-rua2otj-shard-00-02.s536j59.mongodb.net:27017/?ssl=true&replicaSet=atlas-opw1qw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Web-Connect`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connectiong with the database ", error.message)
    }
}

export default Connection;