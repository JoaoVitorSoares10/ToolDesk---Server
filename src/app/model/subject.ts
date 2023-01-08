import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
    {   
      title: {
        type: String,
        required: true
      }
    }
);
 
export = mongoose.model("subjects", subjectSchema);