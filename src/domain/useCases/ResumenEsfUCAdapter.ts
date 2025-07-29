import { FormResumenEsferi } from "../models/FormResumenEsferiModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class ResumenEsfUCAdapter implements FormsUCIntPort<FormResumenEsferi> {
    constructor(
        private resumenEsfGateway: FormsGatewayIntPort<FormResumenEsferi>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async getIDForm(stuID: string, roomID: string): Promise<FormResumenEsferi | null> {
        const formResumenEsf = await this.resumenEsfGateway.getIDForm(stuID, roomID);
        if (!formResumenEsf) {
            this.errorFormatter.errorNotFound(`Formulario con stuID ${stuID} y roomID ${roomID} no se encontró.`);
        }
        return formResumenEsf;
    }
    async updateForm(stuID: string, roomID: string, resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
        return this.resumenEsfGateway.updateForm(stuID, roomID, resumenEsf);
    }
}