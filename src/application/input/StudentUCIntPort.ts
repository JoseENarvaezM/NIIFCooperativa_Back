import { Student } from "../../domain/models/StudentModel";

export interface StudentUCIntPort {
  createStudent(student: Student): Promise<Student>;
  getStudents(): Promise<Student[]>;
  getStudentById(id: string): Promise<Student | null>;
  updateStudent(id: string, student: Student): Promise<Student | null>;
  deleteStudent(id: string): Promise<void>;
  searchStudentsByCedula(cedula: string): Promise<Student[]>;
  searchStudentsByRoom(roomID: string): Promise<Student[]>;
}