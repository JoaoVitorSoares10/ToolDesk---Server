import {  Request, Response } from 'express';
import ticket from '../model/ticket';

interface ITicket {
    _id: string,
    cod: number,
    status: Boolean,
    subject: String,
    description: String,
    requester: String,
    urgency: String,
    createdAt: string,
    updatedAt: string,
    __v: Number
}

export const countTickets = async (req:Request, res:Response)=> {
    try{
        ticket.find().count(function (err, count) {
            if (err) {
                console.log(err)
            }else{
                return res.json({"count": count}).status(302);
            } 
        })
    }catch(err){
        res.status(404).send("Não foi possivel exibir os chamados em aberto, tente novamente!")
    }
}

export const Tickets = async (req:Request, res:Response)=> {
    try{
        const { option } = req.params;
        const data:ITicket[] = await ticket.find(option == "open" ? { status: false} : { status: true})
        return res.json(data).status(302);
    }catch(err){
        res.status(404).send("Não foi possivel exibir os chamados em aberto, tente novamente!")
    }
}

export const ticketById = async (req:Request, res:Response)=> {
    try{
        //@ts-ignore
        const data:ITicket[] = await ticket.findById(req.params.id).exec()
        return res.json(data).status(302);
    }catch(err){
        res.status(404).send("Não foi possivel exibir o chamado, tente novamente!")
    }
}

export const ticketRegister = async (req:Request, res:Response) => {
    try{
        //@ts-ignore
        const data:ITicket[] = await ticket.create(req.body)
        return res.json(data).status(201);
    }catch(err){
        res.status(400).send("Não foi possivel cadastrar o chamado, tente novamente!")
    }
}

export const ticketUpdate = async (req:Request, res:Response) => {
    try{
        const { status, subject, description, requester, urgency }:ITicket = req.body;
        const data:ITicket[] | null = await ticket.findByIdAndUpdate(req.params.id, { 
            status,
            subject,
            description,
            requester,
            urgency
        })
        return res.json(data).status(202);
    }catch(err){
        res.status(404).send("Não foi possivel atualizar o chamado, tente novamente!")
    }
}

export const ticketStatusUpdate = async (req:Request, res:Response) => {
    try{
        const { status }:ITicket = req.body;
        const data:ITicket[] | null = await ticket.findByIdAndUpdate(req.params.id, { status })
        return res.json(data).status(202);
    }catch(err){
        res.status(404).send("Não foi possivel atualizar o status do chamado, tente novamente!")
    }
}

export const ticketDelete = async (req:Request, res:Response) => {
    try{
        const data:ITicket[] | null = await ticket.findByIdAndDelete(req.params.id)
        return res.json(data);
    }catch(err){
        res.status(404).send("Não foi possivel deletar o chamado, tente novamente!")
    }
}