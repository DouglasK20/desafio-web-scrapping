"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = require("express");
const web_1 = require("../controllers/web");
const router = (0, express_1.Router)();
router.post('/noticia_g1', web_1.web);
exports.default = router;
