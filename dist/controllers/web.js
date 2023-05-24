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
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
const scrapping_1 = require("../models/scrapping");
const banco_1 = require("../models/banco");
const api_error_1 = require("../helpers/api-error");
const web = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.query.noticia;
    if (typeof url !== 'string') {
        throw new api_error_1.UnprocessableEntityError("O link não é um tipo válido!");
    }
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(url)) {
        throw new api_error_1.UnprocessableEntityError("A URL não foi fornecida corretamente.");
    }
    const dadosScraping = yield (0, scrapping_1.scrapping)(url);
    if (dadosScraping === undefined) {
        throw new api_error_1.NotFoundError("Não foi possivel encontrar um titulo ou subtitulo.");
    }
    const bancoRetorno = yield (0, banco_1.inserir)(dadosScraping);
    if (typeof bancoRetorno !== "number")
        throw new api_error_1.BadRequestError("Não foi possivel salvar no banco!");
    return res.json(dadosScraping);
});
exports.web = web;
