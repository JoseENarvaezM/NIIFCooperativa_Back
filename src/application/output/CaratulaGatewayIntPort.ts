import { FormCaratula } from "../../domain/models/FormCaratulaModel";

export interface CaratulaGatewayIntPort {
    listCaratulas(): Promise<FormCaratula[]>;
    getIDCaratula(id: string): Promise<FormCaratula>;
    createCaratula(caratula: FormCaratula): Promise<FormCaratula>;
    updateCaratula(id: string, caratula: FormCaratula): Promise<FormCaratula>;
}