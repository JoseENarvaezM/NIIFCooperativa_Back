import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormEsfPatrimonio } from "../../../domain/models/FormEsfPatrimonioModel";

export class EsfPatrimonioController {
    constructor(private readonly esfPatrimonioUseCases: FormsUCIntPort<FormEsfPatrimonio>) { }

    postEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newEsfPatrimonio = req.body;
            const result = await this.esfPatrimonioUseCases.createForm(newEsfPatrimonio);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.esfPatrimonioUseCases.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.esfPatrimonioUseCases.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    
    putEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedEsfPatrimonio = req.body;
            const result = await this.esfPatrimonioUseCases.updateForm(id, updatedEsfPatrimonio);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}