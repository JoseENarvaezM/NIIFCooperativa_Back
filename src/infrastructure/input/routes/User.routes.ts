import { Router } from "express";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";
import { UserGatewayIntPort } from "../../../application/output/UserGatewayIntPort";
import { UserUCAdapter } from "../../../domain/useCases/UserUCAdapter";
import { UserController } from "../controllers/User.controller";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";
import { userSchema, UserEditSchema } from "../schemas/UserSchema";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";
import { ChangePasswordSchema } from "../schemas/ChangePasswordSchema";

export class UserRoutes {
    static get routes(): Router {
        const router = Router();

        const userGateway: UserGatewayIntPort = new UserGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const userUseCases = new UserUCAdapter(userGateway, exceptionHandler);
        const userController: UserController = new UserController(userUseCases);
        const validatorMiddleware = new ValidatorMiddleware(userSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));
        const userEditValidatorMiddleware = new ValidatorMiddleware(UserEditSchema);
        const changePasswordValidatorMiddleware = new ValidatorMiddleware(ChangePasswordSchema);

        router.post("/admin",authMiddleware.authenticate("admin"),validatorMiddleware.validate,userController.postAdmin);
        router.post("/professor", authMiddleware.authenticate("admin"),validatorMiddleware.validate,userController.postProfessor);
        router.get("/professor", authMiddleware.authenticate("admin"),userController.getProfessors);
        router.get("/:usuID", authMiddleware.authenticate("admin"),userController.getUser);
        router.delete("/:usuID",authMiddleware.authenticate("admin"),userController.deleteUser);
        router.put("/admin/:usuID",authMiddleware.authenticate("admin"),userEditValidatorMiddleware.validate,userController.putAdmin);
        router.put("/professor/:usuID",authMiddleware.authenticate("admin"),userEditValidatorMiddleware.validate,userController.putProfessor);
        router.put("/password", authMiddleware.authenticate("admin","professor"), changePasswordValidatorMiddleware.validate,userController.changeUserPassword);

        return router;
    }
}