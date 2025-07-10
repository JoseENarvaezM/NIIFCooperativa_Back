import { Request, Response, NextFunction } from "express";
import { Form110UCIntPort } from "../../../application/input/Form110UCIntPort";

export class Form110Controller {
    constructor(private readonly form110UseCases: Form110UCIntPort) { }

    postForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newForm110 = req.body;
            const result = await this.form110UseCases.createForm110(newForm110);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    getForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.form110UseCases.listForm110();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.form110UseCases.getIDForm110(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putForm110 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedForm110 = req.body;
            const result = await this.form110UseCases.updateForm110(id, updatedForm110);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}