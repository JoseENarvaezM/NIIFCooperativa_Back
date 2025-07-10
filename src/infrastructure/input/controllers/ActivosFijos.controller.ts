import { Request, Response, NextFunction } from "express";
import { ActivosFijosUCIntPort } from "../../../application/input/ActivosFijosUCIntPort";

export class ActivosFijosController {
    constructor(private readonly activosFijosUseCases: ActivosFijosUCIntPort) { }

    postActivoFijo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newActivoFijo = req.body;
            const result = await this.activosFijosUseCases.createActivoFijo(newActivoFijo);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getActivosFijos = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.activosFijosUseCases.listActivosFijos();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDActivoFijo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.activosFijosUseCases.getIDActivosFijos(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putActivoFijo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedActivoFijo = req.body;
            const result = await this.activosFijosUseCases.updateActivoFijo(id, updatedActivoFijo);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}