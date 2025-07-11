import { Request, Response, NextFunction } from "express";
import { FormsUCIntPort } from "../../../application/input/FormsUCIntPort";
import { FormResumenEsferi } from "../../../domain/models/FormResumenEsferiModel";

export class ResumenEsfController {
    constructor(private readonly resumenEsfGateway: FormsUCIntPort<FormResumenEsferi>) { }

    listResumenEsferi = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.resumenEsfGateway.listForms();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getIDResumenEsferi = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.resumenEsfGateway.getIDForm(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    createResumenEsferi = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newResumenEsferi = req.body;
            const result = await this.resumenEsfGateway.createForm(newResumenEsferi);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };

    updateResumenEsferi = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const updatedResumenEsferi = req.body;
            const result = await this.resumenEsfGateway.updateForm(id, updatedResumenEsferi);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}