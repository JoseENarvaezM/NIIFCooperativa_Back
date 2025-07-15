import { FormR110 } from "../models/FormR110Model";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class Form110UCAdapter implements FormsUCIntPort<FormR110> {
    constructor(
        private form110Gateway: FormsGatewayIntPort<FormR110>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async listForms(): Promise<FormR110[]> {
        return this.form110Gateway.listForms();
    }
    async getIDForm(id: string): Promise<FormR110 | null> {
        const form110 = await this.form110Gateway.getIDForm(id);
        if (!form110) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return form110;
    }
    async createForm(form110: FormR110): Promise<FormR110> {
        return this.form110Gateway.createForm(form110);
    }
    async updateForm(id: string, form110: FormR110): Promise<FormR110> {
        return this.form110Gateway.updateForm(id, form110);
    }
}