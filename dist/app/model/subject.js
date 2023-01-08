"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const subjectSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    }
});
module.exports = mongoose_1.default.model("subjects", subjectSchema);
//# sourceMappingURL=subject.js.map