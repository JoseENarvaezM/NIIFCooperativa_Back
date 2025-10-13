import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";


import { ActivosFijosController } from "../controllers/ActivosFijos.controller";
import { ActivosFijosSchema } from "../schemas/ActivosFijosSchema";
import { ActivosFijosUCAdapter } from "../../../domain/useCases/ActivosFijosUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { ActivosFijosGatewayAdapter } from "../../output/persistence/gateway/ActivosFijosGatewayAdapter";

import { FormActivosFijos } from "../../../domain/models/FormActivosFijosModel";

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

import { EncryptAdapter } from "../../output/auth/EncryptAdapter";
import { AuthAdapter } from "../../output/auth/AuthAdapter";

import { StudentRoomMiddleware } from "../middlewares/StudentRoomMiddleware";
import { RoomUCAdapter } from "../../../domain/useCases/RoomUCAdapter";
import { RoomGatewayAdapter } from "../../output/persistence/gateway/RoomGatewayAdapter";

export class ActivosFijosRoutes{
    static get routes(): Router {
        const router = Router();

        const activosFijosGateway: FormsGatewayIntPort<FormActivosFijos> = new ActivosFijosGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();

        const studentRoomMiddleware = new StudentRoomMiddleware(new RoomUCAdapter(new RoomGatewayAdapter(), exceptionHandler));

        const activosFijosUseCases = new ActivosFijosUCAdapter(activosFijosGateway,exceptionHandler);
        const activosFijosController: ActivosFijosController = new ActivosFijosController(activosFijosUseCases);
        const validatorMiddleware = new ValidatorMiddleware(ActivosFijosSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler, new EncryptAdapter(), new AuthAdapter()));


        router.get("/id", authMiddleware.authenticate("student"), activosFijosController.getIDActivoFijo);
        router.put("/id", validatorMiddleware.validate, authMiddleware.authenticate("student"), studentRoomMiddleware.verifyRoom(), activosFijosController.putActivoFijo);
        router.get("/student/:stuID/room/:roomID", authMiddleware.authenticate("professor"), activosFijosController.getActivoFijoByStudentAndRoom);
        return router;
    }

}