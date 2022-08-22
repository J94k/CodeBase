import net from "node:net";
import http from "node:http";

const server = http.createServer();
const wsServer = new net.Socket({ server });
