import prisma from "../../../../config/database";
import { FormDetalleRenglones } from "../../../../domain/models/FormDetallerEnglonesModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class DetalleRenglonesGatewayAdapter implements FormsGatewayIntPort<FormDetalleRenglones> {

    async getIDForm(stuID: string, roomID: string): Promise<FormDetalleRenglones | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const detalleRenglones = await prisma.formdetallerenglones.findUnique({
            where: { detID: report?.detID }
        });
        return detalleRenglones;
    }

    async createForm(detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return prisma.formdetallerenglones.create({
            data: {
                detContent: { ...detalleRenglones },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formdetallerenglones.update({
            where: { detID: report?.detID },
            data: {
                detContent: { ...detalleRenglones },
            }
        });
    }
}