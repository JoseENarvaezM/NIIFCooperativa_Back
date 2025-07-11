import { Report } from "../models/ReportModel";
import { ReportUCIntPort } from "../../application/input/ReportUCIntPort";
import { ReportGatewayIntPort } from "../../application/output/ReportGatewayIntPort";

export class ReportUCAdapter implements ReportUCIntPort {
    constructor(
        private reportGateway: ReportGatewayIntPort
    ) {}

    async getReportByID(id: string): Promise<Report | null> {
        return this.reportGateway.getIDReport(id);
    }
}