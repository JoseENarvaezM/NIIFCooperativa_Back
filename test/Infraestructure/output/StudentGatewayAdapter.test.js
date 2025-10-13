"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudentGatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/StudentGatewayAdapter");
const StudentModel_1 = require("../../../src/domain/models/StudentModel");
const database_1 = __importDefault(require("../../../src/config/database"));
// Mock del prisma client
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        student: {
            findUnique: jest.fn(),
            findMany: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));
describe("StudentGatewayAdapter", () => {
    let studentGatewayAdapter;
    let mockPrismaStudent;
    beforeEach(() => {
        studentGatewayAdapter = new StudentGatewayAdapter_1.StudentGatewayAdapter();
        mockPrismaStudent = database_1.default.student;
        jest.clearAllMocks();
    });
    describe("createStudent", () => {
        it("debería crear un estudiante exitosamente con datos válidos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newStudent = new StudentModel_1.Student("", "1234567890", "room-123");
            const mockCreatedStudent = {
                stuID: "student-generated-id",
                stuCedula: newStudent.stuCedula,
                roomID: newStudent.roomID,
            };
            mockPrismaStudent.create.mockResolvedValue(mockCreatedStudent);
            // Act
            const result = yield studentGatewayAdapter.createStudent(newStudent);
            // Assert
            expect(mockPrismaStudent.create).toHaveBeenCalledWith({
                data: {
                    stuCedula: newStudent.stuCedula,
                    roomID: newStudent.roomID,
                },
            });
            expect(result).toBeInstanceOf(StudentModel_1.Student);
            expect(result.stuID).toBe("student-generated-id");
            expect(result.stuCedula).toBe("1234567890");
            expect(result.roomID).toBe("room-123");
        }));
        it("debería crear un estudiante con cédula de longitud mínima (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newStudent = new StudentModel_1.Student("", "1", "room-456");
            const mockCreatedStudent = {
                stuID: "student-min-cedula",
                stuCedula: "1",
                roomID: "room-456",
            };
            mockPrismaStudent.create.mockResolvedValue(mockCreatedStudent);
            // Act
            const result = yield studentGatewayAdapter.createStudent(newStudent);
            // Assert
            expect(result.stuCedula).toBe("1");
        }));
        it("debería crear un estudiante con cédula muy larga (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longCedula = "1".repeat(100);
            const newStudent = new StudentModel_1.Student("", longCedula, "room-789");
            const mockCreatedStudent = {
                stuID: "student-long-cedula",
                stuCedula: longCedula,
                roomID: "room-789",
            };
            mockPrismaStudent.create.mockResolvedValue(mockCreatedStudent);
            // Act
            const result = yield studentGatewayAdapter.createStudent(newStudent);
            // Assert
            expect(result.stuCedula).toBe(longCedula);
        }));
        it("debería crear un estudiante con cédula vacía (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newStudent = new StudentModel_1.Student("", "", "room-empty");
            const mockCreatedStudent = {
                stuID: "student-empty-cedula",
                stuCedula: "",
                roomID: "room-empty",
            };
            mockPrismaStudent.create.mockResolvedValue(mockCreatedStudent);
            // Act
            const result = yield studentGatewayAdapter.createStudent(newStudent);
            // Assert
            expect(result.stuCedula).toBe("");
        }));
    });
    describe("getStudents", () => {
        it("debería retornar una lista de estudiantes (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudents = [
                {
                    stuID: "student-1",
                    stuCedula: "1001001001",
                    roomID: "room-1",
                },
                {
                    stuID: "student-2",
                    stuCedula: "1002002002",
                    roomID: "room-1",
                },
                {
                    stuID: "student-3",
                    stuCedula: "1003003003",
                    roomID: "room-2",
                },
            ];
            mockPrismaStudent.findMany.mockResolvedValue(mockStudents);
            // Act
            const result = yield studentGatewayAdapter.getStudents();
            // Assert
            expect(mockPrismaStudent.findMany).toHaveBeenCalled();
            expect(result).toHaveLength(3);
            expect(result[0]).toBeInstanceOf(StudentModel_1.Student);
            expect(result[0].stuCedula).toBe("1001001001");
            expect(result[1].stuCedula).toBe("1002002002");
            expect(result[2].stuCedula).toBe("1003003003");
        }));
        it("debería retornar un array vacío cuando no hay estudiantes (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockPrismaStudent.findMany.mockResolvedValue([]);
            // Act
            const result = yield studentGatewayAdapter.getStudents();
            // Assert
            expect(mockPrismaStudent.findMany).toHaveBeenCalled();
            expect(result).toEqual([]);
            expect(result).toHaveLength(0);
        }));
        it("debería retornar un único estudiante cuando solo existe uno (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudents = [
                {
                    stuID: "student-only",
                    stuCedula: "9999999999",
                    roomID: "room-only",
                },
            ];
            mockPrismaStudent.findMany.mockResolvedValue(mockStudents);
            // Act
            const result = yield studentGatewayAdapter.getStudents();
            // Assert
            expect(result).toHaveLength(1);
            expect(result[0].stuCedula).toBe("9999999999");
        }));
        it("debería manejar un gran número de estudiantes (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const manyStudents = Array.from({ length: 1000 }, (_, i) => ({
                stuID: `student-${i}`,
                stuCedula: `cedula-${i}`,
                roomID: `room-${i % 10}`,
            }));
            mockPrismaStudent.findMany.mockResolvedValue(manyStudents);
            // Act
            const result = yield studentGatewayAdapter.getStudents();
            // Assert
            expect(result).toHaveLength(1000);
            expect(result[0]).toBeInstanceOf(StudentModel_1.Student);
            expect(result[999].stuCedula).toBe("cedula-999");
        }));
    });
    describe("getStudentById", () => {
        it("debería retornar un estudiante cuando se proporciona un ID válido (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const studentID = "student-abc123";
            const mockStudentData = {
                stuID: studentID,
                stuCedula: "1234567890",
                roomID: "room-xyz",
            };
            mockPrismaStudent.findUnique.mockResolvedValue(mockStudentData);
            // Act
            const result = yield studentGatewayAdapter.getStudentById(studentID);
            // Assert
            expect(mockPrismaStudent.findUnique).toHaveBeenCalledWith({
                where: { stuID: studentID },
            });
            expect(result).toBeInstanceOf(StudentModel_1.Student);
            expect(result === null || result === void 0 ? void 0 : result.stuID).toBe(studentID);
            expect(result === null || result === void 0 ? void 0 : result.stuCedula).toBe("1234567890");
            expect(result === null || result === void 0 ? void 0 : result.roomID).toBe("room-xyz");
        }));
        it("debería retornar null cuando el estudiante no existe (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentID = "non-existent-student";
            mockPrismaStudent.findUnique.mockResolvedValue(null);
            // Act
            const result = yield studentGatewayAdapter.getStudentById(nonExistentID);
            // Assert
            expect(mockPrismaStudent.findUnique).toHaveBeenCalledWith({
                where: { stuID: nonExistentID },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar un ID vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyID = "";
            mockPrismaStudent.findUnique.mockResolvedValue(null);
            // Act
            const result = yield studentGatewayAdapter.getStudentById(emptyID);
            // Assert
            expect(mockPrismaStudent.findUnique).toHaveBeenCalledWith({
                where: { stuID: emptyID },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar un ID muy largo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longID = "a".repeat(1000);
            mockPrismaStudent.findUnique.mockResolvedValue(null);
            // Act
            const result = yield studentGatewayAdapter.getStudentById(longID);
            // Assert
            expect(result).toBeNull();
        }));
    });
    describe("updateStudent", () => {
        it("debería actualizar un estudiante exitosamente con datos válidos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const studentID = "student-update-123";
            const updatedStudent = new StudentModel_1.Student(studentID, "9876543210", "room-updated");
            const mockUpdatedStudent = {
                stuID: studentID,
                stuCedula: updatedStudent.stuCedula,
                roomID: updatedStudent.roomID,
            };
            mockPrismaStudent.update.mockResolvedValue(mockUpdatedStudent);
            // Act
            const result = yield studentGatewayAdapter.updateStudent(studentID, updatedStudent);
            // Assert
            expect(mockPrismaStudent.update).toHaveBeenCalledWith({
                where: { stuID: studentID },
                data: {
                    stuCedula: updatedStudent.stuCedula,
                    roomID: updatedStudent.roomID,
                },
            });
            expect(result).toBeInstanceOf(StudentModel_1.Student);
            expect(result === null || result === void 0 ? void 0 : result.stuID).toBe(studentID);
            expect(result === null || result === void 0 ? void 0 : result.stuCedula).toBe("9876543210");
            expect(result === null || result === void 0 ? void 0 : result.roomID).toBe("room-updated");
        }));
        it("debería cambiar la sala del estudiante (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const studentID = "student-change-room";
            const updatedStudent = new StudentModel_1.Student(studentID, "1111111111", "room-new");
            const mockUpdatedStudent = {
                stuID: studentID,
                stuCedula: "1111111111",
                roomID: "room-new",
            };
            mockPrismaStudent.update.mockResolvedValue(mockUpdatedStudent);
            // Act
            const result = yield studentGatewayAdapter.updateStudent(studentID, updatedStudent);
            // Assert
            expect(result === null || result === void 0 ? void 0 : result.roomID).toBe("room-new");
        }));
        it("debería manejar actualización con cédula vacía (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const studentID = "student-empty-cedula";
            const updatedStudent = new StudentModel_1.Student(studentID, "", "room-123");
            const mockUpdatedStudent = {
                stuID: studentID,
                stuCedula: "",
                roomID: "room-123",
            };
            mockPrismaStudent.update.mockResolvedValue(mockUpdatedStudent);
            // Act
            const result = yield studentGatewayAdapter.updateStudent(studentID, updatedStudent);
            // Assert
            expect(result === null || result === void 0 ? void 0 : result.stuCedula).toBe("");
        }));
        it("debería manejar errores de base de datos durante la actualización (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const studentID = "student-error";
            const updatedStudent = new StudentModel_1.Student(studentID, "1234567890", "room-123");
            mockPrismaStudent.update.mockRejectedValue(new Error("Update failed"));
            // Act & Assert
            yield expect(studentGatewayAdapter.updateStudent(studentID, updatedStudent)).rejects.toThrow("Update failed");
        }));
    });
    describe("deleteStudent", () => {
        it("debería eliminar un estudiante exitosamente cuando existe (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const studentID = "student-to-delete";
            mockPrismaStudent.delete.mockResolvedValue({ stuID: studentID });
            // Act
            yield studentGatewayAdapter.deleteStudent(studentID);
            // Assert
            expect(mockPrismaStudent.delete).toHaveBeenCalledWith({
                where: { stuID: studentID },
            });
        }));
        it("debería intentar eliminar con ID vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyID = "";
            mockPrismaStudent.delete.mockResolvedValue(null);
            // Act
            yield studentGatewayAdapter.deleteStudent(emptyID);
            // Assert
            expect(mockPrismaStudent.delete).toHaveBeenCalledWith({
                where: { stuID: emptyID },
            });
        }));
        it("debería manejar errores de base de datos al eliminar (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const studentID = "student-delete-error";
            mockPrismaStudent.delete.mockRejectedValue(new Error("Delete failed"));
            // Act & Assert
            yield expect(studentGatewayAdapter.deleteStudent(studentID)).rejects.toThrow("Delete failed");
        }));
        it("debería manejar eliminación de estudiante inexistente (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentID = "non-existent-student";
            mockPrismaStudent.delete.mockRejectedValue(new Error("Record to delete does not exist"));
            // Act & Assert
            yield expect(studentGatewayAdapter.deleteStudent(nonExistentID)).rejects.toThrow("Record to delete does not exist");
        }));
    });
    describe("searchStudentByCedulaRoom", () => {
        it("debería retornar un estudiante cuando cédula y sala coinciden (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const cedula = "1234567890";
            const roomID = "room-123";
            const mockStudentData = {
                stuID: "student-found",
                stuCedula: cedula,
                roomID: roomID,
            };
            mockPrismaStudent.findFirst.mockResolvedValue(mockStudentData);
            // Act
            const result = yield studentGatewayAdapter.searchStudentByCedulaRoom(cedula, roomID);
            // Assert
            expect(mockPrismaStudent.findFirst).toHaveBeenCalledWith({
                where: { stuCedula: cedula, roomID: roomID },
            });
            expect(result).toBeInstanceOf(StudentModel_1.Student);
            expect(result === null || result === void 0 ? void 0 : result.stuCedula).toBe(cedula);
            expect(result === null || result === void 0 ? void 0 : result.roomID).toBe(roomID);
        }));
        it("debería retornar null cuando no existe estudiante con esa cédula en esa sala (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const cedula = "9999999999";
            const roomID = "room-nonexistent";
            mockPrismaStudent.findFirst.mockResolvedValue(null);
            // Act
            const result = yield studentGatewayAdapter.searchStudentByCedulaRoom(cedula, roomID);
            // Assert
            expect(mockPrismaStudent.findFirst).toHaveBeenCalledWith({
                where: { stuCedula: cedula, roomID: roomID },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar cédula vacía (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyCedula = "";
            const roomID = "room-123";
            mockPrismaStudent.findFirst.mockResolvedValue(null);
            // Act
            const result = yield studentGatewayAdapter.searchStudentByCedulaRoom(emptyCedula, roomID);
            // Assert
            expect(mockPrismaStudent.findFirst).toHaveBeenCalledWith({
                where: { stuCedula: emptyCedula, roomID: roomID },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar roomID vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const cedula = "1234567890";
            const emptyRoomID = "";
            mockPrismaStudent.findFirst.mockResolvedValue(null);
            // Act
            const result = yield studentGatewayAdapter.searchStudentByCedulaRoom(cedula, emptyRoomID);
            // Assert
            expect(mockPrismaStudent.findFirst).toHaveBeenCalledWith({
                where: { stuCedula: cedula, roomID: emptyRoomID },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar cédula y roomID muy largos (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longCedula = "1".repeat(500);
            const longRoomID = "r".repeat(500);
            mockPrismaStudent.findFirst.mockResolvedValue(null);
            // Act
            const result = yield studentGatewayAdapter.searchStudentByCedulaRoom(longCedula, longRoomID);
            // Assert
            expect(result).toBeNull();
        }));
    });
    describe("searchStudentsByRoom", () => {
        it("debería retornar una lista de estudiantes de una sala (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-populated";
            const mockStudents = [
                {
                    stuID: "student-1",
                    stuCedula: "1111111111",
                    roomID: roomID,
                },
                {
                    stuID: "student-2",
                    stuCedula: "2222222222",
                    roomID: roomID,
                },
                {
                    stuID: "student-3",
                    stuCedula: "3333333333",
                    roomID: roomID,
                },
            ];
            mockPrismaStudent.findMany.mockResolvedValue(mockStudents);
            // Act
            const result = yield studentGatewayAdapter.searchStudentsByRoom(roomID);
            // Assert
            expect(mockPrismaStudent.findMany).toHaveBeenCalledWith({
                where: { roomID },
            });
            expect(result).toHaveLength(3);
            expect(result[0]).toBeInstanceOf(StudentModel_1.Student);
            expect(result[0].stuCedula).toBe("1111111111");
            expect(result[1].stuCedula).toBe("2222222222");
            expect(result[2].stuCedula).toBe("3333333333");
        }));
        it("debería retornar un array vacío cuando la sala no tiene estudiantes (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyRoomID = "room-empty";
            mockPrismaStudent.findMany.mockResolvedValue([]);
            // Act
            const result = yield studentGatewayAdapter.searchStudentsByRoom(emptyRoomID);
            // Assert
            expect(mockPrismaStudent.findMany).toHaveBeenCalledWith({
                where: { roomID: emptyRoomID },
            });
            expect(result).toEqual([]);
            expect(result).toHaveLength(0);
        }));
        it("debería retornar un único estudiante cuando la sala tiene solo uno (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-one-student";
            const mockStudents = [
                {
                    stuID: "student-only",
                    stuCedula: "9999999999",
                    roomID: roomID,
                },
            ];
            mockPrismaStudent.findMany.mockResolvedValue(mockStudents);
            // Act
            const result = yield studentGatewayAdapter.searchStudentsByRoom(roomID);
            // Assert
            expect(result).toHaveLength(1);
            expect(result[0].stuCedula).toBe("9999999999");
        }));
        it("debería manejar un gran número de estudiantes en una sala (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-many-students";
            const manyStudents = Array.from({ length: 500 }, (_, i) => ({
                stuID: `student-${i}`,
                stuCedula: `cedula-${i}`,
                roomID: roomID,
            }));
            mockPrismaStudent.findMany.mockResolvedValue(manyStudents);
            // Act
            const result = yield studentGatewayAdapter.searchStudentsByRoom(roomID);
            // Assert
            expect(result).toHaveLength(500);
            expect(result[0]).toBeInstanceOf(StudentModel_1.Student);
            expect(result[499].stuCedula).toBe("cedula-499");
        }));
        it("debería manejar roomID vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyRoomID = "";
            mockPrismaStudent.findMany.mockResolvedValue([]);
            // Act
            const result = yield studentGatewayAdapter.searchStudentsByRoom(emptyRoomID);
            // Assert
            expect(mockPrismaStudent.findMany).toHaveBeenCalledWith({
                where: { roomID: emptyRoomID },
            });
            expect(result).toEqual([]);
        }));
        it("debería manejar roomID muy largo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longRoomID = "r".repeat(1000);
            mockPrismaStudent.findMany.mockResolvedValue([]);
            // Act
            const result = yield studentGatewayAdapter.searchStudentsByRoom(longRoomID);
            // Assert
            expect(result).toEqual([]);
        }));
    });
});
