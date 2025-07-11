import { Request, Response, NextFunction } from "express";
import { ReportUCIntPort } from "../../../application/input/ReportUCIntPort";

export class ReportController {
    constructor(private readonly reportUseCases: ReportUCIntPort) {}

    getReportByID = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await this.reportUseCases.getReportByID(id);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Report not found" });
            }
        } catch (error) {
            next(error);
        }
    };
}