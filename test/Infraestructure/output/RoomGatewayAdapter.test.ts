import { RoomGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/RoomGatewayAdapter";
import { Room } from "../../../src/domain/models/RoomModel";
import prisma from "../../../src/config/database";

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
    let roomGatewayAdapter: RoomGatewayAdapter;
    let mockPrismaRoom: any;

    beforeEach(() => {
        roomGatewayAdapter = new RoomGatewayAdapter();
        mockPrismaRoom = prisma.room;
        jest.clearAllMocks();
    });

    describe("createRoom", () => {
        it("debería crear una sala exitosamente con datos válidos (caso normal)", async () => {
            // Arrange
            const newRoom = new Room(
                "room-123",
                "Sala de Contabilidad",
                "pass123",
                new Date("2025-10-15"),
                "open",
                null,
                "teacher-456"
            );
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
            const result = await roomGatewayAdapter.createRoom(newRoom);

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
            expect(result).toBeInstanceOf(Room);
            expect(result?.roomID).toBe("room-123");
            expect(result?.roomName).toBe("Sala de Contabilidad");
            expect(result?.roomStatus).toBe("open");
        });

        it("debería crear una sala con estado cerrado (caso normal)", async () => {
            // Arrange
            const newRoom = new Room(
                "room-456",
                "Sala Cerrada",
                "pass456",
                new Date("2025-10-20"),
                "closed",
                null,
                "teacher-789"
            );
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
            const result = await roomGatewayAdapter.createRoom(newRoom);

            // Assert
            expect(result?.roomStatus).toBe("closed");
        });

        it("debería manejar una sala con nombre vacío (caso límite)", async () => {
            // Arrange
            const newRoom = new Room(
                "room-empty",
                "",
                "password",
                new Date(),
                "open",
                null,
                "teacher-123"
            );
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
            const result = await roomGatewayAdapter.createRoom(newRoom);

            // Assert
            expect(result?.roomName).toBe("");
        });

        it("debería manejar una sala con nombre muy largo (caso límite)", async () => {
            // Arrange
            const longName = "A".repeat(500);
            const newRoom = new Room(
                "room-long",
                longName,
                "password",
                new Date(),
                "open",
                null,
                "teacher-123"
            );
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
            const result = await roomGatewayAdapter.createRoom(newRoom);

            // Assert
            expect(result?.roomName).toBe(longName);
        });
    });

    describe("obtainRoomByID", () => {
        it("debería retornar una sala cuando se proporciona un ID válido (caso normal)", async () => {
            // Arrange
            const roomID = "room-abc123";
            const mockRoomData = {
                roomID: roomID,
                roomName: "Sala de Finanzas",
                roomPassword: "finanzas2025",
                roomDate: new Date("2025-11-01"),
                roomStatus: "open" as const,
                roomAnswer: null,
                usuID: "teacher-xyz",
            };
            mockPrismaRoom.findUnique.mockResolvedValue(mockRoomData);

            // Act
            const result = await roomGatewayAdapter.obtainRoomByID(roomID);

            // Assert
            expect(mockPrismaRoom.findUnique).toHaveBeenCalledWith({
                where: { roomID },
            });
            expect(result).toBeInstanceOf(Room);
            expect(result?.roomID).toBe(roomID);
            expect(result?.roomName).toBe("Sala de Finanzas");
            expect(result?.roomStatus).toBe("open");
        });

        it("debería retornar null cuando la sala no existe (caso límite)", async () => {
            // Arrange
            const nonExistentID = "non-existent-room";
            mockPrismaRoom.findUnique.mockResolvedValue(null);

            // Act
            const result = await roomGatewayAdapter.obtainRoomByID(nonExistentID);

            // Assert
            expect(mockPrismaRoom.findUnique).toHaveBeenCalledWith({
                where: { roomID: nonExistentID },
            });
            expect(result).toBeNull();
        });

        it("debería manejar un ID vacío (caso límite)", async () => {
            // Arrange
            const emptyID = "";
            mockPrismaRoom.findUnique.mockResolvedValue(null);

            // Act
            const result = await roomGatewayAdapter.obtainRoomByID(emptyID);

            // Assert
            expect(mockPrismaRoom.findUnique).toHaveBeenCalledWith({
                where: { roomID: emptyID },
            });
            expect(result).toBeNull();
        });

        it("debería manejar un ID muy largo (caso límite)", async () => {
            // Arrange
            const longID = "a".repeat(1000);
            mockPrismaRoom.findUnique.mockResolvedValue(null);

            // Act
            const result = await roomGatewayAdapter.obtainRoomByID(longID);

            // Assert
            expect(result).toBeNull();
        });
    });

    describe("obtainRoomsByTeacher", () => {
        it("debería retornar una lista de salas de un profesor (caso normal)", async () => {
            // Arrange
            const teacherID = "teacher-123";
            const mockRooms = [
                {
                    roomID: "room-1",
                    roomName: "Sala 1",
                    roomPassword: "pass1",
                    roomDate: new Date("2025-10-10"),
                    roomStatus: "open" as const,
                    roomAnswer: null,
                    usuID: teacherID,
                },
                {
                    roomID: "room-2",
                    roomName: "Sala 2",
                    roomPassword: "pass2",
                    roomDate: new Date("2025-10-11"),
                    roomStatus: "closed" as const,
                    roomAnswer: null,
                    usuID: teacherID,
                },
                {
                    roomID: "room-3",
                    roomName: "Sala 3",
                    roomPassword: "pass3",
                    roomDate: new Date("2025-10-12"),
                    roomStatus: "open" as const,
                    roomAnswer: null,
                    usuID: teacherID,
                },
            ];
            mockPrismaRoom.findMany.mockResolvedValue(mockRooms);

            // Act
            const result = await roomGatewayAdapter.obtainRoomsByTeacher(teacherID);

            // Assert
            expect(mockPrismaRoom.findMany).toHaveBeenCalledWith({
                where: { usuID: teacherID },
            });
            expect(result).toHaveLength(3);
            expect(result[0]).toBeInstanceOf(Room);
            expect(result[0].roomName).toBe("Sala 1");
            expect(result[1].roomName).toBe("Sala 2");
            expect(result[2].roomName).toBe("Sala 3");
        });

        it("debería retornar un array vacío cuando el profesor no tiene salas (caso límite)", async () => {
            // Arrange
            const teacherID = "teacher-no-rooms";
            mockPrismaRoom.findMany.mockResolvedValue([]);

            // Act
            const result = await roomGatewayAdapter.obtainRoomsByTeacher(teacherID);

            // Assert
            expect(mockPrismaRoom.findMany).toHaveBeenCalledWith({
                where: { usuID: teacherID },
            });
            expect(result).toEqual([]);
            expect(result).toHaveLength(0);
        });

        it("debería retornar una única sala cuando el profesor tiene solo una (caso límite)", async () => {
            // Arrange
            const teacherID = "teacher-one-room";
            const mockRooms = [
                {
                    roomID: "room-only",
                    roomName: "Única Sala",
                    roomPassword: "pass",
                    roomDate: new Date("2025-10-15"),
                    roomStatus: "open" as const,
                    roomAnswer: null,
                    usuID: teacherID,
                },
            ];
            mockPrismaRoom.findMany.mockResolvedValue(mockRooms);

            // Act
            const result = await roomGatewayAdapter.obtainRoomsByTeacher(teacherID);

            // Assert
            expect(result).toHaveLength(1);
            expect(result[0].roomName).toBe("Única Sala");
        });

        it("debería manejar un gran número de salas (caso límite)", async () => {
            // Arrange
            const teacherID = "teacher-many-rooms";
            const manyRooms = Array.from({ length: 500 }, (_, i) => ({
                roomID: `room-${i}`,
                roomName: `Sala ${i}`,
                roomPassword: `pass${i}`,
                roomDate: new Date("2025-10-15"),
                roomStatus: "open" as const,
                roomAnswer: null,
                usuID: teacherID,
            }));
            mockPrismaRoom.findMany.mockResolvedValue(manyRooms);

            // Act
            const result = await roomGatewayAdapter.obtainRoomsByTeacher(teacherID);

            // Assert
            expect(result).toHaveLength(500);
            expect(result[0]).toBeInstanceOf(Room);
            expect(result[499].roomName).toBe("Sala 499");
        });
    });

    describe("uptdateRoom", () => {
        it("debería actualizar una sala exitosamente con datos válidos (caso normal)", async () => {
            // Arrange
            const roomID = "room-update-123";
            const updatedRoom = new Room(
                roomID,
                "Sala Actualizada",
                "newPass123",
                new Date("2025-12-01"),
                "closed",
                null,
                "teacher-456"
            );
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
            const result = await roomGatewayAdapter.uptdateRoom(roomID, updatedRoom);

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
            expect(result).toBeInstanceOf(Room);
            expect(result?.roomID).toBe(roomID);
            expect(result?.roomName).toBe("Sala Actualizada");
            expect(result?.roomStatus).toBe("closed");
        });

        it("debería cambiar el estado de la sala de abierta a cerrada (caso normal)", async () => {
            // Arrange
            const roomID = "room-status-change";
            const updatedRoom = new Room(
                roomID,
                "Sala Cambio Estado",
                "password",
                new Date(),
                "closed",
                null,
                "teacher-123"
            );
            const mockUpdatedRoom = {
                roomID: roomID,
                roomName: updatedRoom.roomName,
                roomPassword: updatedRoom.roomPassword,
                roomDate: updatedRoom.roomDate,
                roomStatus: "closed" as const,
                roomAnswer: null,
                usuID: updatedRoom.usuID,
            };
            mockPrismaRoom.update.mockResolvedValue(mockUpdatedRoom);

            // Act
            const result = await roomGatewayAdapter.uptdateRoom(roomID, updatedRoom);

            // Assert
            expect(result?.roomStatus).toBe("closed");
        });

        it("debería manejar actualización con campos vacíos (caso límite)", async () => {
            // Arrange
            const roomID = "room-empty-fields";
            const updatedRoom = new Room(
                roomID,
                "",
                "",
                new Date(),
                "open",
                null,
                "teacher-123"
            );
            const mockUpdatedRoom = {
                roomID: roomID,
                roomName: "",
                roomPassword: "",
                roomDate: updatedRoom.roomDate,
                roomStatus: "open" as const,
                roomAnswer: null,
                usuID: "teacher-123",
            };
            mockPrismaRoom.update.mockResolvedValue(mockUpdatedRoom);

            // Act
            const result = await roomGatewayAdapter.uptdateRoom(roomID, updatedRoom);

            // Assert
            expect(result?.roomName).toBe("");
            expect(result?.roomPassword).toBe("");
        });

        it("debería manejar errores de base de datos durante la actualización (caso límite)", async () => {
            // Arrange
            const roomID = "room-error";
            const updatedRoom = new Room(
                roomID,
                "Error Room",
                "password",
                new Date(),
                "open",
                null,
                "teacher-123"
            );
            mockPrismaRoom.update.mockRejectedValue(new Error("Update failed"));

            // Act & Assert
            await expect(
                roomGatewayAdapter.uptdateRoom(roomID, updatedRoom)
            ).rejects.toThrow("Update failed");
        });
    });

    describe("deleteRoomByID", () => {
        it("debería eliminar una sala exitosamente cuando existe (caso normal)", async () => {
            // Arrange
            const roomID = "room-to-delete";
            mockPrismaRoom.delete.mockResolvedValue({ roomID });

            // Act
            await roomGatewayAdapter.deleteRoomByID(roomID);

            // Assert
            expect(mockPrismaRoom.delete).toHaveBeenCalledWith({
                where: { roomID },
            });
        });

        it("debería intentar eliminar con ID vacío (caso límite)", async () => {
            // Arrange
            const emptyID = "";
            mockPrismaRoom.delete.mockResolvedValue(null);

            // Act
            await roomGatewayAdapter.deleteRoomByID(emptyID);

            // Assert
            expect(mockPrismaRoom.delete).toHaveBeenCalledWith({
                where: { roomID: emptyID },
            });
        });

        it("debería manejar errores de base de datos al eliminar (caso límite)", async () => {
            // Arrange
            const roomID = "room-delete-error";
            mockPrismaRoom.delete.mockRejectedValue(new Error("Delete failed"));

            // Act & Assert
            await expect(
                roomGatewayAdapter.deleteRoomByID(roomID)
            ).rejects.toThrow("Delete failed");
        });

        it("debería manejar eliminación de sala inexistente (caso límite)", async () => {
            // Arrange
            const nonExistentID = "non-existent-room";
            mockPrismaRoom.delete.mockRejectedValue(
                new Error("Record to delete does not exist")
            );

            // Act & Assert
            await expect(
                roomGatewayAdapter.deleteRoomByID(nonExistentID)
            ).rejects.toThrow("Record to delete does not exist");
        });
    });

    describe("validateRoomPassword", () => {
        it("debería retornar datos de la sala cuando la contraseña es correcta (caso normal)", async () => {
            // Arrange
            const password = "correctPassword123";
            const mockRoom = {
                roomID: "room-valid-pass",
                roomName: "Sala Validada",
                roomPassword: password,
                roomDate: new Date(),
                roomStatus: "open" as const,
                roomAnswer: null,
                usuID: "teacher-123",
            };
            mockPrismaRoom.findFirst.mockResolvedValue(mockRoom);

            // Act
            const result = await roomGatewayAdapter.validateRoomPassword(password);

            // Assert
            expect(mockPrismaRoom.findFirst).toHaveBeenCalledWith({
                where: { roomPassword: password },
            });
            expect(result).not.toBeNull();
            expect(result?.roomID).toBe("room-valid-pass");
            expect(result?.roomStatus).toBe("open");
        });

        it("debería retornar datos de sala cerrada con contraseña válida (caso normal)", async () => {
            // Arrange
            const password = "closedRoomPass";
            const mockRoom = {
                roomID: "room-closed",
                roomName: "Sala Cerrada",
                roomPassword: password,
                roomDate: new Date(),
                roomStatus: "closed" as const,
                roomAnswer: null,
                usuID: "teacher-456",
            };
            mockPrismaRoom.findFirst.mockResolvedValue(mockRoom);

            // Act
            const result = await roomGatewayAdapter.validateRoomPassword(password);

            // Assert
            expect(result?.roomStatus).toBe("closed");
        });

        it("debería retornar null cuando la contraseña es incorrecta (caso límite)", async () => {
            // Arrange
            const incorrectPassword = "wrongPassword";
            mockPrismaRoom.findFirst.mockResolvedValue(null);

            // Act
            const result = await roomGatewayAdapter.validateRoomPassword(incorrectPassword);

            // Assert
            expect(mockPrismaRoom.findFirst).toHaveBeenCalledWith({
                where: { roomPassword: incorrectPassword },
            });
            expect(result).toBeNull();
        });

        it("debería manejar contraseña vacía (caso límite)", async () => {
            // Arrange
            const emptyPassword = "";
            mockPrismaRoom.findFirst.mockResolvedValue(null);

            // Act
            const result = await roomGatewayAdapter.validateRoomPassword(emptyPassword);

            // Assert
            expect(mockPrismaRoom.findFirst).toHaveBeenCalledWith({
                where: { roomPassword: emptyPassword },
            });
            expect(result).toBeNull();
        });

        it("debería manejar contraseña muy larga (caso límite)", async () => {
            // Arrange
            const longPassword = "a".repeat(1000);
            mockPrismaRoom.findFirst.mockResolvedValue(null);

            // Act
            const result = await roomGatewayAdapter.validateRoomPassword(longPassword);

            // Assert
            expect(result).toBeNull();
        });

        it("debería retornar solo roomID y roomStatus, no toda la sala (caso normal)", async () => {
            // Arrange
            const password = "testPass123";
            const mockRoom = {
                roomID: "room-partial",
                roomName: "Sala Parcial",
                roomPassword: password,
                roomDate: new Date(),
                roomStatus: "open" as const,
                roomAnswer: null,
                usuID: "teacher-789",
            };
            mockPrismaRoom.findFirst.mockResolvedValue(mockRoom);

            // Act
            const result = await roomGatewayAdapter.validateRoomPassword(password);

            // Assert
            expect(result).toHaveProperty("roomID");
            expect(result).toHaveProperty("roomStatus");
            expect(Object.keys(result!)).toHaveLength(2);
        });
    });
});