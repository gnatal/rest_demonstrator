"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//const port = 3000; // bad pratice, if you need to deploy to another port this will break
const port = process.env.PORT; // good practice
app.get('/', (req, res) => {
    res.send('new hello World');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
