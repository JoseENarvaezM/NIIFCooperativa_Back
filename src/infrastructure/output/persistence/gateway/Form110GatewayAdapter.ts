import prisma from "../../../../config/database";
import { FormR110 } from "../../../../domain/models/FormR110Model";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class Form110GatewayAdapter implements FormsGatewayIntPort<FormR110> {


    async getIDForm(stuID: string, roomID: string): Promise<FormR110 | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const form110 = await prisma.formr110.findUnique({
            where: { r110ID: report?.r110ID }
        });
        return form110;
    }

    async createForm(form110: FormR110): Promise<FormR110> {
        return prisma.formr110.create({
            data: {
                r110Content: { ...form110.r110Content },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, form110: FormR110): Promise<FormR110> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formr110.update({
            where: { r110ID: report?.r110ID },
            data: {
                r110Content: { ...form110 },
            }
        });
    }
    async calculateReference(stuID: string, roomID: string): Promise<FormR110 | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const form110 = await prisma.formr110.findUnique({
            where: { r110ID: report?.r110ID }
        });
        return form110;
    }
}
