import { Request, Response, NextFunction } from "express";
import { CaratulaUCIntPort } from "../../../application/input/CaratulaUCIntPort";

export class CaratulaController {
    constructor(private readonly caratulaUseCases: CaratulaUCIntPort) { }

    postCaratula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newCaratula = req.body;
            const result = await this.caratulaUseCases.createCaratula(newCaratula);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getCaratulas = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.caratulaUseCases.listCaratulas();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDCaratula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.caratulaUseCases.getIDCaratula(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putCaratula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedCaratula = req.body;
            const result = await this.caratulaUseCases.updateCaratula(id, updatedCaratula);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}