"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("./middlewares/error");
const routes_1 = __importDefault(require("./routers/routes"));
const express = require('express');
const app = express();
app.use(express.json());
app.use(routes_1.default);
app.use(error_1.errorMiddleware);
app.listen(3000, () => { console.log("Server is running on PORT 8080"); });
