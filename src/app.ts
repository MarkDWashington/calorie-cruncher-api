import express from "express";

import loginGetRoutes from "./routes/loginGetRoutes";

const server = express();
const port: number = 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/", loginGetRoutes);

console.log("Server is starting");

server.listen(port, () => console.log(`Server is listening on port ${port}`));