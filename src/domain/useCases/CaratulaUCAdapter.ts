import { FormCaratula } from "../models/FormCaratulaModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
 
export class CaratulaUCAdapter implements FormsUCIntPort<FormCaratula> {
    constructor(
        private caratulaGateway: FormsGatewayIntPort<FormCaratula>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async listForms(): Promise<FormCaratula[]> {
        return this.caratulaGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormCaratula | null> {
        const formCaratula = await this.caratulaGateway.getIDForm(id);
        if (!formCaratula) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return formCaratula;
    }
    async createForm(caratula: FormCaratula): Promise<FormCaratula> {
        return this.caratulaGateway.createForm(caratula);
    }
    async updateForm(id: string, caratula: FormCaratula): Promise<FormCaratula> {
        return this.caratulaGateway.updateForm(id, caratula);
    }
}