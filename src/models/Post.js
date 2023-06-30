import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      requied: true,
    },
    desc: {
      type: String,
      requied: true,
    },
    img: {
      type: String,
      requied: true,
    },
    content: {
      type: String,
      requied: true,
    },
    username: {
      type: String,
      requied: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);
