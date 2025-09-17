import { FormRentaLiquida } from "../models/FormRentaLiquidaModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class RentaLiquidaUCAdapter implements FormsUCIntPort<FormRentaLiquida> {
    constructor(
        private rentaLiquidaGateway:  FormsGatewayIntPort<FormRentaLiquida>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async getIDForm(stuID: string, roomID: string): Promise<FormRentaLiquida | null> {
        const formRentaLiquida = await this.rentaLiquidaGateway.getIDForm(stuID, roomID);
        if (!formRentaLiquida) {
            this.errorFormatter.errorNotFound(`Formulario con stuID ${stuID} y roomID ${roomID} no se encontró.`);
        }

        const formRentaLiquidaCalculated = this.rentaLiquidaGateway.calculateReference(stuID, roomID);

        return formRentaLiquidaCalculated || formRentaLiquida;
    }
    async updateForm(stuID: string, roomID: string, rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return this.rentaLiquidaGateway.updateForm(stuID, roomID, rentaLiquida);
    }
}