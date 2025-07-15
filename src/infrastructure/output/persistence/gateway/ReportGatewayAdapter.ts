import prisma from "../../../../config/database";
import { ReportGatewayIntPort } from "../../../../application/output/ReportGatewayIntPort";
import { Report } from "../../../../domain/models/ReportModel";

export class ReportGatewayAdapter implements ReportGatewayIntPort {
    async getIDReport(id: string): Promise<Report | null> {
        return prisma.report.findUnique({
            where: { repID: id }
        });
    }
    async createReport(report: Report): Promise<Report> {
        const createdReport = await prisma.report.create({
            data: {
                stuID: report.stuID,
                roomID: report.roomID,
                carID: report.carID,
                detID: report.detID,
                esfID: report.esfID,
                renID: report.renID,
                impID: report.impID,
                ingID: report.ingID,
                actID: report.actID,
                resID: report.resID,
                r110ID: report.r110ID
            }
        });

        return new Report(
            createdReport.repID, 
            createdReport.stuID, 
            createdReport.roomID, 
            createdReport.carID, 
            createdReport.detID, 
            createdReport.esfID, 
            createdReport.renID, 
            createdReport.impID, 
            createdReport.ingID, 
            createdReport.actID, 
            createdReport.resID, 
            createdReport.r110ID
        );
    }
}
