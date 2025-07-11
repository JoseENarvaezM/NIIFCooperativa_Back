import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormIngresosFancturacion } from "../../../domain/models/FormIngresosFancturacionModel";

export class IngFactController {
    constructor(private readonly ingresosFacturacionUseCases: FormsUCIntPort<FormIngresosFancturacion>) { }
    postIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newIngresosFacturacion = req.body;
            const result = await this.ingresosFacturacionUseCases.createForm(newIngresosFacturacion);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.ingresosFacturacionUseCases.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.ingresosFacturacionUseCases.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    
    putIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedIngresosFacturacion = req.body;
            const result = await this.ingresosFacturacionUseCases.updateForm(id, updatedIngresosFacturacion);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}