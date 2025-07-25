import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";

import { RoomGatewayAdapter } from "../../output/persistence/gateway/RoomGatewayAdapter";
import { RoomGatewayIntPort } from "../../../application/output/RoomGatewayIntPort";
import { RoomUCAdapter } from "../../../domain/useCases/RoomUCAdapter";
import { RoomController } from "../controllers/Room.controller";

import { RoomSchema } from "../schemas/RoomSchema";


export class RoomRoutes {
    static get routes(): Router {
        const router = Router();

        const roomGateway: RoomGatewayIntPort = new RoomGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const roomUseCases = new RoomUCAdapter(roomGateway, exceptionHandler);
        const roomController: RoomController = new RoomController(roomUseCases);
        const validatorMiddleware = new ValidatorMiddleware(RoomSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));

        router.post("/", authMiddleware.authenticateProfesor,validatorMiddleware.validate, roomController.postRoom);
        router.get("/:roomID", authMiddleware.authenticateProfesor, roomController.getRoom);
        router.get("/", authMiddleware.authenticateProfesor, roomController.getRoomsByTeacher);
        router.get("/user/:usuID", authMiddleware.authenticateProfesor, roomController.getRoomsByUser);
        router.put("/:roomID", authMiddleware.authenticateProfesor, validatorMiddleware.validate, roomController.putRoom);
        router.put("/name/:roomID", authMiddleware.authenticateProfesor, validatorMiddleware.validate, roomController.putRoomName);
        router.delete("/:roomID", authMiddleware.authenticateProfesor, roomController.deleteRoom);
        router.post("/validate-password", roomController.validateRoomPassword);

        return router;
    }
}