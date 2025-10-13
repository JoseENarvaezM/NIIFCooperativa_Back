import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormIngresosFancturacion } from "../../../domain/models/FormIngresosFancturacionModel";

export class IngFactController {
    constructor(private readonly ingresosFacturacionUseCases: FormsUCIntPort<FormIngresosFancturacion>) { }
    getIDIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const result = await this.ingresosFacturacionUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    
    putIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const updatedIngresosFacturacion = req.body;
            const result = await this.ingresosFacturacionUseCases.updateForm(stuID, roomID, updatedIngresosFacturacion);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getFormByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.ingresosFacturacionUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}