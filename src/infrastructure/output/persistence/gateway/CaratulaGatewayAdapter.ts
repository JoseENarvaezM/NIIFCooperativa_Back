import prisma from "../../../../config/database";
import { FormCaratula } from "../../../../domain/models/FormCaratulaModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class CaratulaGatewayAdapter implements FormsGatewayIntPort<FormCaratula> {

    async getIDForm(stuID: string, roomID: string): Promise<FormCaratula | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const caratula = await prisma.formcaratula.findUnique({
            where: { carID: report?.carID }
        });
        return caratula;
    }

    async createForm(caratula: FormCaratula): Promise<FormCaratula> {
        return prisma.formcaratula.create({
            data: {
                carContent: { ...caratula.carContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, caratula: FormCaratula): Promise<FormCaratula> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formcaratula.update({
            where: { carID: report?.carID },
            data: {
                carContent: { ...caratula },
            }
        });
    }
}