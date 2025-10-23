import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { DetalleRenglonesController } from "../controllers/DetalleRenglones.controller";
import { DetalleRenglonesSchema } from "../schemas/DetalleRenglonesSchema";
import { DetalleRenglonesUCAdapter } from "../../../domain/useCases/DetalleRenglonesUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { DetalleRenglonesGatewayAdapter } from "../../output/persistence/gateway/DetalleRenglonesGatewayAdapter";

import { FormDetalleRenglones } from "../../../domain/models/FormDetallerEnglonesModel";

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

import { EncryptAdapter } from "../../output/auth/EncryptAdapter";
import { AuthAdapter } from "../../output/auth/AuthAdapter";

import { StudentRoomMiddleware } from "../middlewares/StudentRoomMiddleware";
import { RoomUCAdapter } from "../../../domain/useCases/RoomUCAdapter";
import { RoomGatewayAdapter } from "../../output/persistence/gateway/RoomGatewayAdapter";

export class DetalleRenglonesRoutes {
    static get routes(): Router {
        const router = Router();

        const detalleRenglonesGateway: FormsGatewayIntPort<FormDetalleRenglones> = new DetalleRenglonesGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();

        const studentRoomMiddleware = new StudentRoomMiddleware(new RoomUCAdapter(new RoomGatewayAdapter(), exceptionHandler));

        const detalleRenglonesUseCases = new DetalleRenglonesUCAdapter(detalleRenglonesGateway,exceptionHandler);
        const detalleRenglonesController: DetalleRenglonesController = new DetalleRenglonesController(detalleRenglonesUseCases);
        const validatorMiddleware = new ValidatorMiddleware(DetalleRenglonesSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler, new EncryptAdapter(), new AuthAdapter()));


        router.get("/id", authMiddleware.authenticate("student"), detalleRenglonesController.getIDDetalleRenglones);
        router.put("/id", validatorMiddleware.validate, authMiddleware.authenticate("student"), studentRoomMiddleware.verifyRoom(), detalleRenglonesController.putDetalleRenglones);
        router.get("/student/:stuID/room/:roomID", authMiddleware.authenticate("professor"), detalleRenglonesController.getDetalleRenglonesByStudentAndRoom);
        return router;
    }
}