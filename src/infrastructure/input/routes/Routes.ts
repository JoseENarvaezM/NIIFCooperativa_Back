import { Router } from "express";
import { UserRoutes } from "./User.routes";
import { RoomRoutes } from "./Room.routes";
import { StudentRoutes } from "./Student.routes";
import { errorHandlerMiddleware } from "../../output/exeptionHandler/exeptionMiddleware";
import { AuthRoutes } from "./Auth.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/users", UserRoutes.routes);
    router.use("/api/rooms", RoomRoutes.routes);
    router.use("/api/students", StudentRoutes.routes);

    router.use(errorHandlerMiddleware);

    return router;
  }
}