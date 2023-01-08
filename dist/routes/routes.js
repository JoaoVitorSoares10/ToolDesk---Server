"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const ticket = __importStar(require("../app/controller/ticketController"));
const subject = __importStar(require("../app/controller/subjectController"));
const Router = express_1.default.Router();
Router.get('/ticket/count', ticket.countTickets);
Router.get('/ticket/:option', ticket.Tickets);
Router.get('/ticket/id/:id', ticket.ticketById);
Router.post('/ticket/register', ticket.ticketRegister);
Router.put('/ticket/update/:id', ticket.ticketUpdate);
Router.put('/ticket/status/:id', ticket.ticketStatusUpdate);
Router.delete('/ticket/delete/:id', ticket.ticketDelete);
Router.get('/subject', subject.subjects);
Router.post('/subject/register', subject.subjectRegister);
module.exports = Router;
//# sourceMappingURL=routes.js.map