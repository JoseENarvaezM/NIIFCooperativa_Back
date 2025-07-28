import prisma from "../../../../config/database";
import { FormIngresosFancturacion } from "../../../../domain/models/FormIngresosFancturacionModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class IngFactGatewayAdapter implements FormsGatewayIntPort<FormIngresosFancturacion> {

    async getIDForm(stuID: string, roomID: string): Promise<FormIngresosFancturacion | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const ingFact = await prisma.formingresosfancturacion.findUnique({
            where: { ingID: report?.ingID }
        });
        return ingFact;
    }

    async createForm(ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return prisma.formingresosfancturacion.create({
            data: {
                ingContent: { ...ingFact },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formingresosfancturacion.update({
            where: { ingID: report?.ingID },
            data: {
                ingContent: { ...ingFact },
            }
        });
    }
}