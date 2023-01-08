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
exports.subjectRegister = exports.subjects = void 0;
const subject_1 = __importDefault(require("../model/subject"));
const subjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield subject_1.default.find();
        return res.json(data).status(302);
    }
    catch (err) {
        res.status(404).send("Não foi possivel exibir as assuntos, tente novamente!");
    }
});
exports.subjects = subjects;
const subjectRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const data = yield subject_1.default.create(req.body);
        return res.json(data).status(201);
    }
    catch (err) {
        res.status(400).send("Não foi possivel cadastrar o assunto, tente novamente!");
    }
});
exports.subjectRegister = subjectRegister;
//# sourceMappingURL=subjectController.js.map