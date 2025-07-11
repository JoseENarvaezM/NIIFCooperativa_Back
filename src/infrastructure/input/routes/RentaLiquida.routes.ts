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

export class RentaLiquidaRoutes {
    static get routes(): Router {
        const router = Router();

        const rentaLiquidaGateway: FormsGatewayIntPort<FormRentaLiquida> = new RentaLiquidaGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const rentaLiquidaUseCases = new RentaLiquidaUCAdapter(rentaLiquidaGateway);
        const rentaLiquidaController: RentaLiquidaController = new RentaLiquidaController(rentaLiquidaUseCases);
        const validatorMiddleware = new ValidatorMiddleware(RentaLiquidaSchema);

        router.post("/", validatorMiddleware.validate, rentaLiquidaController.createRentaLiquida);
        router.get("/", rentaLiquidaController.listRentaLiquida);
        router.get("/:id", rentaLiquidaController.getIDRentaLiquida);
        router.put("/:id", validatorMiddleware.validate, rentaLiquidaController.updateRentaLiquida);

        return router;
    }
}