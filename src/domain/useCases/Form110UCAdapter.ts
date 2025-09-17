import { FormR110 } from "../models/FormR110Model";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class Form110UCAdapter implements FormsUCIntPort<FormR110> {
    constructor(
        private form110Gateway: FormsGatewayIntPort<FormR110>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async getIDForm(stuID: string, roomID: string): Promise<FormR110 | null> {
        const form110 = await this.form110Gateway.getIDForm(stuID, roomID);
        if (!form110) {
            this.errorFormatter.errorNotFound(`Formulario con stuID ${stuID} y roomID ${roomID} no se encontró.`);
        }
        const calculatedForm = this.form110Gateway.calculateReference(stuID, roomID);
        return calculatedForm || form110;
    }
    async updateForm(stuID: string, roomID: string, form110: FormR110): Promise<FormR110> {
        return this.form110Gateway.updateForm(stuID, roomID, form110);
    }
}