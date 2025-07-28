import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormR110 } from "../../../domain/models/FormR110Model";

export class Form110Controller {
    constructor(private readonly form110UseCases: FormsUCIntPort<FormR110>) { }

    getIDForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const result = await this.form110UseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.user;
            const updatedForm110 = req.body;
            const result = await this.form110UseCases.updateForm(stuID, roomID, updatedForm110);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getForm110ByStudentAndRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID, roomID } = req.params;
            const result = await this.form110UseCases.getIDForm(stuID, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}