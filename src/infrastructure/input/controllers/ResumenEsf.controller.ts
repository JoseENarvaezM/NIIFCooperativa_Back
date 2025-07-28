import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormResumenEsferi } from "../../../domain/models/FormResumenEsferiModel";

export class ResumenEsfController {
    constructor(private readonly resumenEsfGateway: FormsUCIntPort<FormResumenEsferi>) { }
    getIDResumenEsferi = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const result = await this.resumenEsfGateway.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    updateResumenEsferi = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const updatedResumenEsferi = req.body;
            const result = await this.resumenEsfGateway.updateForm(stuID, roomID, updatedResumenEsferi);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getResumenEsferiByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.resumenEsfGateway.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}