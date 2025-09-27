import express from 'express';
import cors from "cors";
import { configDotenv } from 'dotenv';
import connectDB from './config/mongodb.js';
configDotenv();

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(cors());
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});