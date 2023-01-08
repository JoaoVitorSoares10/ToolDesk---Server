"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const ticketSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true
});
module.exports = mongoose_1.default.model("tickets", ticketSchema);
//# sourceMappingURL=ticket.js.map