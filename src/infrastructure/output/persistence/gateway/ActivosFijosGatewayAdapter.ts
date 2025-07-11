import prisma from "../../../../config/database";
import { FormActivosFijos } from "../../../../domain/models/FormActivosFijosModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class ActivosFijosGatewayAdapter implements FormsGatewayIntPort<FormActivosFijos> {
    async listForms(): Promise<FormActivosFijos[]> {
        return prisma.formactivosfijos.findMany();
    }

    async getIDForm(id: string): Promise<FormActivosFijos | null> {
        return prisma.formactivosfijos.findUnique({
            where: { actID: id }
        });
    }

    async createForm(activo: FormActivosFijos): Promise<FormActivosFijos> {
        return prisma.formactivosfijos.create({
            data: activo
        });
    }

    async updateForm(id: string, activo: FormActivosFijos): Promise<FormActivosFijos> {
        return prisma.formactivosfijos.update({
            where: { actID: id },
            data: activo
        });
    }
}