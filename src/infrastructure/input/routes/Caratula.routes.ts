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

export class CaratulaRoutes {
    static get routes(): Router {
        const router = Router();

        const caratulaGateway: FormsGatewayIntPort<FormCaratula> = new CaratulaGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const caratulaUseCases = new CaratulaUCAdapter(caratulaGateway);
        const caratulaController: CaratulaController = new CaratulaController(caratulaUseCases);
        const validatorMiddleware = new ValidatorMiddleware(CaratulaSchema);

        router.post("/", validatorMiddleware.validate, caratulaController.postCaratula);
        router.get("/", caratulaController.getCaratulas);
        router.get("/:id", caratulaController.getIDCaratula);
        router.put("/:id", validatorMiddleware.validate, caratulaController.putCaratula);

        return router;
    }
}