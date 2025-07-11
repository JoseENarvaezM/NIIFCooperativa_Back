import { FormResumenEsferi } from "../models/FormResumenEsferiModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";

export class ResumenEsfUCAdapter implements FormsUCIntPort<FormResumenEsferi> {
    constructor(
        private resumenEsfGateway: FormsGatewayIntPort<FormResumenEsferi>
    ) {}

    async listForms(): Promise<FormResumenEsferi[]> {
        return this.resumenEsfGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormResumenEsferi | null> {
        return this.resumenEsfGateway.getIDForm(id);
    }
    async createForm(resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        return this.resumenEsfGateway.createForm(resumenEsf);
    }
    async updateForm(id: string, resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        return this.resumenEsfGateway.updateForm(id, resumenEsf);
    }
}