import { FormCaratula } from "../models/FormCaratulaModel";
import { CaratulaUCIntPort } from "../../application/input/CaratulaUCIntPort";
import { CaratulaGatewayIntPort } from "../../application/output/CaratulaGatewayIntPort";
 
export class CaratulaUCAdapter implements CaratulaUCIntPort {
    constructor(
        private caratulaGateway: CaratulaGatewayIntPort
    ) {}

    listCaratulas(): Promise<FormCaratula[]> {
        return this.caratulaGateway.listCaratulas();
    }

    getIDCaratula(id: string): Promise<FormCaratula> {
        return this.caratulaGateway.getIDCaratula(id);
    }

    createCaratula(caratula: FormCaratula): Promise<FormCaratula> {
        return this.caratulaGateway.createCaratula(caratula);
    }

    updateCaratula(id: string, caratula: FormCaratula): Promise<FormCaratula> {
        if (this.getIDCaratula(id) != null) {
            return this.caratulaGateway.updateCaratula(id, caratula);
        }
        throw new Error(`Caratula with id ${id} does not exist.`);
    }
}