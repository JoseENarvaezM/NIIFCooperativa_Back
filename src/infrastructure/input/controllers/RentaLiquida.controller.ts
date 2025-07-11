import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormRentaLiquida } from "../../../domain/models/FormRentaLiquidaModel";

export class RentaLiquidaController {
    constructor(private readonly rentaLiquidaUseCases: FormsUCIntPort<FormRentaLiquida>) { }

    listRentaLiquida = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.rentaLiquidaUseCases.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDRentaLiquida = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.rentaLiquidaUseCases.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    createRentaLiquida = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newRentaLiquida = req.body;
            const result = await this.rentaLiquidaUseCases.createForm(newRentaLiquida);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    updateRentaLiquida = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedRentaLiquida = req.body;
            const result = await this.rentaLiquidaUseCases.updateForm(id, updatedRentaLiquida);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}