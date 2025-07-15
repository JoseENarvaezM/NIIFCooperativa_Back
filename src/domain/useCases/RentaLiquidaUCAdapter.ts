import { FormRentaLiquida } from "../models/FormRentaLiquidaModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class RentaLiquidaUCAdapter implements FormsUCIntPort<FormRentaLiquida> {
    constructor(
        private rentaLiquidaGateway:  FormsGatewayIntPort<FormRentaLiquida>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async listForms(): Promise<FormRentaLiquida[]> {
        return this.rentaLiquidaGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormRentaLiquida | null> {
        const formRentaLiquida = await this.rentaLiquidaGateway.getIDForm(id);
        if (!formRentaLiquida) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return formRentaLiquida;
    }
    async createForm(rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return this.rentaLiquidaGateway.createForm(rentaLiquida);
    }
    async updateForm(id: string, rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return this.rentaLiquidaGateway.updateForm(id, rentaLiquida);
    }
}