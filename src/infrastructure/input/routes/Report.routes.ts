import { Router } from "express";

import { ReportController } from "../controllers/Report.controller";
import { ReportUCAdapter } from "../../../domain/useCases/ReportUCAdapter";
import { ReportGatewayIntPort } from "../../../application/output/ReportGatewayIntPort";
import { ReportGatewayAdapter } from "../../output/persistence/gateway/ReportGatewayAdapter";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";



export class ReportRoutes {
    static get routes(): Router {
        const router = Router();

        const reportGateway: ReportGatewayIntPort = new ReportGatewayAdapter();
        const reportUseCases = new ReportUCAdapter(reportGateway);
        const reportController: ReportController = new ReportController(reportUseCases);
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler));


        router.get("/:id", authMiddleware.authenticate("profesor"), reportController.getReportByID);

        return router;
    }
}
