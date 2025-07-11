import { FormEsfPatrimonio } from "../models/FormEsfPatrimonioModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";

export class EsfPatrimonioUCAdapter implements FormsUCIntPort<FormEsfPatrimonio> {
    constructor(
        private esfPatrimonioGateway: FormsGatewayIntPort<FormEsfPatrimonio>
    ) {}

    async listForms(): Promise<FormEsfPatrimonio[]> {
        return this.esfPatrimonioGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormEsfPatrimonio | null> {
        return this.esfPatrimonioGateway.getIDForm(id);
    }
    async createForm(esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return this.esfPatrimonioGateway.createForm(esfPatrimonio);
    }
    async updateForm(id: string, esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return this.esfPatrimonioGateway.updateForm(id, esfPatrimonio);
    }
}