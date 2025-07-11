import { FormCaratula } from "../models/FormCaratulaModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
 
export class CaratulaUCAdapter implements FormsUCIntPort<FormCaratula> {
    constructor(
        private caratulaGateway: FormsGatewayIntPort<FormCaratula>
    ) {}
    async listForms(): Promise<FormCaratula[]> {
        return this.caratulaGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormCaratula | null> {
        return this.caratulaGateway.getIDForm(id);
    }
    async createForm(caratula: FormCaratula): Promise<FormCaratula> {
        return this.caratulaGateway.createForm(caratula);
    }
    async updateForm(id: string, caratula: FormCaratula): Promise<FormCaratula> {
        return this.caratulaGateway.updateForm(id, caratula);
    }
}