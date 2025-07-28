import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormEsfPatrimonio } from "../../../domain/models/FormEsfPatrimonioModel";

export class EsfPatrimonioController {
    constructor(private readonly esfPatrimonioUseCases: FormsUCIntPort<FormEsfPatrimonio>) { }
    getIDEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const result = await this.esfPatrimonioUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    
    putEsfPatrimonio = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const updatedEsfPatrimonio = req.body;
            const result = await this.esfPatrimonioUseCases.updateForm(stuID, roomID, updatedEsfPatrimonio);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getEsfPatrimonioByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.esfPatrimonioUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}