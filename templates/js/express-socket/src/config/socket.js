import { Server } from "socket.io";
import logger from "./logger.js";

export const initSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    logger.info(`New client connected: ${socket.id}`);

    socket.on("message", (data) => {
      logger.info(`Message received: ${data}`);
      io.emit("message", `Server received: ${data}`);
    });

    socket.on("disconnect", () => {
      logger.warn(`Client disconnected: ${socket.id}`);
    });
  });

  return io;
};
