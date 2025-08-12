import prisma from "../../../../config/database";
import { FormImpuestoDiferido } from "../../../../domain/models/FormImpuestoDiferidoModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class ImpuestoDiferidoGatewayAdapter implements FormsGatewayIntPort<FormImpuestoDiferido> {
 
    async getIDForm(stuID: string, roomID: string): Promise<FormImpuestoDiferido | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const impuestoDiferido = await prisma.formimpuestodiferido.findUnique({
            where: { impID: report?.impID }
        });
        return impuestoDiferido;
    }

    async createForm(impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return prisma.formimpuestodiferido.create({
            data: {
                impContent: { ...impuestoDiferido.impContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formimpuestodiferido.update({
            where: { impID: report?.impID },
            data: {
                impContent: { ...impuestoDiferido },
            }
        });
    }
    async calculateReference(stuID: string, roomID: string): Promise<FormImpuestoDiferido | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const impuestoDiferido = await prisma.formimpuestodiferido.findUnique({
            where: { impID: report?.impID }
        });
        return impuestoDiferido;
    }
}