import { Router } from "express";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";

import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { UserGatewayIntPort } from "../../../application/output/UserGatewayIntPort";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";
import { AuthController } from "../controllers/Auth.controller";
import { AuthSchema } from "../schemas/AuthSchema";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();

        const userGateway: UserGatewayIntPort = new UserGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const authUseCases = new AuthUCAdapter(userGateway, exceptionHandler);
        const authController: AuthController = new AuthController(authUseCases);
        const validatorMiddleware = new ValidatorMiddleware(AuthSchema);

        router.post("/login", validatorMiddleware.validate, authController.login);
        router.post("/logout", authController.logout);

        return router;
    }
}