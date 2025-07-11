import { Router } from "express";

import { ReportController } from "../controllers/Report.controller";
import { ReportUCAdapter } from "../../../domain/useCases/ReportUCAdapter";
import { ReportGatewayIntPort } from "../../../application/output/ReportGatewayIntPort";
import { ReportGatewayAdapter } from "../../output/persistence/gateway/ReportGatewayAdapter";

export class ReportRoutes {
    static get routes(): Router {
        const router = Router();

        const reportGateway: ReportGatewayIntPort = new ReportGatewayAdapter();
        const reportUseCases = new ReportUCAdapter(reportGateway);
        const reportController: ReportController = new ReportController(reportUseCases);

        router.get("/:id", reportController.getReportByID);

        return router;
    }
}
