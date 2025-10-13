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
const RoomGatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/RoomGatewayAdapter");
const RoomModel_1 = require("../../../src/domain/models/RoomModel");
const database_1 = __importDefault(require("../../../src/config/database"));
// Mock del prisma client
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        room: {
            findUnique: jest.fn(),
            findMany: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));
describe("RoomGatewayAdapter", () => {
    let roomGatewayAdapter;
    let mockPrismaRoom;
    beforeEach(() => {
        roomGatewayAdapter = new RoomGatewayAdapter_1.RoomGatewayAdapter();
        mockPrismaRoom = database_1.default.room;
        jest.clearAllMocks();
    });
    describe("createRoom", () => {
        it("debería crear una sala exitosamente con datos válidos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newRoom = new RoomModel_1.Room("room-123", "Sala de Contabilidad", "pass123", new Date("2025-10-15"), "open", null, "teacher-456");
            const mockCreatedRoom = {
                roomID: newRoom.roomID,
                roomName: newRoom.roomName,
                roomPassword: newRoom.roomPassword,
                roomDate: newRoom.roomDate,
                roomStatus: newRoom.roomStatus,
                roomAnswer: newRoom.roomAnswer,
                usuID: newRoom.usuID,
            };
            mockPrismaRoom.create.mockResolvedValue(mockCreatedRoom);
            // Act
            const result = yield roomGatewayAdapter.createRoom(newRoom);
            // Assert
            expect(mockPrismaRoom.create).toHaveBeenCalledWith({
                data: {
                    roomID: newRoom.roomID,
                    roomName: newRoom.roomName,
                    roomPassword: newRoom.roomPassword,
                    roomDate: newRoom.roomDate,
                    roomStatus: newRoom.roomStatus,
                    roomAnswer: newRoom.roomAnswer,
                    usuID: newRoom.usuID,
                },
            });
            expect(result).toBeInstanceOf(RoomModel_1.Room);
            expect(result === null || result === void 0 ? void 0 : result.roomID).toBe("room-123");
            expect(result === null || result === void 0 ? void 0 : result.roomName).toBe("Sala de Contabilidad");
            expect(result === null || result === void 0 ? void 0 : result.roomStatus).toBe("open");
        }));
        it("debería crear una sala con estado cerrado (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newRoom = new RoomModel_1.Room("room-456", "Sala Cerrada", "pass456", new Date("2025-10-20"), "closed", null, "teacher-789");
            const mockCreatedRoom = {
                roomID: newRoom.roomID,
                roomName: newRoom.roomName,
                roomPassword: newRoom.roomPassword,
                roomDate: newRoom.roomDate,
                roomStatus: newRoom.roomStatus,
                roomAnswer: newRoom.roomAnswer,
                usuID: newRoom.usuID,
            };
            mockPrismaRoom.create.mockResolvedValue(mockCreatedRoom);
            // Act
            const result = yield roomGatewayAdapter.createRoom(newRoom);
            // Assert
            expect(result === null || result === void 0 ? void 0 : result.roomStatus).toBe("closed");
        }));
        it("debería manejar una sala con nombre vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newRoom = new RoomModel_1.Room("room-empty", "", "password", new Date(), "open", null, "teacher-123");
            const mockCreatedRoom = {
                roomID: newRoom.roomID,
                roomName: "",
                roomPassword: newRoom.roomPassword,
                roomDate: newRoom.roomDate,
                roomStatus: newRoom.roomStatus,
                roomAnswer: newRoom.roomAnswer,
                usuID: newRoom.usuID,
            };
            mockPrismaRoom.create.mockResolvedValue(mockCreatedRoom);
            // Act
            const result = yield roomGatewayAdapter.createRoom(newRoom);
            // Assert
            expect(result === null || result === void 0 ? void 0 : result.roomName).toBe("");
        }));
        it("debería manejar una sala con nombre muy largo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longName = "A".repeat(500);
            const newRoom = new RoomModel_1.Room("room-long", longName, "password", new Date(), "open", null, "teacher-123");
            const mockCreatedRoom = {
                roomID: newRoom.roomID,
                roomName: longName,
                roomPassword: newRoom.roomPassword,
                roomDate: newRoom.roomDate,
                roomStatus: newRoom.roomStatus,
                roomAnswer: newRoom.roomAnswer,
                usuID: newRoom.usuID,
            };
            mockPrismaRoom.create.mockResolvedValue(mockCreatedRoom);
            // Act
            const result = yield roomGatewayAdapter.createRoom(newRoom);
            // Assert
            expect(result === null || result === void 0 ? void 0 : result.roomName).toBe(longName);
        }));
    });
    describe("obtainRoomByID", () => {
        it("debería retornar una sala cuando se proporciona un ID válido (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-abc123";
            const mockRoomData = {
                roomID: roomID,
                roomName: "Sala de Finanzas",
                roomPassword: "finanzas2025",
                roomDate: new Date("2025-11-01"),
                roomStatus: "open",
                roomAnswer: null,
                usuID: "teacher-xyz",
            };
            mockPrismaRoom.findUnique.mockResolvedValue(mockRoomData);
            // Act
            const result = yield roomGatewayAdapter.obtainRoomByID(roomID);
            // Assert
            expect(mockPrismaRoom.findUnique).toHaveBeenCalledWith({
                where: { roomID },
            });
            expect(result).toBeInstanceOf(RoomModel_1.Room);
            expect(result === null || result === void 0 ? void 0 : result.roomID).toBe(roomID);
            expect(result === null || result === void 0 ? void 0 : result.roomName).toBe("Sala de Finanzas");
            expect(result === null || result === void 0 ? void 0 : result.roomStatus).toBe("open");
        }));
        it("debería retornar null cuando la sala no existe (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentID = "non-existent-room";
            mockPrismaRoom.findUnique.mockResolvedValue(null);
            // Act
            const result = yield roomGatewayAdapter.obtainRoomByID(nonExistentID);
            // Assert
            expect(mockPrismaRoom.findUnique).toHaveBeenCalledWith({
                where: { roomID: nonExistentID },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar un ID vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyID = "";
            mockPrismaRoom.findUnique.mockResolvedValue(null);
            // Act
            const result = yield roomGatewayAdapter.obtainRoomByID(emptyID);
            // Assert
            expect(mockPrismaRoom.findUnique).toHaveBeenCalledWith({
                where: { roomID: emptyID },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar un ID muy largo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longID = "a".repeat(1000);
            mockPrismaRoom.findUnique.mockResolvedValue(null);
            // Act
            const result = yield roomGatewayAdapter.obtainRoomByID(longID);
            // Assert
            expect(result).toBeNull();
        }));
    });
    describe("obtainRoomsByTeacher", () => {
        it("debería retornar una lista de salas de un profesor (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const teacherID = "teacher-123";
            const mockRooms = [
                {
                    roomID: "room-1",
                    roomName: "Sala 1",
                    roomPassword: "pass1",
                    roomDate: new Date("2025-10-10"),
                    roomStatus: "open",
                    roomAnswer: null,
                    usuID: teacherID,
                },
                {
                    roomID: "room-2",
                    roomName: "Sala 2",
                    roomPassword: "pass2",
                    roomDate: new Date("2025-10-11"),
                    roomStatus: "closed",
                    roomAnswer: null,
                    usuID: teacherID,
                },
                {
                    roomID: "room-3",
                    roomName: "Sala 3",
                    roomPassword: "pass3",
                    roomDate: new Date("2025-10-12"),
                    roomStatus: "open",
                    roomAnswer: null,
                    usuID: teacherID,
                },
            ];
            mockPrismaRoom.findMany.mockResolvedValue(mockRooms);
            // Act
            const result = yield roomGatewayAdapter.obtainRoomsByTeacher(teacherID);
            // Assert
            expect(mockPrismaRoom.findMany).toHaveBeenCalledWith({
                where: { usuID: teacherID },
            });
            expect(result).toHaveLength(3);
            expect(result[0]).toBeInstanceOf(RoomModel_1.Room);
            expect(result[0].roomName).toBe("Sala 1");
            expect(result[1].roomName).toBe("Sala 2");
            expect(result[2].roomName).toBe("Sala 3");
        }));
        it("debería retornar un array vacío cuando el profesor no tiene salas (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const teacherID = "teacher-no-rooms";
            mockPrismaRoom.findMany.mockResolvedValue([]);
            // Act
            const result = yield roomGatewayAdapter.obtainRoomsByTeacher(teacherID);
            // Assert
            expect(mockPrismaRoom.findMany).toHaveBeenCalledWith({
                where: { usuID: teacherID },
            });
            expect(result).toEqual([]);
            expect(result).toHaveLength(0);
        }));
        it("debería retornar una única sala cuando el profesor tiene solo una (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const teacherID = "teacher-one-room";
            const mockRooms = [
                {
                    roomID: "room-only",
                    roomName: "Única Sala",
                    roomPassword: "pass",
                    roomDate: new Date("2025-10-15"),
                    roomStatus: "open",
                    roomAnswer: null,
                    usuID: teacherID,
                },
            ];
            mockPrismaRoom.findMany.mockResolvedValue(mockRooms);
            // Act
            const result = yield roomGatewayAdapter.obtainRoomsByTeacher(teacherID);
            // Assert
            expect(result).toHaveLength(1);
            expect(result[0].roomName).toBe("Única Sala");
        }));
        it("debería manejar un gran número de salas (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const teacherID = "teacher-many-rooms";
            const manyRooms = Array.from({ length: 500 }, (_, i) => ({
                roomID: `room-${i}`,
                roomName: `Sala ${i}`,
                roomPassword: `pass${i}`,
                roomDate: new Date("2025-10-15"),
                roomStatus: "open",
                roomAnswer: null,
                usuID: teacherID,
            }));
            mockPrismaRoom.findMany.mockResolvedValue(manyRooms);
            // Act
            const result = yield roomGatewayAdapter.obtainRoomsByTeacher(teacherID);
            // Assert
            expect(result).toHaveLength(500);
            expect(result[0]).toBeInstanceOf(RoomModel_1.Room);
            expect(result[499].roomName).toBe("Sala 499");
        }));
    });
    describe("uptdateRoom", () => {
        it("debería actualizar una sala exitosamente con datos válidos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-update-123";
            const updatedRoom = new RoomModel_1.Room(roomID, "Sala Actualizada", "newPass123", new Date("2025-12-01"), "closed", null, "teacher-456");
            const mockUpdatedRoom = {
                roomID: roomID,
                roomName: updatedRoom.roomName,
                roomPassword: updatedRoom.roomPassword,
                roomDate: updatedRoom.roomDate,
                roomStatus: updatedRoom.roomStatus,
                roomAnswer: null,
                usuID: updatedRoom.usuID,
            };
            mockPrismaRoom.update.mockResolvedValue(mockUpdatedRoom);
            // Act
            const result = yield roomGatewayAdapter.uptdateRoom(roomID, updatedRoom);
            // Assert
            expect(mockPrismaRoom.update).toHaveBeenCalledWith({
                where: { roomID },
                data: {
                    roomName: updatedRoom.roomName,
                    roomPassword: updatedRoom.roomPassword,
                    roomDate: updatedRoom.roomDate,
                    roomStatus: updatedRoom.roomStatus,
                },
            });
            expect(result).toBeInstanceOf(RoomModel_1.Room);
            expect(result === null || result === void 0 ? void 0 : result.roomID).toBe(roomID);
            expect(result === null || result === void 0 ? void 0 : result.roomName).toBe("Sala Actualizada");
            expect(result === null || result === void 0 ? void 0 : result.roomStatus).toBe("closed");
        }));
        it("debería cambiar el estado de la sala de abierta a cerrada (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-status-change";
            const updatedRoom = new RoomModel_1.Room(roomID, "Sala Cambio Estado", "password", new Date(), "closed", null, "teacher-123");
            const mockUpdatedRoom = {
                roomID: roomID,
                roomName: updatedRoom.roomName,
                roomPassword: updatedRoom.roomPassword,
                roomDate: updatedRoom.roomDate,
                roomStatus: "closed",
                roomAnswer: null,
                usuID: updatedRoom.usuID,
            };
            mockPrismaRoom.update.mockResolvedValue(mockUpdatedRoom);
            // Act
            const result = yield roomGatewayAdapter.uptdateRoom(roomID, updatedRoom);
            // Assert
            expect(result === null || result === void 0 ? void 0 : result.roomStatus).toBe("closed");
        }));
        it("debería manejar actualización con campos vacíos (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-empty-fields";
            const updatedRoom = new RoomModel_1.Room(roomID, "", "", new Date(), "open", null, "teacher-123");
            const mockUpdatedRoom = {
                roomID: roomID,
                roomName: "",
                roomPassword: "",
                roomDate: updatedRoom.roomDate,
                roomStatus: "open",
                roomAnswer: null,
                usuID: "teacher-123",
            };
            mockPrismaRoom.update.mockResolvedValue(mockUpdatedRoom);
            // Act
            const result = yield roomGatewayAdapter.uptdateRoom(roomID, updatedRoom);
            // Assert
            expect(result === null || result === void 0 ? void 0 : result.roomName).toBe("");
            expect(result === null || result === void 0 ? void 0 : result.roomPassword).toBe("");
        }));
        it("debería manejar errores de base de datos durante la actualización (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-error";
            const updatedRoom = new RoomModel_1.Room(roomID, "Error Room", "password", new Date(), "open", null, "teacher-123");
            mockPrismaRoom.update.mockRejectedValue(new Error("Update failed"));
            // Act & Assert
            yield expect(roomGatewayAdapter.uptdateRoom(roomID, updatedRoom)).rejects.toThrow("Update failed");
        }));
    });
    describe("deleteRoomByID", () => {
        it("debería eliminar una sala exitosamente cuando existe (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-to-delete";
            mockPrismaRoom.delete.mockResolvedValue({ roomID });
            // Act
            yield roomGatewayAdapter.deleteRoomByID(roomID);
            // Assert
            expect(mockPrismaRoom.delete).toHaveBeenCalledWith({
                where: { roomID },
            });
        }));
        it("debería intentar eliminar con ID vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyID = "";
            mockPrismaRoom.delete.mockResolvedValue(null);
            // Act
            yield roomGatewayAdapter.deleteRoomByID(emptyID);
            // Assert
            expect(mockPrismaRoom.delete).toHaveBeenCalledWith({
                where: { roomID: emptyID },
            });
        }));
        it("debería manejar errores de base de datos al eliminar (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const roomID = "room-delete-error";
            mockPrismaRoom.delete.mockRejectedValue(new Error("Delete failed"));
            // Act & Assert
            yield expect(roomGatewayAdapter.deleteRoomByID(roomID)).rejects.toThrow("Delete failed");
        }));
        it("debería manejar eliminación de sala inexistente (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentID = "non-existent-room";
            mockPrismaRoom.delete.mockRejectedValue(new Error("Record to delete does not exist"));
            // Act & Assert
            yield expect(roomGatewayAdapter.deleteRoomByID(nonExistentID)).rejects.toThrow("Record to delete does not exist");
        }));
    });
    describe("validateRoomPassword", () => {
        it("debería retornar datos de la sala cuando la contraseña es correcta (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const password = "correctPassword123";
            const mockRoom = {
                roomID: "room-valid-pass",
                roomName: "Sala Validada",
                roomPassword: password,
                roomDate: new Date(),
                roomStatus: "open",
                roomAnswer: null,
                usuID: "teacher-123",
            };
            mockPrismaRoom.findFirst.mockResolvedValue(mockRoom);
            // Act
            const result = yield roomGatewayAdapter.validateRoomPassword(password);
            // Assert
            expect(mockPrismaRoom.findFirst).toHaveBeenCalledWith({
                where: { roomPassword: password },
            });
            expect(result).not.toBeNull();
            expect(result === null || result === void 0 ? void 0 : result.roomID).toBe("room-valid-pass");
            expect(result === null || result === void 0 ? void 0 : result.roomStatus).toBe("open");
        }));
        it("debería retornar datos de sala cerrada con contraseña válida (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const password = "closedRoomPass";
            const mockRoom = {
                roomID: "room-closed",
                roomName: "Sala Cerrada",
                roomPassword: password,
                roomDate: new Date(),
                roomStatus: "closed",
                roomAnswer: null,
                usuID: "teacher-456",
            };
            mockPrismaRoom.findFirst.mockResolvedValue(mockRoom);
            // Act
            const result = yield roomGatewayAdapter.validateRoomPassword(password);
            // Assert
            expect(result === null || result === void 0 ? void 0 : result.roomStatus).toBe("closed");
        }));
        it("debería retornar null cuando la contraseña es incorrecta (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const incorrectPassword = "wrongPassword";
            mockPrismaRoom.findFirst.mockResolvedValue(null);
            // Act
            const result = yield roomGatewayAdapter.validateRoomPassword(incorrectPassword);
            // Assert
            expect(mockPrismaRoom.findFirst).toHaveBeenCalledWith({
                where: { roomPassword: incorrectPassword },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar contraseña vacía (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyPassword = "";
            mockPrismaRoom.findFirst.mockResolvedValue(null);
            // Act
            const result = yield roomGatewayAdapter.validateRoomPassword(emptyPassword);
            // Assert
            expect(mockPrismaRoom.findFirst).toHaveBeenCalledWith({
                where: { roomPassword: emptyPassword },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar contraseña muy larga (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longPassword = "a".repeat(1000);
            mockPrismaRoom.findFirst.mockResolvedValue(null);
            // Act
            const result = yield roomGatewayAdapter.validateRoomPassword(longPassword);
            // Assert
            expect(result).toBeNull();
        }));
        it("debería retornar solo roomID y roomStatus, no toda la sala (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const password = "testPass123";
            const mockRoom = {
                roomID: "room-partial",
                roomName: "Sala Parcial",
                roomPassword: password,
                roomDate: new Date(),
                roomStatus: "open",
                roomAnswer: null,
                usuID: "teacher-789",
            };
            mockPrismaRoom.findFirst.mockResolvedValue(mockRoom);
            // Act
            const result = yield roomGatewayAdapter.validateRoomPassword(password);
            // Assert
            expect(result).toHaveProperty("roomID");
            expect(result).toHaveProperty("roomStatus");
            expect(Object.keys(result)).toHaveLength(2);
        }));
    });
});
