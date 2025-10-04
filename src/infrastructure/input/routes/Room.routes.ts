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

import { EncryptAdapter } from "../../output/auth/EncryptAdapter";
import { AuthAdapter } from "../../output/auth/AuthAdapter";

export class RoomRoutes {
    static get routes(): Router {
        const router = Router();

        const roomGateway: RoomGatewayIntPort = new RoomGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const roomUseCases = new RoomUCAdapter(roomGateway, exceptionHandler);
        const roomController: RoomController = new RoomController(roomUseCases);
        const validatorMiddleware = new ValidatorMiddleware(RoomSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler, new EncryptAdapter(), new AuthAdapter()));

        router.post("/", authMiddleware.authenticate("professor"),validatorMiddleware.validate, roomController.postRoom);
        router.get("/:roomID", authMiddleware.authenticate("professor"), roomController.getRoom);
        router.get("/", authMiddleware.authenticate("professor"), roomController.getRoomsByTeacher);
        router.put("/:roomID", authMiddleware.authenticate("professor"), validatorMiddleware.validate, roomController.putRoom);
        router.delete("/:roomID", authMiddleware.authenticate("professor"), roomController.deleteRoom);
        router.post("/validate-password", roomController.validateRoomPassword);
        router.put("/change-state/:roomID", authMiddleware.authenticate("professor"), roomController.changeRoomState);

        return router;
    }
}