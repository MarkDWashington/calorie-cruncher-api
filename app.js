"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importDefault(require('express'));
const loginGetRoutes = __importDefault(require("./dist/routes/loginGetRoutes"));
const server = express.default();
const port = 3000;

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get('/test', (req, res) => {
    res.send('two of them');
})

server.use(express.default.urlencoded({ extended: true }));
server.use(express.default.json());

server.use("/", loginGetRoutes.default);
console.log("Server is starting");

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})