import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { EsfPatrimonioController } from "../controllers/EsfPatrimonio.controller";
import { ESFPatrimonioSchema } from "../schemas/EsfPatrimonioSchema";
import { EsfPatrimonioUCAdapter } from "../../../domain/useCases/EsfPatrimonioUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { EsfPatrimonioGatewayAdapter } from "../../output/persistence/gateway/EsfPatrimonioGatewayAdapter";

import { FormEsfPatrimonio } from "../../../domain/models/FormEsfPatrimonioModel";

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

export class EsfPatrimonioRoutes {
    static get routes(): Router {
        const router = Router();

        const esfPatrimonioGateway: FormsGatewayIntPort<FormEsfPatrimonio> = new EsfPatrimonioGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const esfPatrimonioUseCases = new EsfPatrimonioUCAdapter(esfPatrimonioGateway,exceptionHandler);
        const esfPatrimonioController: EsfPatrimonioController = new EsfPatrimonioController(esfPatrimonioUseCases);
        const validatorMiddleware = new ValidatorMiddleware(ESFPatrimonioSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));


        router.get("/id", authMiddleware.authenticate("student"), esfPatrimonioController.getIDEsfPatrimonio);
        router.put("/id", validatorMiddleware.validate, authMiddleware.authenticate("student"), esfPatrimonioController.putEsfPatrimonio);
        router.get("/student/:stuID/room/:roomID", authMiddleware.authenticate("professor"), esfPatrimonioController.getEsfPatrimonioByStudentAndRoom);
        return router;
    }
}