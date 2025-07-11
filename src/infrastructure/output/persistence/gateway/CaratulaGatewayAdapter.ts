import prisma from "../../../../config/database";
import { FormCaratula } from "../../../../domain/models/FormCaratulaModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class CaratulaGatewayAdapter implements FormsGatewayIntPort<FormCaratula> {
    async listForms(): Promise<FormCaratula[]> {
        return prisma.formcaratula.findMany();
    }

    async getIDForm(id: string): Promise<FormCaratula | null> {
        return prisma.formcaratula.findUnique({
            where: { carID: id }
        });
    }

    async createForm(caratula: FormCaratula): Promise<FormCaratula> {
        return prisma.formcaratula.create({
            data: caratula
        });
    }

    async updateForm(id: string, caratula: FormCaratula): Promise<FormCaratula> {
        return prisma.formcaratula.update({
            where: { carID: id },
            data: caratula
        });
    }
}