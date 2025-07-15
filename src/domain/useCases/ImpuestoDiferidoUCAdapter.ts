import { FormImpuestoDiferido } from "../models/FormImpuestoDiferidoModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class ImpuestoDiferidoUCAdapter implements FormsUCIntPort<FormImpuestoDiferido> {
    constructor(
        private impuestoDiferidoGateway: FormsGatewayIntPort<FormImpuestoDiferido>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async listForms(): Promise<FormImpuestoDiferido[]> {
        return this.impuestoDiferidoGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormImpuestoDiferido | null> {
        const formImpuestoDiferido = await this.impuestoDiferidoGateway.getIDForm(id);
        if (!formImpuestoDiferido) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return formImpuestoDiferido;
    }
    async createForm(impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return this.impuestoDiferidoGateway.createForm(impuestoDiferido);
    }
    async updateForm(id: string, impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return this.impuestoDiferidoGateway.updateForm(id, impuestoDiferido);
    }
}