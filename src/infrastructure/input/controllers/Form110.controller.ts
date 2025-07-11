import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormR110 } from "../../../domain/models/FormR110Model";

export class Form110Controller {
    constructor(private readonly form110UseCases: FormsUCIntPort<FormR110>) { }

    postForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newForm110 = req.body;
            const result = await this.form110UseCases.createForm(newForm110);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.form110UseCases.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.form110UseCases.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedForm110 = req.body;
            const result = await this.form110UseCases.updateForm(id, updatedForm110);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}