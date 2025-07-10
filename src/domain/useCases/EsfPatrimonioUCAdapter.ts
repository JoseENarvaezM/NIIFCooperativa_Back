import { FormEsfPatrimonio } from "../models/FormEsfPatrimonioModel";
import { EsfPatrimonioUCIntPort } from "../../application/input/EsfPatrimonioUCIntPort";
import { EsfPatrimonioGatewayIntPort } from "../../application/output/EsfPatrimonioGatewayIntPort";
import e from "express";

export class EsfPatrimonioUCAdapter implements EsfPatrimonioUCIntPort {
    constructor(
        private esfPatrimonioGateway: EsfPatrimonioGatewayIntPort
    ) {}

    listEsfPatrimonio(): Promise<FormEsfPatrimonio[]> {
        return this.esfPatrimonioGateway.listEsfPatrimonio();
    }

    getIDEsfPatrimonio(id: string): Promise<FormEsfPatrimonio> {
        return this.esfPatrimonioGateway.getIDEsfPatrimonio(id);
    }

    createEsfPatrimonio(esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return this.esfPatrimonioGateway.createEsfPatrimonio(esfPatrimonio);
    }

    updateEsfPatrimonio(id: string, esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        if (this.getIDEsfPatrimonio(id) != null) {
            return this.esfPatrimonioGateway.updateEsfPatrimonio(id, esfPatrimonio);
        }
        throw new Error(`ESF Patrimonio with id ${id} does not exist.`);
    }
}