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

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

export class ResumenEsfRoutes {
    static get routes(): Router {
        const router = Router();

        const resumenEsfGateway: FormsGatewayIntPort<FormResumenEsferi> = new ResumenEsfGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const resumenEsfUseCases = new ResumenEsfUCAdapter(resumenEsfGateway,exceptionHandler);
        const resumenEsfController: ResumenEsfController = new ResumenEsfController(resumenEsfUseCases);
        const validatorMiddleware = new ValidatorMiddleware(ResumenESFSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));


        router.get("/id", authMiddleware.authenticate("student"), resumenEsfController.getIDResumenEsferi);
        router.put("/id", validatorMiddleware.validate, authMiddleware.authenticate("student"), resumenEsfController.updateResumenEsferi);
        router.get("/student/:stuID/room/:roomID", authMiddleware.authenticate("professor"), resumenEsfController.getResumenEsferiByStudentAndRoom);
        return router;
    }
}