import { Report } from "../../domain/models/ReportModel";

export interface ReportUCIntPort {
    getReportByID(id: string): Promise<Report | null>;
}