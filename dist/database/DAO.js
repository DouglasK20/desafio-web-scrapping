"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_all_in_one_1 = require("mysql-all-in-one");
const dao = new mysql_all_in_one_1.DataAccessObject({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'desafio'
});
exports.default = dao;
