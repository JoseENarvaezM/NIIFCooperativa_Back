import { FormCaratula } from "../models/FormCaratulaModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
 
export class CaratulaUCAdapter implements FormsUCIntPort<FormCaratula> {
    constructor(
        private caratulaGateway: FormsGatewayIntPort<FormCaratula>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async getIDForm(stuID: string, roomID: string): Promise<FormCaratula | null> {
        const formCaratula = await this.caratulaGateway.getIDForm(stuID, roomID);
        if (!formCaratula) {
            this.errorFormatter.errorNotFound(`Form of the student with ID ${stuID} in room ${roomID} not found.`);
        }
        return formCaratula;
    }
    async updateForm(stuID: string, roomID: string, caratula: FormCaratula): Promise<FormCaratula> {
        return this.caratulaGateway.updateForm(stuID, roomID, caratula);
    }
}