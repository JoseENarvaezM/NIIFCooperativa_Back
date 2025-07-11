import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { ImpuestoDiferidoController } from "../controllers/ImpuestoDiferido.controller";
import { ImpuestoDiferidoSchema } from "../schemas/ImpuestoDiferidoSchema";
import { ImpuestoDiferidoUCAdapter } from "../../../domain/useCases/ImpuestoDiferidoUCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { ImpuestoDiferidoGatewayAdapter } from "../../output/persistence/gateway/ImpuestoDiferidoGatewayAdapter";

import { FormImpuestoDiferido } from "../../../domain/models/FormImpuestoDiferidoModel";

export class ImpuestoDiferidoRoutes {
    static get routes(): Router {
        const router = Router();

        const impuestoDiferidoGateway: FormsGatewayIntPort<FormImpuestoDiferido> = new ImpuestoDiferidoGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const impuestoDiferidoUseCases = new ImpuestoDiferidoUCAdapter(impuestoDiferidoGateway);
        const impuestoDiferidoController: ImpuestoDiferidoController = new ImpuestoDiferidoController(impuestoDiferidoUseCases);
        const validatorMiddleware = new ValidatorMiddleware(ImpuestoDiferidoSchema);

        router.post("/", validatorMiddleware.validate, impuestoDiferidoController.createImpuestoDiferido);
        router.get("/", impuestoDiferidoController.listImpuestoDiferido);
        router.get("/:id", impuestoDiferidoController.getIDImpuestoDiferido);
        router.put("/:id", validatorMiddleware.validate, impuestoDiferidoController.updateImpuestoDiferido);

        return router;
    }
}