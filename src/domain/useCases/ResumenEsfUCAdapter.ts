import { FormResumenEsferi } from "../models/FormResumenEsferiModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class ResumenEsfUCAdapter implements FormsUCIntPort<FormResumenEsferi> {
    constructor(
        private resumenEsfGateway: FormsGatewayIntPort<FormResumenEsferi>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async listForms(): Promise<FormResumenEsferi[]> {
        return this.resumenEsfGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormResumenEsferi | null> {
        const formResumenEsf = await this.resumenEsfGateway.getIDForm(id);
        if (!formResumenEsf) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return formResumenEsf;
    }
    async createForm(resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        return this.resumenEsfGateway.createForm(resumenEsf);
    }
    async updateForm(id: string, resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        return this.resumenEsfGateway.updateForm(id, resumenEsf);
    }
}