import prisma from "../../../../config/database";
import { FormEsfPatrimonio } from "../../../../domain/models/FormEsfPatrimonioModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class EsfPatrimonioGatewayAdapter implements FormsGatewayIntPort<FormEsfPatrimonio> {
    async listForms(): Promise<FormEsfPatrimonio[]> {
        return prisma.formesfpatrimonio.findMany();
    }

    async getIDForm(id: string): Promise<FormEsfPatrimonio | null> {
        return prisma.formesfpatrimonio.findUnique({
            where: { esfID: id }
        });
    }

    async createForm(esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return prisma.formesfpatrimonio.create({
            data: esfPatrimonio
        });
    }

    async updateForm(id: string, esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return prisma.formesfpatrimonio.update({
            where: { esfID: id },
            data: esfPatrimonio
        });
    }
}