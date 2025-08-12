import prisma from "../../../../config/database";
import { FormActivosFijos } from "../../../../domain/models/FormActivosFijosModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class ActivosFijosGatewayAdapter implements FormsGatewayIntPort<FormActivosFijos> {

    async getIDForm(stuID: string, roomID: string): Promise<FormActivosFijos | null> {

        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const activosfijos = await prisma.formactivosfijos.findUnique({
            where: { actID: report?.actID }
        });
        return activosfijos;
    }

    async createForm(activo: FormActivosFijos): Promise<FormActivosFijos> {
        return prisma.formactivosfijos.create({
            data: {
                actContent: { ...activo.actContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, activo: FormActivosFijos): Promise<FormActivosFijos> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formactivosfijos.update({
            where: { actID: report?.actID },
            data: {
                actContent: { ...activo },
            }
        });
    }

    async calculateReference(stuID: string, roomID: string): Promise<FormActivosFijos | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const activosfijos = await prisma.formactivosfijos.findUnique({
            where: { actID: report?.actID }
        });
        return activosfijos;
    }
}