import { Report } from "../models/ReportModel";
import { ReportUCIntPort } from "../../application/input/ReportUCIntPort";
import { ReportGatewayIntPort } from "../../application/output/ReportGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class ReportUCAdapter implements ReportUCIntPort {
    constructor(
        private reportGateway: ReportGatewayIntPort
    ) {}

    async getReportByID(id: string): Promise<Report | null> {
        const report = await this.reportGateway.getIDReport(id);
        if (!report) {
            throw new Error(`Reporte con ID ${id} no se encontró.`);
        }
        return report;
    }
}