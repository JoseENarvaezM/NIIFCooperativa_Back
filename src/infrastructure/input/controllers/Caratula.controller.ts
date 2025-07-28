import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormCaratula } from "../../../domain/models/FormCaratulaModel";

export class CaratulaController {
    constructor(private readonly caratulaUseCases: FormsUCIntPort<FormCaratula>) { }
    getIDCaratula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID, stuID } = req.user;
            const result = await this.caratulaUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putCaratula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID, stuID } = req.user;
            const updatedCaratula = req.body;
            const result = await this.caratulaUseCases.updateForm(stuID, roomID, updatedCaratula);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getCaratulaByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.caratulaUseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}