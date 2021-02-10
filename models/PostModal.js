  
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Project: { type: String, required:  true },
  Post: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: String },
  createdAt: {
    type: Date,
    default: new Date(),
},
});

export default mongoose.model("Post", userSchema);