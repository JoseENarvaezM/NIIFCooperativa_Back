import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormRentaLiquida } from "../../../domain/models/FormRentaLiquidaModel";

export class RentaLiquidaController {
    constructor(private readonly rentaLiquidaUseCases: FormsUCIntPort<FormRentaLiquida>) { }
    getIDRentaLiquida = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const result = await this.rentaLiquidaUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    updateRentaLiquida = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const updatedRentaLiquida = req.body;
            const result = await this.rentaLiquidaUseCases.updateForm(stuID, roomID, updatedRentaLiquida);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getRentaLiquidaByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.rentaLiquidaUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}