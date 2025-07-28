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

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

export class ImpuestoDiferidoRoutes {
    static get routes(): Router {
        const router = Router();

        const impuestoDiferidoGateway: FormsGatewayIntPort<FormImpuestoDiferido> = new ImpuestoDiferidoGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const impuestoDiferidoUseCases = new ImpuestoDiferidoUCAdapter(impuestoDiferidoGateway,exceptionHandler);
        const impuestoDiferidoController: ImpuestoDiferidoController = new ImpuestoDiferidoController(impuestoDiferidoUseCases);
        const validatorMiddleware = new ValidatorMiddleware(ImpuestoDiferidoSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));


        router.get("/id", authMiddleware.authenticate("student"), impuestoDiferidoController.getIDImpuestoDiferido);
        router.put("/id", validatorMiddleware.validate, authMiddleware.authenticate("student"), impuestoDiferidoController.updateImpuestoDiferido);
        router.get("/student/:stuID/room/:roomID", authMiddleware.authenticate("professor"), impuestoDiferidoController.getImpuestoDiferidoByStudentAndRoom);
        return router;
    }
}