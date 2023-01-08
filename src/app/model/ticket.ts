import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
    {   
      cod: {
        type: Number,
        required: true
      },
      status: {
        type: Boolean,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      requester: {
        type: String,
        required: false
      },
      urgency: {
        type: String,
        required: false
      }
    },
    {
      timestamps: true
    }
  );
 
export = mongoose.model("tickets", ticketSchema);