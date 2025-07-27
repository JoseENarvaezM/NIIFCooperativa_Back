import { Student } from "../../domain/models/StudentModel";

export interface StudentUCIntPort {
  createStudent(student: Student): Promise<Student & { token: string, usuRole: string } | null>;
  getStudents(): Promise<Student[]>;
  getStudentById(id: string): Promise<Student | null>;
  updateStudent(id: string, student: Student): Promise<Student | null>;
  deleteStudent(id: string): Promise<void>;
  getStudentByCedulaRoom(cedula: string, roomID: string): Promise<Student & { token: string, usuRole: string } | null>;
  searchStudentsByRoom(roomID: string): Promise<Student[]>;
}