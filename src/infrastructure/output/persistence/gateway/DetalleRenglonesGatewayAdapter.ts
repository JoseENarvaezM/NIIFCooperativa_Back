import prisma from "../../../../config/database";
import { FormDetalleRenglones } from "../../../../domain/models/FormDetallerEnglonesModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class DetalleRenglonesGatewayAdapter implements FormsGatewayIntPort<FormDetalleRenglones> {
    async listForms(): Promise<FormDetalleRenglones[]> {
        return prisma.formdetallerenglones.findMany();
    }

    async getIDForm(id: string): Promise<FormDetalleRenglones | null> {
        return prisma.formdetallerenglones.findUnique({
            where: { detID: id }
        });
    }

    async createForm(detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return prisma.formdetallerenglones.create({
            data: detalleRenglones
        });
    }

    async updateForm(id: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return prisma.formdetallerenglones.update({
            where: { detID: id },
            data: detalleRenglones
        });
    }
}