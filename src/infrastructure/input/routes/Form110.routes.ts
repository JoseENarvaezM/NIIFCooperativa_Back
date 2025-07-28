import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { Form110Controller } from "../controllers/Form110.controller";
import { Formulario110Schema } from "../schemas/Form110Schema";
import { Form110UCAdapter } from "../../../domain/useCases/Form110UCAdapter";
import { FormsGatewayIntPort } from "../../../application/output/FormsGatewayIntPort";
import { Form110GatewayAdapter } from "../../output/persistence/gateway/Form110GatewayAdapter";

import { FormR110 } from "../../../domain/models/FormR110Model";

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";

export class Form110Routes {
    static get routes(): Router {
        const router = Router();

        const form110Gateway: FormsGatewayIntPort<FormR110> = new Form110GatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const form110UseCases = new Form110UCAdapter(form110Gateway,exceptionHandler);
        const form110Controller: Form110Controller = new Form110Controller(form110UseCases);
        const validatorMiddleware = new ValidatorMiddleware(Formulario110Schema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));


        router.get("/id", authMiddleware.authenticate("student"), form110Controller.getIDForm110);
        router.put("/id", validatorMiddleware.validate, authMiddleware.authenticate("student"), form110Controller.putForm110);
        router.get("/student/:stuID/room/:roomID", authMiddleware.authenticate("professor"), form110Controller.getForm110ByStudentAndRoom);
        return router;
    }
}