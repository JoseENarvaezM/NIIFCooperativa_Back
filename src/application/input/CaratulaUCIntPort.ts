import { FormCaratula } from "../../domain/models/FormCaratulaModel";

export interface CaratulaUCIntPort {
    listCaratulas(): Promise<FormCaratula[]>;
    getIDCaratula(id: string): Promise<FormCaratula>;
    createCaratula(caratula: FormCaratula): Promise<FormCaratula>;
    updateCaratula(id: string, caratula: FormCaratula): Promise<FormCaratula>;    
}