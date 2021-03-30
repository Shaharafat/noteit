import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// connect mongoose
const initialiseDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Connected to mongodb'));
};

// export module
export default initialiseDB;
