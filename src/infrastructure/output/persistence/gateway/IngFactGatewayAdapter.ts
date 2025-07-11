import prisma from "../../../../config/database";
import { FormIngresosFancturacion } from "../../../../domain/models/FormIngresosFancturacionModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class IngFactGatewayAdapter implements FormsGatewayIntPort<FormIngresosFancturacion> {
    async listForms(): Promise<FormIngresosFancturacion[]> {
        return prisma.formingresosfancturacion.findMany();
    }

    async getIDForm(id: string): Promise<FormIngresosFancturacion | null> {
        return prisma.formingresosfancturacion.findUnique({
            where: { ingID: id }
        });
    }

    async createForm(ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return prisma.formingresosfancturacion.create({
            data: ingFact
        });
    }

    async updateForm(id: string, ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return prisma.formingresosfancturacion.update({
            where: { ingID: id },
            data: ingFact
        });
    }
}