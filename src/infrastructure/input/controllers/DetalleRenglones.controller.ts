import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormDetalleRenglones } from "../../../domain/models/FormDetallerEnglonesModel";


export class DetalleRenglonesController {
    constructor(private readonly detalleRenglonesUseCases: FormsUCIntPort<FormDetalleRenglones>) { }

    postDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newDetalleRenglones = req.body;
            const result = await this.detalleRenglonesUseCases.createForm(newDetalleRenglones);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.detalleRenglonesUseCases.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.detalleRenglonesUseCases.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedDetalleRenglones = req.body;
            const result = await this.detalleRenglonesUseCases.updateForm(id, updatedDetalleRenglones);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}