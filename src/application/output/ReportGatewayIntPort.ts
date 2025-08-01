import { Report } from "../../domain/models/ReportModel";

export interface ReportGatewayIntPort {
    getIDReport(id: string): Promise<Report | null>;
    createReport(report: Report): Promise<Report>;
}