import { Router } from "express";
import { UserRoutes } from "./User.routes";
import { RoomRoutes } from "./Room.routes";
import { StudentRoutes } from "./Student.routes";
import { errorHandlerMiddleware } from "../../output/exeptionHandler/exeptionMiddleware";
import { AuthRoutes } from "./Auth.routes";
import { ActivosFijosRoutes } from "./ActivosFijos.routes";
import { CaratulaRoutes } from "./Caratula.routes";
import { DetalleRenglonesRoutes } from "./DetalleRenglones.routes";
import { EsfPatrimonioRoutes } from "./EsfPatrimonio.routes";
import { Form110Routes } from "./Form110.routes";
import { ImpuestoDiferidoRoutes } from "./ImpuestoDiferido.routes";
import { RentaLiquidaRoutes } from "./RentaLiquida.routes";
import { ResumenEsfRoutes } from "./ResumenEsf.routes";
import { IngFactRoutes } from "./IngFact.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/users", UserRoutes.routes);
    router.use("/api/rooms", RoomRoutes.routes);
    router.use("/api/students", StudentRoutes.routes);
    router.use("/api/activos-fijos", ActivosFijosRoutes.routes);
    router.use("/api/caratulas", CaratulaRoutes.routes);
    router.use("/api/detalle-renglones", DetalleRenglonesRoutes.routes);
    router.use("/api/esf-patrimonio", EsfPatrimonioRoutes.routes);
    router.use("/api/form-110", Form110Routes.routes);
    router.use("/api/impuesto-diferido", ImpuestoDiferidoRoutes.routes);
    router.use("/api/renta-liquida", RentaLiquidaRoutes.routes);
    router.use("/api/resumen-esf", ResumenEsfRoutes.routes);
    router.use("/api/ing-fact", IngFactRoutes.routes);

    router.use(errorHandlerMiddleware);

    return router;
  }
}