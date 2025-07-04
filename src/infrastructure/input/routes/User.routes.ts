import { Router } from "express";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { UserGatewayIntPort } from "../../../application/output/UserGatewayIntPort";
import { UserUCAdapter } from "../../../domain/useCases/UserUCAdapter";
import { UserController } from "../controllers/User.controller";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";
import { userSchema } from "../schemas/UserSchema";

export class UserRoutes {
    static get routes(): Router {
        const router = Router();

        const userGateway: UserGatewayIntPort = new UserGatewayAdapter(
        );
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const userUseCases = new UserUCAdapter(userGateway, exceptionHandler);
        const userController: UserController = new UserController(
            userUseCases
        );
        const validatorMiddleware = new ValidatorMiddleware(userSchema);
        router.post("/admin",validatorMiddleware.validate,userController.postAdmin);
        router.post("/professor", validatorMiddleware.validate,userController.postProfessor);
        router.get("/admin", userController.getAdmins);
        router.get("/professor", userController.getProfessors);
        router.get("/:usuID", userController.getUser);
        router.delete("/:usuID",userController.deleteUser);
        router.put("/admin/:usuID",validatorMiddleware.validate,userController.putAdmin);
        router.put("/professor/:usuID",validatorMiddleware.validate,userController.putProfessor);
        router.put("/password",userController.changeUserPassword);

        return router;
    }
}