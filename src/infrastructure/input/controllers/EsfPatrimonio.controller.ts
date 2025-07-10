import { Request, Response, NextFunction } from "express";
import { EsfPatrimonioUCIntPort } from "../../../application/input/EsfPatrimonioUCIntPort";

export class EsfPatrimonioController {
    constructor(private readonly esfPatrimonioUseCases: EsfPatrimonioUCIntPort) { }

    postEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newEsfPatrimonio = req.body;
            const result = await this.esfPatrimonioUseCases.createEsfPatrimonio(newEsfPatrimonio);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.esfPatrimonioUseCases.listEsfPatrimonio();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.esfPatrimonioUseCases.getIDEsfPatrimonio(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedEsfPatrimonio = req.body;
            const result = await this.esfPatrimonioUseCases.updateEsfPatrimonio(id, updatedEsfPatrimonio);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}