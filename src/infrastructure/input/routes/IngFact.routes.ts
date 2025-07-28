import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { IngFactController } from "../controllers/IngFact.controller";
import { IngresosFacturacionSchema } from "../schemas/IngFactSchema";
import { IngFactUCAdapter } from "../../../domain/useCases/IngFactUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { IngFactGatewayAdapter } from "../../output/persistence/gateway/IngFactGatewayAdapter";

import { FormIngresosFancturacion } from "../../../domain/models/FormIngresosFancturacionModel";

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

export class IngFactRoutes {
    static get routes(): Router {
        const router = Router();

        const ingFactGateway: FormsGatewayIntPort<FormIngresosFancturacion> = new IngFactGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const ingFactUseCases = new IngFactUCAdapter(ingFactGateway,exceptionHandler);
        const ingFactController: IngFactController = new IngFactController(ingFactUseCases);
        const validatorMiddleware = new ValidatorMiddleware(IngresosFacturacionSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));


        router.get("/id", authMiddleware.authenticate("student"), ingFactController.getIDIngresosFacturacion);
        router.put("/id", validatorMiddleware.validate, authMiddleware.authenticate("student"), ingFactController.putIngresosFacturacion);
        router.get("/student/:stuID/room/:roomID", authMiddleware.authenticate("professor"), ingFactController.getFormByStudentAndRoom);
        return router;
    }
}