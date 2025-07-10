import prisma from "../../../../config/database";
import { FormCaratula } from "../../../../domain/models/FormCaratulaModel";
import { CaratulaGatewayIntPort } from "../../../../application/output/CaratulaGatewayIntPort";

export class CaratulaGatewayAdapter implements CaratulaGatewayIntPort {
    async listCaratulas(): Promise<FormCaratula[]> {
        const caratulasData = await prisma.formcaratula.findMany();
        return caratulasData.map(caratula => new FormCaratula(caratula.carID, caratula.carContent, caratula.report));
    }

    async getIDCaratula(id: string): Promise<FormCaratula> {
        const caratulaData = await prisma.formcaratula.findUnique({ where: { carID: id } });
        if (!caratulaData) throw new Error(`Caratula with id ${id} not found.`);
        return new FormCaratula(caratulaData.carID, caratulaData.carContent, caratulaData.report);
    }

    async createCaratula(caratula: FormCaratula): Promise<FormCaratula> {
        const newCaratula = await prisma.formcaratula.create({
            data: {
                carID: caratula.carID,
                carContent: caratula.carContent,
                report: caratula.report,
            }
        });
        return new FormCaratula(newCaratula.carID, newCaratula.carContent, newCaratula.report);
    }

    async updateCaratula(id: string, caratula: FormCaratula): Promise<FormCaratula> {
        const updatedCaratula = await prisma.formcaratula.update({
            where: { carID: id },
            data: {
                carContent: caratula.carContent,
                report: caratula.report,
            }
        });
        return new FormCaratula(updatedCaratula.carID, updatedCaratula.carContent, updatedCaratula.report);
    }
}