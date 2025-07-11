import prisma from "../../../../config/database";
import { FormResumenEsferi } from "../../../../domain/models/FormResumenEsferiModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class ResumenEsfGatewayAdapter implements FormsGatewayIntPort<FormResumenEsferi> {
    async listForms(): Promise<FormResumenEsferi[]> {
        return prisma.formresumenesferi.findMany();
    }

    async getIDForm(id: string): Promise<FormResumenEsferi | null> {
        return prisma.formresumenesferi.findUnique({
            where: { resID: id }
        });
    }

    async createForm(resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        return prisma.formresumenesferi.create({
            data: resumenEsf
        });
    }

    async updateForm(id: string, resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        return prisma.formresumenesferi.update({
            where: { resID: id },
            data: resumenEsf
        });
    }
}