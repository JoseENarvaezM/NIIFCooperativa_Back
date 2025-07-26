import { Request, Response, NextFunction } from "express";
import { StudentUCIntPort } from "../../../application/input/StudentUCIntPort";
import { Student } from "../../../domain/models/StudentModel";


export class StudentController {
    constructor(private readonly studentUseCases: StudentUCIntPort) { }

    postStudent = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newStudent: Student = req.body;
            const result = await this.studentUseCases.createStudent(newStudent);
            res.cookie("token", result!.token, {httpOnly: true, secure: true});
            res.status(201).json({
                stuID: result!.stuID,
                roomID: result!.roomID
            });
        } catch (error) {
            console.error(error);
            next(error);
        }
    };

    getStudents = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.studentUseCases.getStudents();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    getStudentById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID } = req.params;
            const result = await this.studentUseCases.getStudentById(stuID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    putStudent = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID } = req.params;
            const updatedStudent: Student = req.body;
            const result = await this.studentUseCases.updateStudent(stuID, updatedStudent);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { stuID } = req.params;
            await this.studentUseCases.deleteStudent(stuID);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    searchStudentsByCedula = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { cedula, roomID } = req.params;
            const result = await this.studentUseCases.getStudentByCedulaRoom(cedula, roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };

    searchStudentsByRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID } = req.params;
            const result = await this.studentUseCases.searchStudentsByRoom(roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}