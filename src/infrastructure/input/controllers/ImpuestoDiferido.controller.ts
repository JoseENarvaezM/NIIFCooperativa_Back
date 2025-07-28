import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormImpuestoDiferido } from "../../../domain/models/FormImpuestoDiferidoModel";

export class ImpuestoDiferidoController {
    constructor(private readonly impuestoDiferidoUseCases: FormsUCIntPort<FormImpuestoDiferido>) { }
    getIDImpuestoDiferido = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const result = await this.impuestoDiferidoUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    updateImpuestoDiferido = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const updatedImpuestoDiferido = req.body;
            const result = await this.impuestoDiferidoUseCases.updateForm(stuID, roomID, updatedImpuestoDiferido);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getImpuestoDiferidoByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.impuestoDiferidoUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}