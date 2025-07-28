import prisma from "../../../../config/database";
import { FormRentaLiquida } from "../../../../domain/models/FormRentaLiquidaModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class RentaLiquidaGatewayAdapter implements FormsGatewayIntPort<FormRentaLiquida> {

    async getIDForm(stuID: string, roomID: string): Promise<FormRentaLiquida | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const rentaLiquida = await prisma.formrentaliquida.findUnique({
            where: { renID: report?.renID }
        });
        return rentaLiquida;
    }

    async createForm(rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return prisma.formrentaliquida.create({
            data: {
                renContent: { ...rentaLiquida },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formrentaliquida.update({
            where: { renID: report?.renID },
            data: {
                renContent: { ...rentaLiquida },
            }
        });
    }
}