"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valDados = void 0;
const valDados = (val) => {
    if (typeof val !== "object" || val === null) {
        return false;
    }
    const obj = val;
    return (typeof obj.title === "string" &&
        typeof obj.subtitle === "string");
};
exports.valDados = valDados;
