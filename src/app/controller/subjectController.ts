import {  Request, Response } from 'express';
import subject from '../model/subject';

interface ISubject{
    _id: string,
    title: string,
    __v: Number
}

export const subjects = async (req:Request, res:Response)=> {
    try{
        const data:ISubject[] = await subject.find();
        return res.json(data).status(302);
    }catch(err){
        res.status(404).send("Não foi possivel exibir as assuntos, tente novamente!")
    }
}

export const subjectRegister = async (req:Request, res:Response) => {
    try{
        const data:ISubject[] = await subject.create(req.body)
        return res.json(data).status(201);
    }catch(err){
        res.status(400).send("Não foi possivel cadastrar o assunto, tente novamente!")
    }
}
