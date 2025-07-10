import { Request, Response, NextFunction } from "express";
import { IngFactUCIntPort } from "../../../application/input/IngFactUCIntPort";

export class IngFactController {
    constructor(private readonly ingresosFacturacionUseCases: IngFactUCIntPort) { }
    postIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newIngresosFacturacion = req.body;
            const result = await this.ingresosFacturacionUseCases.createIngresosFacturacion(newIngresosFacturacion);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };
    getIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.ingresosFacturacionUseCases.listIngresosFacturacion();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getIDIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.ingresosFacturacionUseCases.getIDIngresosFacturacion(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    putIngresosFacturacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedIngresosFacturacion = req.body;
            const result = await this.ingresosFacturacionUseCases.updateIngresosFacturacion(id, updatedIngresosFacturacion);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}