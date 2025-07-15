import { FormEsfPatrimonio } from "../models/FormEsfPatrimonioModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class EsfPatrimonioUCAdapter implements FormsUCIntPort<FormEsfPatrimonio> {
    constructor(
        private esfPatrimonioGateway: FormsGatewayIntPort<FormEsfPatrimonio>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async listForms(): Promise<FormEsfPatrimonio[]> {
        return this.esfPatrimonioGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormEsfPatrimonio | null> {
        const formEsfPatrimonio = await this.esfPatrimonioGateway.getIDForm(id);
        if (!formEsfPatrimonio) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return formEsfPatrimonio;
    }
    async createForm(esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return this.esfPatrimonioGateway.createForm(esfPatrimonio);
    }
    async updateForm(id: string, esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return this.esfPatrimonioGateway.updateForm(id, esfPatrimonio);
    }
}