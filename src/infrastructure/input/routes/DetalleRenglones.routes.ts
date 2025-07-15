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

export class DetalleRenglonesRoutes {
    static get routes(): Router {
        const router = Router();

        const detalleRenglonesGateway: FormsGatewayIntPort<FormDetalleRenglones> = new DetalleRenglonesGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const detalleRenglonesUseCases = new DetalleRenglonesUCAdapter(detalleRenglonesGateway,exceptionHandler);
        const detalleRenglonesController: DetalleRenglonesController = new DetalleRenglonesController(detalleRenglonesUseCases);
        const validatorMiddleware = new ValidatorMiddleware(DetalleRenglonesSchema);

        router.post("/", validatorMiddleware.validate, detalleRenglonesController.postDetalleRenglones);
        router.get("/", detalleRenglonesController.getDetalleRenglones);
        router.get("/:id", detalleRenglonesController.getIDDetalleRenglones);
        router.put("/:id", validatorMiddleware.validate, detalleRenglonesController.putDetalleRenglones);

        return router;
    }
}