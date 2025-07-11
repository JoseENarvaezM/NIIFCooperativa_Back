import { FormImpuestoDiferido } from "../models/FormImpuestoDiferidoModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";

export class ImpuestoDiferidoUCAdapter implements FormsUCIntPort<FormImpuestoDiferido> {
    constructor(
        private impuestoDiferidoGateway: FormsGatewayIntPort<FormImpuestoDiferido>
    ) {}

    async listForms(): Promise<FormImpuestoDiferido[]> {
        return this.impuestoDiferidoGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormImpuestoDiferido | null> {
        return this.impuestoDiferidoGateway.getIDForm(id);
    }
    async createForm(impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return this.impuestoDiferidoGateway.createForm(impuestoDiferido);
    }
    async updateForm(id: string, impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return this.impuestoDiferidoGateway.updateForm(id, impuestoDiferido);
    }
}