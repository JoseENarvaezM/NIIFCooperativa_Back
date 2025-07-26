import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { CaratulaController } from "../controllers/Caratula.controller";
import { CaratulaSchema } from "../schemas/CaratulaSchema";
import { CaratulaUCAdapter } from "../../../domain/useCases/CaratulaUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { CaratulaGatewayAdapter } from "../../output/persistence/gateway/CaratulaGatewayAdapter";

import { FormCaratula } from "../../../domain/models/FormCaratulaModel";

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

export class CaratulaRoutes {
    static get routes(): Router {
        const router = Router();

        const caratulaGateway: FormsGatewayIntPort<FormCaratula> = new CaratulaGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const caratulaUseCases = new CaratulaUCAdapter(caratulaGateway,exceptionHandler);
        const caratulaController: CaratulaController = new CaratulaController(caratulaUseCases);
        const validatorMiddleware = new ValidatorMiddleware(CaratulaSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));

        router.post("/", validatorMiddleware.validate, authMiddleware.authenticate("student"), caratulaController.postCaratula);
        router.get("/", authMiddleware.authenticate("student"), caratulaController.getCaratulas);
        router.get("/:id", authMiddleware.authenticate("student"), caratulaController.getIDCaratula);
        router.put("/:id", validatorMiddleware.validate, authMiddleware.authenticate("student"), caratulaController.putCaratula);

        return router;
    }
}