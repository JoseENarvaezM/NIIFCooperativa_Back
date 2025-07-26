import { StudentGatewayIntPort } from "../../../../application/output/StudentGatewayIntPort";
import prisma from "../../../../config/database";
import { Student } from "../../../../domain/models/StudentModel";

export class StudentGatewayAdapter implements StudentGatewayIntPort {
    async createStudent(student: Student): Promise<Student> {
        const newStudentData = await prisma.student.create({
            data: {
                stuCedula: student.stuCedula,
                roomID: student.roomID
            }
        });
        return new Student(
            newStudentData.stuID,
            newStudentData.stuCedula,
            newStudentData.roomID
        );
    }

    async getStudents(): Promise<Student[]> {
        const studentsData = await prisma.student.findMany();
        return studentsData.map(studentData => new Student(
            studentData.stuID,
            studentData.stuCedula,
            studentData.roomID
        ));
    }

    async getStudentById(id: string): Promise<Student | null> {
        const studentData = await prisma.student.findUnique({
            where: { stuID: id }
        });
        if (!studentData) return null;
        return new Student(
            studentData.stuID,
            studentData.stuCedula,
            studentData.roomID
        );
    }

    async updateStudent(id: string, student: Student): Promise<Student | null> {
        const updatedStudentData = await prisma.student.update({
            where: { stuID: id },
            data: {
                stuCedula: student.stuCedula,
                roomID: student.roomID
            }
        });
        if (!updatedStudentData) return null;
        return new Student(
            updatedStudentData.stuID,
            updatedStudentData.stuCedula,
            updatedStudentData.roomID
        );
    }

    async deleteStudent(id: string): Promise<void> {
        await prisma.student.delete({
            where: { stuID: id }
        });
    }
    async searchStudentByCedulaRoom(cedula: string, roomID: string): Promise<Student | null> {
        const studentsData = await prisma.student.findFirst({
            where: { stuCedula: cedula, roomID: roomID }
        });
        if (!studentsData) {
            return null;
        }
        return new Student(
            studentsData.stuID,
            studentsData.stuCedula,
            studentsData.roomID
        );
    }
    
    async searchStudentsByRoom(roomID: string): Promise<Student[]> {
        const studentsData = await prisma.student.findMany({
            where: { roomID }
        });
        return studentsData.map(studentData => new Student(
            studentData.stuID,
            studentData.stuCedula,
            studentData.roomID
        ));
    }
}