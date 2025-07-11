import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormCaratula } from "../../../domain/models/FormCaratulaModel";

export class CaratulaController {
    constructor(private readonly caratulaUseCases: FormsUCIntPort<FormCaratula>) { }

    postCaratula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newCaratula = req.body;
            const result = await this.caratulaUseCases.createForm(newCaratula);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getCaratulas = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.caratulaUseCases.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDCaratula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.caratulaUseCases.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putCaratula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedCaratula = req.body;
            const result = await this.caratulaUseCases.updateForm(id, updatedCaratula);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}