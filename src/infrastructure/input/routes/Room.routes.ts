import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

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
        
        router.post("/", validatorMiddleware.validate, roomController.postRoom);
        router.get("/:roomID", roomController.getRoom);
        router.get("/teacher/:teaID", roomController.getRoomsByTeacher);
        router.get("/user/:usuID", roomController.getRoomsByUser);
        router.put("/:roomID", validatorMiddleware.validate, roomController.putRoom);
        router.put("/name/:roomID", validatorMiddleware.validate, roomController.putRoomName);
        router.delete("/:roomID", roomController.deleteRoom);
        router.post("/validate-password", roomController.validateRoomPassword);

        return router;
    }
}