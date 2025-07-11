import { FormRentaLiquida } from "../models/FormRentaLiquidaModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";

export class RentaLiquidaUCAdapter implements FormsUCIntPort<FormRentaLiquida> {
    constructor(
        private rentaLiquidaGateway:  FormsGatewayIntPort<FormRentaLiquida>
    ) {}

    async listForms(): Promise<FormRentaLiquida[]> {
        return this.rentaLiquidaGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormRentaLiquida | null> {
        return this.rentaLiquidaGateway.getIDForm(id);
    }
    async createForm(rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return this.rentaLiquidaGateway.createForm(rentaLiquida);
    }
    async updateForm(id: string, rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return this.rentaLiquidaGateway.updateForm(id, rentaLiquida);
    }
}