import prisma from "../../../../config/database";
import { ReportGatewayIntPort } from "../../../../application/output/ReportGatewayIntPort";
import { Report } from "../../../../domain/models/ReportModel";

export class ReportGatewayAdapter implements ReportGatewayIntPort {
    async getIDReport(id: string): Promise<Report | null> {
        return prisma.report.findUnique({
            where: { repID: id }
        });
    }
}
