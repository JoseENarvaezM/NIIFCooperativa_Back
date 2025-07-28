import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormDetalleRenglones } from "../../../domain/models/FormDetallerEnglonesModel";


export class DetalleRenglonesController {
    constructor(private readonly detalleRenglonesUseCases: FormsUCIntPort<FormDetalleRenglones>) { }
    getIDDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const result = await this.detalleRenglonesUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putDetalleRenglones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const updatedDetalleRenglones = req.body;
            const result = await this.detalleRenglonesUseCases.updateForm(stuID, roomID, updatedDetalleRenglones);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getDetalleRenglonesByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.detalleRenglonesUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}