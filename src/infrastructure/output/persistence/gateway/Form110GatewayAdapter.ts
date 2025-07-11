import prisma from "../../../../config/database";
import { FormR110 } from "../../../../domain/models/FormR110Model";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class Form110GatewayAdapter implements FormsGatewayIntPort<FormR110> {
    async listForms(): Promise<FormR110[]> {
        return prisma.formr110.findMany();
    }

    async getIDForm(id: string): Promise<FormR110 | null> {
        return prisma.formr110.findUnique({
            where: { r110ID: id }
        });
    }

    async createForm(form110: FormR110): Promise<FormR110> {
        return prisma.formr110.create({
            data: form110
        });
    }

    async updateForm(id: string, form110: FormR110): Promise<FormR110> {
        return prisma.formr110.update({
            where: { r110ID: id },
            data: form110
        });
    }
}
