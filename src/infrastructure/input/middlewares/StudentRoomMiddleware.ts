import { Request, Response, NextFunction } from "express";
import { RoomUCIntPort } from "../../../application/input/RoomUCIntPort";

export class StudentRoomMiddleware {
  constructor(private readonly roomUseCases: RoomUCIntPort) {}
  verifyRoom = () => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const user = req.user;
        if (user.usuRole === "student") {
            const roomID = user.roomID;

            const roomExists = await this.roomUseCases.obtainRoomByID(roomID);

            if (!roomExists) {
              res.status(404).json({ message: "Sala no encontrada, los cambios que realice no seran guardados, comuniquese con el docente." });
              return;
            }

            if (roomExists.roomStatus === "closed"){
                res.status(403).json({ message: "La sala está cerrada, los cambios que realice no seran guardados, comuniquese con el docente." });
                return;
            }
          }
        next();
      } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    };
  };
}