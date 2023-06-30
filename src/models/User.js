import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      requied: true,
      unique: true,
    },
    email: {
      type: String,
      requied: true,
      unique: true,
    },
    password: {
      type: String,
      requied: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('User', userSchema);
