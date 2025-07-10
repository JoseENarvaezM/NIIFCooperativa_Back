import { Request, Response, NextFunction } from "express";
import { DetalleRenglonesUCIntPort } from "../../../application/input/DetalleRenglonesUCIntPort";

export class DetalleRenglonesController {
    constructor(private readonly detalleRenglonesUseCases: DetalleRenglonesUCIntPort) { }

    postDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newDetalleRenglones = req.body;
            const result = await this.detalleRenglonesUseCases.createDetalleRenglones(newDetalleRenglones);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.detalleRenglonesUseCases.listDetalleRenglones();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.detalleRenglonesUseCases.getIDDetalleRenglones(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedDetalleRenglones = req.body;
            const result = await this.detalleRenglonesUseCases.updateDetalleRenglones(id, updatedDetalleRenglones);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}