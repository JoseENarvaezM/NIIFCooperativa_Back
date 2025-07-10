import { formr110 } from "../../generated/prisma";

export interface Form110UCIntPort {
    listForm110(): Promise<formr110[]>;
    getIDForm110(id: string): Promise<formr110>;
    createForm110(form110: formr110): Promise<formr110>;
    updateForm110(id: string, form110: formr110): Promise<formr110>;
}