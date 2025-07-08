import { Router } from "express";
import { UserRoutes } from "./User.routes";
import { RoomRoutes } from "./Room.routes";
import { errorHandlerMiddleware } from "../../output/exeptionHandler/exeptionMiddleware";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/users", UserRoutes.routes);
    router.use("/api/rooms", RoomRoutes.routes);

    router.use(errorHandlerMiddleware);

    return router;
  }
}