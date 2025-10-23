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
const RoomUCAdapter_1 = require("../../../src/domain/useCases/RoomUCAdapter");
describe("RoomUCAdapter", () => {
    let roomUCAdapter;
    let mockRoomGateway;
    let mockErrorFormatter;
    beforeEach(() => {
        mockRoomGateway = {
            createRoom: jest.fn(),
            obtainRoomByID: jest.fn(),
            obtainRoomsByTeacher: jest.fn(),
            uptdateRoom: jest.fn(),
            deleteRoomByID: jest.fn(),
            validateRoomPassword: jest.fn(),
        };
        mockErrorFormatter = {
            genericError: jest.fn(),
            errorNotFound: jest.fn(),
        };
        roomUCAdapter = new RoomUCAdapter_1.RoomUCAdapter(mockRoomGateway, mockErrorFormatter);
    });
    describe("createRoom", () => {
        it("debería crear una sala cuando la contraseña no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRoom = {
                roomID: "room1",
                roomName: "Test Room",
                roomPassword: "pass123",
                roomDate: new Date(),
                roomStatus: "closed",
                roomAnswer: {},
                usuID: "teacher1",
                report: [],
                student: [],
            };
            mockRoomGateway.validateRoomPassword.mockResolvedValue(null);
            mockRoomGateway.createRoom.mockResolvedValue(Object.assign(Object.assign({}, mockRoom), { roomDate: expect.any(Date), roomStatus: "closed", roomAnswer: {} }));
            // Act
            const result = yield roomUCAdapter.createRoom(mockRoom);
            // Assert
            expect(result).not.toBeNull();
            expect(mockRoomGateway.validateRoomPassword).toHaveBeenCalledWith("pass123");
            expect(mockRoomGateway.createRoom).toHaveBeenCalled();
        }));
        it("debería lanzar error cuando la contraseña ya existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRoom = {
                roomPassword: "existing-pass",
            };
            mockRoomGateway.validateRoomPassword.mockResolvedValue({ roomID: "room1" });
            // Act
            const result = yield roomUCAdapter.createRoom(mockRoom);
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Room con contraseña existing-pass ya existe.");
        }));
    });
    describe("obtainRoomByID", () => {
        it("debería retornar la sala cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRoom = {
                roomID: "room1",
                roomName: "Test Room",
            };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
            // Act
            const result = yield roomUCAdapter.obtainRoomByID("room1");
            // Assert
            expect(result).toEqual(mockRoom);
            expect(mockRoomGateway.obtainRoomByID).toHaveBeenCalledWith("room1");
        }));
        it("debería lanzar error cuando la sala no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockRoomGateway.obtainRoomByID.mockResolvedValue(null);
            // Act
            const result = yield roomUCAdapter.obtainRoomByID("room999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con ID room999 no existe.");
        }));
    });
    describe("obtainRoomsByTeacher", () => {
        it("debería retornar las salas del profesor", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRooms = [
                {
                    roomID: "room1",
                    roomName: "Room 1",
                    roomPassword: "pass1",
                    roomDate: new Date(),
                    roomStatus: "open",
                    roomAnswer: {},
                    usuID: "teacher1",
                    report: [],
                    student: [],
                },
                {
                    roomID: "room2",
                    roomName: "Room 2",
                    roomPassword: "pass2",
                    roomDate: new Date(),
                    roomStatus: "closed",
                    roomAnswer: {},
                    usuID: "teacher1",
                    report: [],
                    student: [],
                },
            ];
            mockRoomGateway.obtainRoomsByTeacher.mockResolvedValue(mockRooms);
            // Act
            const result = yield roomUCAdapter.obtainRoomsByTeacher("teacher1");
            // Assert
            expect(result).toEqual(mockRooms);
            expect(mockRoomGateway.obtainRoomsByTeacher).toHaveBeenCalledWith("teacher1");
        }));
    });
    describe("uptdateRoom", () => {
        it("debería actualizar la sala cuando existe y la contraseña es válida", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const existingRoom = {
                roomID: "room1",
                roomPassword: "pass123",
            };
            const updatedRoom = {
                roomID: "room1",
                roomName: "Updated Room",
                roomPassword: "pass123",
            };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(existingRoom);
            mockRoomGateway.validateRoomPassword.mockResolvedValue(null); // null = contraseña no existe en otra sala
            mockRoomGateway.uptdateRoom.mockResolvedValue(updatedRoom);
            // Act
            const result = yield roomUCAdapter.uptdateRoom("room1", updatedRoom);
            // Assert
            expect(result).toEqual(updatedRoom);
            expect(mockRoomGateway.uptdateRoom).toHaveBeenCalledWith("room1", updatedRoom);
        }));
        it("debería lanzar error cuando la sala no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockRoomGateway.obtainRoomByID.mockResolvedValue(null);
            // Act
            const result = yield roomUCAdapter.uptdateRoom("room999", {});
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con ID room999 no existe.");
        }));
        it("debería lanzar error cuando la contraseña ya existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const existingRoom = { roomID: "room1", roomPassword: "old-pass" };
            const updatedRoom = { roomPassword: "existing-pass" };
            const roomWithExistingPassword = { roomID: "room2", roomPassword: "existing-pass" };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(existingRoom);
            mockRoomGateway.validateRoomPassword.mockResolvedValue(roomWithExistingPassword); // Retorna una sala indicando que la contraseña ya existe
            // Act
            const result = yield roomUCAdapter.uptdateRoom("room1", updatedRoom);
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Room con contraseña existing-pass ya existe.");
        }));
    });
    describe("deleteRoomByID", () => {
        it("debería eliminar la sala cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRoom = { roomID: "room1" };
            mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
            // Act
            yield roomUCAdapter.deleteRoomByID("room1");
            // Assert
            expect(mockRoomGateway.deleteRoomByID).toHaveBeenCalledWith("room1");
        }));
        it("debería lanzar error cuando la sala no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockRoomGateway.obtainRoomByID.mockResolvedValue(null);
            // Act
            yield roomUCAdapter.deleteRoomByID("room999");
            // Assert
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("La sala no existe.");
        }));
    });
    describe("validateRoomPassword", () => {
        it("debería retornar el roomID cuando la contraseña es válida y la sala está abierta", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRoom = {
                roomID: "room1",
                roomPassword: "pass123",
                roomStatus: "open",
            };
            mockRoomGateway.validateRoomPassword.mockResolvedValue(mockRoom);
            // Act
            const result = yield roomUCAdapter.validateRoomPassword("pass123");
            // Assert
            expect(result).toBe("room1");
        }));
        it("debería lanzar error cuando la contraseña no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockRoomGateway.validateRoomPassword.mockResolvedValue(null);
            // Act
            const result = yield roomUCAdapter.validateRoomPassword("wrong-pass");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Room con contraseña wrong-pass no existe.");
        }));
        it("debería lanzar error cuando la sala está cerrada", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRoom = {
                roomID: "room1",
                roomPassword: "pass123",
                roomStatus: "closed",
            };
            mockRoomGateway.validateRoomPassword.mockResolvedValue(mockRoom);
            // Act
            const result = yield roomUCAdapter.validateRoomPassword("pass123");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Room con contraseña pass123 esta cerrado.");
        }));
    });
    describe("changeRoomState", () => {
        it("debería cambiar el estado de la sala cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockRoom = {
                roomID: "room1",
                roomStatus: "closed",
            };
            const updatedRoom = Object.assign(Object.assign({}, mockRoom), { roomStatus: "open" });
            mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
            mockRoomGateway.uptdateRoom.mockResolvedValue(updatedRoom);
            // Act
            const result = yield roomUCAdapter.changeRoomState("room1", "open");
            // Assert
            expect(result).toEqual(updatedRoom);
            expect(mockRoomGateway.uptdateRoom).toHaveBeenCalledWith("room1", expect.objectContaining({
                roomStatus: "open",
            }));
        }));
        it("debería lanzar error cuando la sala no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockRoomGateway.obtainRoomByID.mockResolvedValue(null);
            // Act
            const result = yield roomUCAdapter.changeRoomState("room999", "open");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con ID room999 no existe.");
        }));
    });
});
