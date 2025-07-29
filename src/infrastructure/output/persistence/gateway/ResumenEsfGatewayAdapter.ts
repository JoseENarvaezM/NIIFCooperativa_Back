import prisma from "../../../../config/database";
import { FormResumenEsferi } from "../../../../domain/models/FormResumenEsferiModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class ResumenEsfGatewayAdapter implements FormsGatewayIntPort<FormResumenEsferi> {


    async getIDForm(stuID: string, roomID: string): Promise<FormResumenEsferi | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const resumenEsf = await prisma.formresumenesferi.findUnique({
            where: { resID: report?.resID }
        });
        return resumenEsf;
    }

    async createForm(resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        return prisma.formresumenesferi.create({
            data: {
                resContent: { ...resumenEsf.resContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formresumenesferi.update({
            where: { resID: report?.resID },
            data: {
                resContent: { ...resumenEsf },
            }
        });
    }
}