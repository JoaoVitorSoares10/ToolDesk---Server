import express from "express";
import * as ticket from "../app/controller/ticketController";
import * as subject from "../app/controller/subjectController";

const Router = express.Router();

Router.get('/ticket/count', ticket.countTickets);
Router.get('/ticket/:option', ticket.Tickets);
Router.get('/ticket/id/:id', ticket.ticketById);
Router.post('/ticket/register', ticket.ticketRegister);
Router.put('/ticket/update/:id', ticket.ticketUpdate);
Router.put('/ticket/status/:id', ticket.ticketStatusUpdate);
Router.delete('/ticket/delete/:id', ticket.ticketDelete);

Router.get('/subject', subject.subjects);
Router.post('/subject/register', subject.subjectRegister);

export = Router;
