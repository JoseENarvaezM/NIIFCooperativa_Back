import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormActivosFijos } from "../../../domain/models/FormActivosFijosModel";

export class ActivosFijosController {
    constructor(private readonly activosFijosUseCases: FormsUCIntPort<FormActivosFijos>) { }

    postActivoFijo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newActivoFijo = req.body;
            const result = await this.activosFijosUseCases.createForm(newActivoFijo);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getActivosFijos = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.activosFijosUseCases.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDActivoFijo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id} = req.params;
            const result = await this.activosFijosUseCases.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putActivoFijo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedActivoFijo = req.body;
            const result = await this.activosFijosUseCases.updateForm(id, updatedActivoFijo);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}