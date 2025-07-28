import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormActivosFijos } from "../../../domain/models/FormActivosFijosModel";

export class ActivosFijosController {
    constructor(private readonly activosFijosUseCases: FormsUCIntPort<FormActivosFijos>) { }
    getIDActivoFijo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const result = await this.activosFijosUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putActivoFijo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const updatedActivoFijo = req.body;
            const result = await this.activosFijosUseCases.updateForm(stuID, roomID, updatedActivoFijo);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getActivoFijoByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.activosFijosUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}