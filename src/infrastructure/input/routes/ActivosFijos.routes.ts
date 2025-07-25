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

export class ActivosFijosRoutes{
    static get routes(): Router {
        const router = Router();

        const activosFijosGateway: FormsGatewayIntPort<FormActivosFijos> = new ActivosFijosGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const activosFijosUseCases = new ActivosFijosUCAdapter(activosFijosGateway,exceptionHandler);
        const activosFijosController: ActivosFijosController = new ActivosFijosController(activosFijosUseCases);
        const validatorMiddleware = new ValidatorMiddleware(ActivosFijosSchema);

        router.post("/", validatorMiddleware.validate, activosFijosController.postActivoFijo);
        router.get("/", activosFijosController.getActivosFijos);
        router.get("/:id", activosFijosController.getIDActivoFijo);
        router.put("/:id", validatorMiddleware.validate, activosFijosController.putActivoFijo);

        return router;
    }

}