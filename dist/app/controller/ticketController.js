"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketDelete = exports.ticketStatusUpdate = exports.ticketUpdate = exports.ticketRegister = exports.ticketById = exports.Tickets = exports.countTickets = void 0;
const ticket_1 = __importDefault(require("../model/ticket"));
const countTickets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ticket_1.default.find().count(function (err, count) {
            if (err) {
                console.log(err);
            }
            else {
                return res.json({ "count": count }).status(302);
            }
        });
    }
    catch (err) {
        res.status(404).send("Não foi possivel exibir os chamados em aberto, tente novamente!");
    }
});
exports.countTickets = countTickets;
const Tickets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { option } = req.params;
        const data = yield ticket_1.default.find(option == "open" ? { status: false } : { status: true });
        return res.json(data).status(302);
    }
    catch (err) {
        res.status(404).send("Não foi possivel exibir os chamados em aberto, tente novamente!");
    }
});
exports.Tickets = Tickets;
const ticketById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const data = yield ticket_1.default.findById(req.params.id).exec();
        return res.json(data).status(302);
    }
    catch (err) {
        res.status(404).send("Não foi possivel exibir o chamado, tente novamente!");
    }
});
exports.ticketById = ticketById;
const ticketRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const data = yield ticket_1.default.create(req.body);
        return res.json(data).status(201);
    }
    catch (err) {
        res.status(400).send("Não foi possivel cadastrar o chamado, tente novamente!");
    }
});
exports.ticketRegister = ticketRegister;
const ticketUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status, subject, description, requester, urgency } = req.body;
        const data = yield ticket_1.default.findByIdAndUpdate(req.params.id, {
            status,
            subject,
            description,
            requester,
            urgency
        });
        return res.json(data).status(202);
    }
    catch (err) {
        res.status(404).send("Não foi possivel atualizar o chamado, tente novamente!");
    }
});
exports.ticketUpdate = ticketUpdate;
const ticketStatusUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.body;
        const data = yield ticket_1.default.findByIdAndUpdate(req.params.id, { status });
        return res.json(data).status(202);
    }
    catch (err) {
        res.status(404).send("Não foi possivel atualizar o status do chamado, tente novamente!");
    }
});
exports.ticketStatusUpdate = ticketStatusUpdate;
const ticketDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ticket_1.default.findByIdAndDelete(req.params.id);
        return res.json(data);
    }
    catch (err) {
        res.status(404).send("Não foi possivel deletar o chamado, tente novamente!");
    }
});
exports.ticketDelete = ticketDelete;
//# sourceMappingURL=ticketController.js.map