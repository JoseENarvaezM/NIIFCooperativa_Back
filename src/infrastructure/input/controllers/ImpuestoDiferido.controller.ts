import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormImpuestoDiferido } from "../../../domain/models/FormImpuestoDiferidoModel";

export class ImpuestoDiferidoController {
    constructor(private readonly impuestoDiferidoUseCases: FormsUCIntPort<FormImpuestoDiferido>) { }

    listImpuestoDiferido = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.impuestoDiferidoUseCases.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDImpuestoDiferido = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.impuestoDiferidoUseCases.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    createImpuestoDiferido = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newImpuestoDiferido = req.body;
            const result = await this.impuestoDiferidoUseCases.createForm(newImpuestoDiferido);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    updateImpuestoDiferido = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedImpuestoDiferido = req.body;
            const result = await this.impuestoDiferidoUseCases.updateForm(id, updatedImpuestoDiferido);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}