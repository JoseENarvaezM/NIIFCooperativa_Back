import prisma from "../../../../config/database";
import { FormImpuestoDiferido } from "../../../../domain/models/FormImpuestoDiferidoModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class ImpuestoDiferidoGatewayAdapter implements FormsGatewayIntPort<FormImpuestoDiferido> {
    async listForms(): Promise<FormImpuestoDiferido[]> {
        return prisma.formimpuestodiferido.findMany();
    }

    async getIDForm(id: string): Promise<FormImpuestoDiferido | null> {
        return prisma.formimpuestodiferido.findUnique({
            where: { impID: id }
        });
    }

    async createForm(impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return prisma.formimpuestodiferido.create({
            data: impuestoDiferido
        });
    }

    async updateForm(id: string, impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return prisma.formimpuestodiferido.update({
            where: { impID: id },
            data: impuestoDiferido
        });
    }
}