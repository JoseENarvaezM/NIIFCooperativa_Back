import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { ActivosFijosController } from "../controllers/ActivosFijos.controller";
import { ActivosFijosSchema } from "../schemas/ActivosFijosSchema";
import { ActivosFijosUCAdapter } from "../../../domain/useCases/ActivosFijosUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { ActivosFijosGatewayAdapter } from "../../output/persistence/gateway/ActivosFijosGatewayAdapter";

export class ActivosFijosRoutes{
    static get routes(): Router {
        const router = Router();
        
    }
}