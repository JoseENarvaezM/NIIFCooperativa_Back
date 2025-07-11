import prisma from "../../../../config/database";
import { FormRentaLiquida } from "../../../../domain/models/FormRentaLiquidaModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class RentaLiquidaGatewayAdapter implements FormsGatewayIntPort<FormRentaLiquida> {
    async listForms(): Promise<FormRentaLiquida[]> {
        return prisma.formrentaliquida.findMany();
    }

    async getIDForm(id: string): Promise<FormRentaLiquida | null> {
        return prisma.formrentaliquida.findUnique({
            where: { renID: id }
        });
    }

    async createForm(rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return prisma.formrentaliquida.create({
            data: rentaLiquida
        });
    }

    async updateForm(id: string, rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return prisma.formrentaliquida.update({
            where: { renID: id },
            data: rentaLiquida
        });
    }
}