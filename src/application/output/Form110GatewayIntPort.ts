import { FormR110 } from "../../domain/models/FormR110Model";

export interface Form110GatewayIntPort {
    listForm110(): Promise<FormR110[]>;
    getIDForm110(id: string): Promise<FormR110>;
    createForm110(form110: FormR110): Promise<FormR110>;
    updateForm110(id: string, form110: FormR110): Promise<FormR110>;
}