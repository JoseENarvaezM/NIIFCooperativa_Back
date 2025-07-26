import { Student } from "../../domain/models/StudentModel";

export interface StudentGatewayIntPort {
  createStudent(student: Student): Promise<Student>;
  getStudents(): Promise<Student[]>;
  getStudentById(id: string): Promise<Student | null>;
  updateStudent(id: string, student: Student): Promise<Student | null>;
  deleteStudent(id: string): Promise<void>;
  searchStudentByCedulaRoom(cedula: string, roomID: string): Promise<Student | null>;
  searchStudentsByRoom(roomID: string): Promise<Student[]>;
}