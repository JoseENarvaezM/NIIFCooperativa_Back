import prisma from "../../../../config/database";
import { FormActivosFijos } from "../../../../domain/models/FormActivosFijosModel";
import { ActivosFijosGatewayIntPort } from "../../../../application/output/ActivosFijosGatewayIntPort";

export class ActivosFijosGatewayAdapter implements ActivosFijosGatewayIntPort {
    async listActivosFijos(): Promise<FormActivosFijos[]> {
        const activosFijosData = await prisma.formactivosfijos.findMany();
        return activosFijosData.map(activo => new FormActivosFijos(activo.actID, activo.actContent));
    }

    async getIDActivosFijos(id: string): Promise<FormActivosFijos> {
        const activoData = await prisma.formactivosfijos.findUnique({ where: { actID: id } });
        if (!activoData) throw new Error(`Activo Fijo with id ${id} not found.`);
        return new FormActivosFijos(activoData.actID, activoData.actContent);
    }

    async createActivoFijo(activo: FormActivosFijos): Promise<FormActivosFijos> {
        const newActivo = await prisma.formactivosfijos.create({
            data: {
                actID: activo.actID,
                actContent: activo.actContent,
            }
        });
        return new FormActivosFijos(newActivo.actID, newActivo.actContent);
    }

    async updateActivoFijo(id: string, activo: FormActivosFijos): Promise<FormActivosFijos> {
        const updatedActivo = await prisma.formactivosfijos.update({
            where: { actID: id },
            data: {
                actContent: activo.actContent,
            }
        });
        return new FormActivosFijos(updatedActivo.actID, updatedActivo.actContent);
    }

    async deleteActivoFijo(id: string): Promise<void> {
        await prisma.formactivosfijos.delete({ where: { actID: id } });
    }
}