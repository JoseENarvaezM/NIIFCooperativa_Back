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
        const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {Promise.resolve(fn(req, res, next)).catch(next);};
        
        router.post("/", validatorMiddleware.validate, roomController.postRoom);
        router.get("/:roomID", asyncHandler(roomController.getRoom));
        router.get("/teacher/:teaID", asyncHandler(roomController.getRoomsByTeacher));
        router.get("/user/:usuID", asyncHandler(roomController.getRoomsByUser));
        router.put("/:roomID", validatorMiddleware.validate, asyncHandler(roomController.putRoom));
        router.put("/name/:roomID", validatorMiddleware.validate, asyncHandler(roomController.putRoomName));
        router.delete("/:roomID", asyncHandler(roomController.deleteRoom));
        router.delete("/date", asyncHandler(roomController.deleteRoomByDate));
        router.post("/validate-password", asyncHandler(roomController.validateRoomPassword));

        return router;
    }
}