import { Router } from "express";
import { UserRoutes } from "./User.routes";
import { errorHandlerMiddleware } from "../../output/exeptionHandler/exeptionMiddleware";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/users", UserRoutes.routes);

    router.use(errorHandlerMiddleware);

    return router;
  }
}