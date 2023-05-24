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
exports.scrapping = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const interface_1 = require("../types/interface");
const scrapping = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({ headless: 'new' });
    const page = yield browser.newPage();
    yield page.goto(`${url}`);
    const pageContent = yield page.evaluate(() => {
        var _a, _b;
        return {
            title: (_a = document.querySelector('.content-head__title')) === null || _a === void 0 ? void 0 : _a.innerHTML,
            subtitle: (_b = document.querySelector('.content-head__subtitle')) === null || _b === void 0 ? void 0 : _b.innerHTML
        };
    });
    const dadoValidado = (0, interface_1.valDados)(pageContent) ? pageContent : undefined;
    return dadoValidado;
});
exports.scrapping = scrapping;
