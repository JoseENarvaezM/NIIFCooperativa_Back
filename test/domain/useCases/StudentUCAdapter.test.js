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
Object.defineProperty(exports, "__esModule", { value: true });
const StudentUCAdapter_1 = require("../../../src/domain/useCases/StudentUCAdapter");
describe("StudentUCAdapter", () => {
    let studentUCAdapter;
    let mockRoomGateway;
    let mockStudentGateway;
    let mockReportGateway;
    let mockFormsActivosFijosGateway;
    let mockFormsCaratulaGateway;
    let mockFormsDetalleRenglonesGateway;
    let mockFormsEsfPatrimonioGateway;
    let mockFormsR110Gateway;
    let mockFormsImpuestoDiferidoGateway;
    let mockFormsIngresosFancturacionGateway;
    let mockFormsRentaLiquidaGateway;
    let mockFormsResumenEsferiGateway;
    let mockErrorFormatter;
    let mockTokenService;
    beforeEach(() => {
        mockRoomGateway = {
            obtainRoomByID: jest.fn(),
            createRoom: jest.fn(),
            obtainRoomsByTeacher: jest.fn(),
            uptdateRoom: jest.fn(),
            deleteRoomByID: jest.fn(),
            validateRoomPassword: jest.fn(),
        };
        mockStudentGateway = {
            createStudent: jest.fn(),
            getStudents: jest.fn(),
            getStudentById: jest.fn(),
            updateStudent: jest.fn(),
            deleteStudent: jest.fn(),
            searchStudentByCedulaRoom: jest.fn(),
            searchStudentsByRoom: jest.fn(),
        };
        mockReportGateway = {
            createReport: jest.fn(),
        };
        mockFormsActivosFijosGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockFormsCaratulaGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockFormsDetalleRenglonesGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockFormsEsfPatrimonioGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockFormsR110Gateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockFormsImpuestoDiferidoGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockFormsIngresosFancturacionGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockFormsRentaLiquidaGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockFormsResumenEsferiGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockErrorFormatter = {
            genericError: jest.fn(),
            errorNotFound: jest.fn(),
        };
        mockTokenService = {
            createAccessToken: jest.fn(),
            verifyAccessToken: jest.fn(),
        };
        studentUCAdapter = new StudentUCAdapter_1.StudentUCAdapter(mockRoomGateway, mockStudentGateway, mockReportGateway, mockFormsActivosFijosGateway, mockFormsCaratulaGateway, mockFormsDetalleRenglonesGateway, mockFormsEsfPatrimonioGateway, mockFormsR110Gateway, mockFormsImpuestoDiferidoGateway, mockFormsIngresosFancturacionGateway, mockFormsRentaLiquidaGateway, mockFormsResumenEsferiGateway, mockErrorFormatter, mockTokenService);
    });
    describe("createStudent", () => {
        it("debería crear un estudiante con todos los formularios y retornar token", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudent = {
                stuID: "",
                stuCedula: "12345678",
                roomID: "room1",
                report: [],
            };
            const mockRoom = {
                roomID: "room1",
                roomName: "Test Room",
            };
            const mockCreatedStudent = {
                stuID: "stu1",
                stuCedula: "12345678",
                roomID: "room1",
                report: [],
            };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
            mockStudentGateway.searchStudentByCedulaRoom.mockResolvedValue(null);
            mockStudentGateway.createStudent.mockResolvedValue(mockCreatedStudent);
            mockTokenService.createAccessToken.mockResolvedValue("test-token");
            // Mock all form creations
            mockFormsActivosFijosGateway.createForm.mockResolvedValue({ actID: "act1" });
            mockFormsCaratulaGateway.createForm.mockResolvedValue({ carID: "car1" });
            mockFormsDetalleRenglonesGateway.createForm.mockResolvedValue({ detID: "det1" });
            mockFormsEsfPatrimonioGateway.createForm.mockResolvedValue({ esfID: "esf1" });
            mockFormsR110Gateway.createForm.mockResolvedValue({ r110ID: "r1101" });
            mockFormsImpuestoDiferidoGateway.createForm.mockResolvedValue({ impID: "imp1" });
            mockFormsIngresosFancturacionGateway.createForm.mockResolvedValue({ ingID: "ing1" });
            mockFormsRentaLiquidaGateway.createForm.mockResolvedValue({ renID: "ren1" });
            mockFormsResumenEsferiGateway.createForm.mockResolvedValue({ resID: "res1" });
            // Act
            const result = yield studentUCAdapter.createStudent(mockStudent);
            // Assert
            expect(result).not.toBeNull();
            expect(result === null || result === void 0 ? void 0 : result.token).toBe("test-token");
            expect(result === null || result === void 0 ? void 0 : result.usuRole).toBe("student");
            expect(mockReportGateway.createReport).toHaveBeenCalled();
            expect(mockStudentGateway.createStudent).toHaveBeenCalledWith(mockStudent);
        }));
        it("debería lanzar error cuando el room no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudent = {
                stuID: "",
                stuCedula: "12345678",
                roomID: "room999",
                report: [],
            };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(null);
            // Act
            const result = yield studentUCAdapter.createStudent(mockStudent);
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con id room999 no existe.");
        }));
        it("debería lanzar error cuando el estudiante ya existe en el room", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudent = {
                stuID: "",
                stuCedula: "12345678",
                roomID: "room1",
                report: [],
            };
            const mockRoom = {
                roomID: "room1",
                roomName: "Test Room",
            };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
            mockStudentGateway.searchStudentByCedulaRoom.mockResolvedValue(mockStudent);
            // Mock form creations
            mockFormsActivosFijosGateway.createForm.mockResolvedValue({ actID: "act1" });
            mockFormsCaratulaGateway.createForm.mockResolvedValue({ carID: "car1" });
            mockFormsDetalleRenglonesGateway.createForm.mockResolvedValue({ detID: "det1" });
            mockFormsEsfPatrimonioGateway.createForm.mockResolvedValue({ esfID: "esf1" });
            mockFormsR110Gateway.createForm.mockResolvedValue({ r110ID: "r1101" });
            mockFormsImpuestoDiferidoGateway.createForm.mockResolvedValue({ impID: "imp1" });
            mockFormsIngresosFancturacionGateway.createForm.mockResolvedValue({ ingID: "ing1" });
            mockFormsRentaLiquidaGateway.createForm.mockResolvedValue({ renID: "ren1" });
            mockFormsResumenEsferiGateway.createForm.mockResolvedValue({ resID: "res1" });
            // Act
            const result = yield studentUCAdapter.createStudent(mockStudent);
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Estudiante con cedula 12345678 ya existe en este room Test Room.");
        }));
    });
    describe("getStudents", () => {
        it("debería retornar todos los estudiantes", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudents = [
                { stuID: "stu1", stuCedula: "123", roomID: "room1", report: [] },
                { stuID: "stu2", stuCedula: "456", roomID: "room1", report: [] },
            ];
            mockStudentGateway.getStudents.mockResolvedValue(mockStudents);
            // Act
            const result = yield studentUCAdapter.getStudents();
            // Assert
            expect(result).toEqual(mockStudents);
            expect(mockStudentGateway.getStudents).toHaveBeenCalled();
        }));
    });
    describe("getStudentById", () => {
        it("debería retornar el estudiante cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudent = {
                stuID: "stu1",
                stuCedula: "12345678",
                roomID: "room1",
                report: [],
            };
            mockStudentGateway.getStudentById.mockResolvedValue(mockStudent);
            // Act
            const result = yield studentUCAdapter.getStudentById("stu1");
            // Assert
            expect(result).toEqual(mockStudent);
            expect(mockStudentGateway.getStudentById).toHaveBeenCalledWith("stu1");
        }));
        it("debería lanzar error cuando el estudiante no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockStudentGateway.getStudentById.mockResolvedValue(null);
            // Act
            const result = yield studentUCAdapter.getStudentById("stu999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Estudiante con id stu999 no existe.");
        }));
    });
    describe("updateStudent", () => {
        it("debería actualizar el estudiante cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudent = {
                stuID: "stu1",
                stuCedula: "12345678",
                roomID: "room1",
                report: [],
            };
            mockStudentGateway.updateStudent.mockResolvedValue(mockStudent);
            // Act
            const result = yield studentUCAdapter.updateStudent("stu1", mockStudent);
            // Assert
            expect(result).toEqual(mockStudent);
            expect(mockStudentGateway.updateStudent).toHaveBeenCalledWith("stu1", mockStudent);
        }));
        it("debería lanzar error cuando el estudiante no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockStudentGateway.updateStudent.mockResolvedValue(null);
            // Act
            const result = yield studentUCAdapter.updateStudent("stu999", {});
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Estudiante con id stu999 no existe.");
        }));
    });
    describe("deleteStudent", () => {
        it("debería eliminar el estudiante cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudent = {
                stuID: "stu1",
                stuCedula: "12345678",
                roomID: "room1",
                report: [],
            };
            mockStudentGateway.getStudentById.mockResolvedValue(mockStudent);
            // Act
            yield studentUCAdapter.deleteStudent("stu1");
            // Assert
            expect(mockStudentGateway.deleteStudent).toHaveBeenCalledWith("stu1");
        }));
        it("debería lanzar error cuando el estudiante no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockStudentGateway.getStudentById.mockResolvedValue(null);
            // Act
            yield studentUCAdapter.deleteStudent("stu999");
            // Assert
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Estudiante con id stu999 no existe.");
        }));
    });
    describe("getStudentByCedulaRoom", () => {
        it("debería retornar el estudiante con token cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudent = {
                stuID: "stu1",
                stuCedula: "12345678",
                roomID: "room1",
                report: [],
            };
            const mockRoom = {
                roomID: "room1",
                roomName: "Test Room",
            };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
            mockStudentGateway.searchStudentByCedulaRoom.mockResolvedValue(mockStudent);
            mockTokenService.createAccessToken.mockResolvedValue("test-token");
            // Act
            const result = yield studentUCAdapter.getStudentByCedulaRoom("12345678", "room1");
            // Assert
            expect(result).not.toBeNull();
            expect(result === null || result === void 0 ? void 0 : result.token).toBe("test-token");
            expect(result === null || result === void 0 ? void 0 : result.usuRole).toBe("student");
            expect(mockStudentGateway.searchStudentByCedulaRoom).toHaveBeenCalledWith("12345678", "room1");
        }));
        it("debería lanzar error cuando el room no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockRoomGateway.obtainRoomByID.mockResolvedValue(null);
            // Act
            const result = yield studentUCAdapter.getStudentByCedulaRoom("12345678", "room999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con id room999 no existe.");
        }));
        it("debería lanzar error cuando el estudiante no existe en el room", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRoom = {
                roomID: "room1",
                roomName: "Test Room",
            };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
            mockStudentGateway.searchStudentByCedulaRoom.mockResolvedValue(null);
            // Act
            const result = yield studentUCAdapter.getStudentByCedulaRoom("99999999", "room1");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Estudiante con cedula 99999999 en este room Test Room no existe.");
        }));
    });
    describe("searchStudentsByRoom", () => {
        it("debería retornar los estudiantes del room", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockStudents = [
                { stuID: "stu1", stuCedula: "123", roomID: "room1", report: [] },
                { stuID: "stu2", stuCedula: "456", roomID: "room1", report: [] },
            ];
            mockStudentGateway.searchStudentsByRoom.mockResolvedValue(mockStudents);
            // Act
            const result = yield studentUCAdapter.searchStudentsByRoom("room1");
            // Assert
            expect(result).toEqual(mockStudents);
            expect(mockStudentGateway.searchStudentsByRoom).toHaveBeenCalledWith("room1");
        }));
    });
});
