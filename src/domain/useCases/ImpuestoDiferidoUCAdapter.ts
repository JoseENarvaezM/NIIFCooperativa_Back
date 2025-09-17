import { FormImpuestoDiferido } from "../models/FormImpuestoDiferidoModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class ImpuestoDiferidoUCAdapter implements FormsUCIntPort<FormImpuestoDiferido> {
    constructor(
        private impuestoDiferidoGateway: FormsGatewayIntPort<FormImpuestoDiferido>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async getIDForm(stuID: string, roomID: string): Promise<FormImpuestoDiferido | null> {
        const formImpuestoDiferido = await this.impuestoDiferidoGateway.getIDForm(stuID, roomID);
        if (!formImpuestoDiferido) {
            this.errorFormatter.errorNotFound(`Formulario con stuID ${stuID} y roomID ${roomID} no se encontró.`);
        }

        const formImpuestoDiferidoCalculated = this.impuestoDiferidoGateway.calculateReference(stuID, roomID);

        return formImpuestoDiferidoCalculated || formImpuestoDiferido;
    }
    async updateForm(stuID: string, roomID: string, impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return this.impuestoDiferidoGateway.updateForm(stuID, roomID, impuestoDiferido);
    }
}