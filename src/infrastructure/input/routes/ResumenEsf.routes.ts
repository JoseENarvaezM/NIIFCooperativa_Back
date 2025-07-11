import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { ResumenEsfController } from "../controllers/ResumenEsf.controller";
import { ResumenESFSchema } from "../schemas/ResumenEsfSchema";
import { ResumenEsfUCAdapter } from "../../../domain/useCases/ResumenEsfUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { ResumenEsfGatewayAdapter } from "../../output/persistence/gateway/ResumenEsfGatewayAdapter";

import { FormResumenEsferi } from "../../../domain/models/FormResumenEsferiModel";

export class ResumenEsfRoutes {
    static get routes(): Router {
        const router = Router();

        const resumenEsfGateway: FormsGatewayIntPort<FormResumenEsferi> = new ResumenEsfGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const resumenEsfUseCases = new ResumenEsfUCAdapter(resumenEsfGateway);
        const resumenEsfController: ResumenEsfController = new ResumenEsfController(resumenEsfUseCases);
        const validatorMiddleware = new ValidatorMiddleware(ResumenESFSchema);

        router.post("/", validatorMiddleware.validate, resumenEsfController.createResumenEsferi);
        router.get("/", resumenEsfController.listResumenEsferi);
        router.get("/:id", resumenEsfController.getIDResumenEsferi);
        router.put("/:id", validatorMiddleware.validate, resumenEsfController.updateResumenEsferi);

        return router;
    }
}