import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { RentaLiquidaController } from "../controllers/RentaLiquida.controller";
import { RentaLiquidaSchema } from "../schemas/RentaLiquidaSchema";
import { RentaLiquidaUCAdapter } from "../../../domain/useCases/RentaLiquidaUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { RentaLiquidaGatewayAdapter } from "../../output/persistence/gateway/RentaLiquidaGatewayAdapter";

import { FormRentaLiquida } from "../../../domain/models/FormRentaLiquidaModel";

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

export class RentaLiquidaRoutes {
    static get routes(): Router {
        const router = Router();

        const rentaLiquidaGateway: FormsGatewayIntPort<FormRentaLiquida> = new RentaLiquidaGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const rentaLiquidaUseCases = new RentaLiquidaUCAdapter(rentaLiquidaGateway,exceptionHandler);
        const rentaLiquidaController: RentaLiquidaController = new RentaLiquidaController(rentaLiquidaUseCases);
        const validatorMiddleware = new ValidatorMiddleware(RentaLiquidaSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));

        router.post("/", validatorMiddleware.validate, authMiddleware.authenticate("student"), rentaLiquidaController.createRentaLiquida);
        router.get("/", authMiddleware.authenticate("student"), rentaLiquidaController.listRentaLiquida);
        router.get("/:id", authMiddleware.authenticate("student"), rentaLiquidaController.getIDRentaLiquida);
        router.put("/:id", validatorMiddleware.validate, authMiddleware.authenticate("student"), rentaLiquidaController.updateRentaLiquida);

        return router;
    }
}