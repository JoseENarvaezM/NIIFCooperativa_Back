import { Student } from "../models/StudentModel";
import { StudentGatewayIntPort } from "../../application/output/StudentGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
import { StudentUCIntPort } from "../../application/input/StudentUCIntPort";

export class StudentUCAdapter implements StudentUCIntPort {
    constructor(
        private studentGateway: StudentGatewayIntPort,
        private errorFormatter: ErrorFormatterIntPort
    ) { }

    async createStudent(student: Student): Promise<Student> {
        return this.studentGateway.createStudent(student);
    }

    async getStudents(): Promise<Student[]> {
        return this.studentGateway.getStudents();
    }

    async getStudentById(id: string): Promise<Student | null> {
        const student = await this.studentGateway.getStudentById(id);
        if (student) {
            return student;
        }
        this.errorFormatter.errorNotFound(`Student with id ${id} does not exist.`);
        return null;
    }

    async updateStudent(id: string, student: Student): Promise<Student | null> {
        const updatedStudent = await this.studentGateway.updateStudent(id, student);
        if (updatedStudent) {
            return updatedStudent;
        }
        this.errorFormatter.errorNotFound(`Student with id ${id} does not exist.`);
        return null;
    }

    async deleteStudent(id: string): Promise<void> {
        const student = await this.studentGateway.getStudentById(id);
        if (student) {
            await this.studentGateway.deleteStudent(id);
            return;
        }
        this.errorFormatter.errorNotFound(`Student with id ${id} does not exist.`);
    }

    async searchStudentsByCedula(cedula: string): Promise<Student[]> {
        return this.studentGateway.searchStudentsByCedula(cedula);
    }

    async searchStudentsByRoom(roomID: string): Promise<Student[]> {
        return this.studentGateway.searchStudentsByRoom(roomID);
    }
}