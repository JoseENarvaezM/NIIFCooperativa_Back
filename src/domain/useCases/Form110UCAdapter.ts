import { FormR110 } from "../models/FormR110Model";
import { Form110UCIntPort } from "../../application/input/Form110UCIntPort";
import { Form110GatewayIntPort } from "../../application/output/Form110GatewayIntPort";

export class Form110UCAdapter implements Form110UCIntPort {
    constructor(
        private form110Gateway: Form110GatewayIntPort
    ) {}

    listForm110(): Promise<FormR110[]> {
        return this.form110Gateway.listForm110();
    }

    getIDForm110(id: string): Promise<FormR110> {
        return this.form110Gateway.getIDForm110(id);
    }

    createForm110(form110: FormR110): Promise<FormR110> {
        return this.form110Gateway.createForm110(form110);
    }

    updateForm110(id: string, form110: FormR110): Promise<FormR110> {
        if (this.getIDForm110(id) != null) {
            return this.form110Gateway.updateForm110(id, form110);
        }
        throw new Error(`Form 110 with id ${id} does not exist.`);
    }
}