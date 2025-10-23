import { RoomUCAdapter } from "../../../src/domain/useCases/RoomUCAdapter";
import { RoomGatewayIntPort } from "../../../src/application/output/RoomGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { Room } from "../../../src/domain/models/RoomModel";

describe("RoomUCAdapter", () => {
  let roomUCAdapter: RoomUCAdapter;
  let mockRoomGateway: jest.Mocked<RoomGatewayIntPort>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockRoomGateway = {
      createRoom: jest.fn(),
      obtainRoomByID: jest.fn(),
      obtainRoomsByTeacher: jest.fn(),
      uptdateRoom: jest.fn(),
      deleteRoomByID: jest.fn(),
      validateRoomPassword: jest.fn(),
    } as jest.Mocked<RoomGatewayIntPort>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    roomUCAdapter = new RoomUCAdapter(mockRoomGateway, mockErrorFormatter);
  });

  describe("createRoom", () => {
    it("debería crear una sala cuando la contraseña no existe", async () => {
      // Arrange
      const mockRoom: Room = {
        roomID: "room1",
        roomName: "Test Room",
        roomPassword: "pass123",
        roomDate: new Date(),
        roomStatus: "closed",
        roomAnswer: {},
        usuID: "teacher1",
        report: [],
        student: [],
      } as Room;
      mockRoomGateway.validateRoomPassword.mockResolvedValue(null);
      mockRoomGateway.createRoom.mockResolvedValue({
        ...mockRoom,
        roomDate: expect.any(Date),
        roomStatus: "closed",
        roomAnswer: {},
      });

      // Act
      const result = await roomUCAdapter.createRoom(mockRoom);

      // Assert
      expect(result).not.toBeNull();
      expect(mockRoomGateway.validateRoomPassword).toHaveBeenCalledWith("pass123");
      expect(mockRoomGateway.createRoom).toHaveBeenCalled();
    });

    it("debería lanzar error cuando la contraseña ya existe", async () => {
      // Arrange
      const mockRoom: Room = {
        roomPassword: "existing-pass",
      } as Room;
      mockRoomGateway.validateRoomPassword.mockResolvedValue({ roomID: "room1" } as Room);

      // Act
      const result = await roomUCAdapter.createRoom(mockRoom);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.genericError).toHaveBeenCalledWith(
        "Room con contraseña existing-pass ya existe."
      );
    });
  });

  describe("obtainRoomByID", () => {
    it("debería retornar la sala cuando existe", async () => {
      // Arrange
      const mockRoom: Room = {
        roomID: "room1",
        roomName: "Test Room",
      } as Room;
      mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);

      // Act
      const result = await roomUCAdapter.obtainRoomByID("room1");

      // Assert
      expect(result).toEqual(mockRoom);
      expect(mockRoomGateway.obtainRoomByID).toHaveBeenCalledWith("room1");
    });

    it("debería lanzar error cuando la sala no existe", async () => {
      // Arrange
      mockRoomGateway.obtainRoomByID.mockResolvedValue(null);

      // Act
      const result = await roomUCAdapter.obtainRoomByID("room999");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con ID room999 no existe.");
    });
  });

  describe("obtainRoomsByTeacher", () => {
    it("debería retornar las salas del profesor", async () => {
      // Arrange
      const mockRooms: Room[] = [
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
        } as Room,
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
        } as Room,
      ];
      mockRoomGateway.obtainRoomsByTeacher.mockResolvedValue(mockRooms);

      // Act
      const result = await roomUCAdapter.obtainRoomsByTeacher("teacher1");

      // Assert
      expect(result).toEqual(mockRooms);
      expect(mockRoomGateway.obtainRoomsByTeacher).toHaveBeenCalledWith("teacher1");
    });
  });

  describe("uptdateRoom", () => {
    it("debería actualizar la sala cuando existe y la contraseña es válida", async () => {
      // Arrange
      const existingRoom: Room = {
        roomID: "room1",
        roomPassword: "pass123",
      } as Room;
      const updatedRoom: Room = {
        roomID: "room1",
        roomName: "Updated Room",
        roomPassword: "pass123",
      } as Room;
      mockRoomGateway.obtainRoomByID.mockResolvedValue(existingRoom);
      mockRoomGateway.validateRoomPassword.mockResolvedValue(null); // null = contraseña no existe en otra sala
      mockRoomGateway.uptdateRoom.mockResolvedValue(updatedRoom);

      // Act
      const result = await roomUCAdapter.uptdateRoom("room1", updatedRoom);

      // Assert
      expect(result).toEqual(updatedRoom);
      expect(mockRoomGateway.uptdateRoom).toHaveBeenCalledWith("room1", updatedRoom);
    });

    it("debería lanzar error cuando la sala no existe", async () => {
      // Arrange
      mockRoomGateway.obtainRoomByID.mockResolvedValue(null);

      // Act
      const result = await roomUCAdapter.uptdateRoom("room999", {} as Room);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con ID room999 no existe.");
    });

    it("debería lanzar error cuando la contraseña ya existe", async () => {
      // Arrange
      const existingRoom: Room = { roomID: "room1", roomPassword: "old-pass" } as Room;
      const updatedRoom: Room = { roomPassword: "existing-pass" } as Room;
      const roomWithExistingPassword: Room = { roomID: "room2", roomPassword: "existing-pass" } as Room;
      
      mockRoomGateway.obtainRoomByID.mockResolvedValue(existingRoom);
      mockRoomGateway.validateRoomPassword.mockResolvedValue(roomWithExistingPassword); // Retorna una sala indicando que la contraseña ya existe

      // Act
      const result = await roomUCAdapter.uptdateRoom("room1", updatedRoom);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.genericError).toHaveBeenCalledWith(
        "Room con contraseña existing-pass ya existe."
      );
    });
  });

  describe("deleteRoomByID", () => {
    it("debería eliminar la sala cuando existe", async () => {
      // Arrange
      const mockRoom: Room = { roomID: "room1" } as Room;
      mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);

      // Act
      await roomUCAdapter.deleteRoomByID("room1");

      // Assert
      expect(mockRoomGateway.deleteRoomByID).toHaveBeenCalledWith("room1");
    });

    it("debería lanzar error cuando la sala no existe", async () => {
      // Arrange
      mockRoomGateway.obtainRoomByID.mockResolvedValue(null);

      // Act
      await roomUCAdapter.deleteRoomByID("room999");

      // Assert
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("La sala no existe.");
    });
  });

  describe("validateRoomPassword", () => {
    it("debería retornar el roomID cuando la contraseña es válida y la sala está abierta", async () => {
      // Arrange
      const mockRoom: Room = {
        roomID: "room1",
        roomPassword: "pass123",
        roomStatus: "open",
      } as Room;
      mockRoomGateway.validateRoomPassword.mockResolvedValue(mockRoom);

      // Act
      const result = await roomUCAdapter.validateRoomPassword("pass123");

      // Assert
      expect(result).toBe("room1");
    });

    it("debería lanzar error cuando la contraseña no existe", async () => {
      // Arrange
      mockRoomGateway.validateRoomPassword.mockResolvedValue(null);

      // Act
      const result = await roomUCAdapter.validateRoomPassword("wrong-pass");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.genericError).toHaveBeenCalledWith(
        "Room con contraseña wrong-pass no existe."
      );
    });

    it("debería lanzar error cuando la sala está cerrada", async () => {
      // Arrange
      const mockRoom: Room = {
        roomID: "room1",
        roomPassword: "pass123",
        roomStatus: "closed",
      } as Room;
      mockRoomGateway.validateRoomPassword.mockResolvedValue(mockRoom);

      // Act
      const result = await roomUCAdapter.validateRoomPassword("pass123");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.genericError).toHaveBeenCalledWith(
        "Room con contraseña pass123 esta cerrado."
      );
    });
  });

  describe("changeRoomState", () => {
    it("debería cambiar el estado de la sala cuando existe", async () => {
      // Arrange
      const mockRoom: Room = {
        roomID: "room1",
        roomStatus: "closed",
      } as Room;
      const updatedRoom: Room = {
        ...mockRoom,
        roomStatus: "open",
      };
      mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
      mockRoomGateway.uptdateRoom.mockResolvedValue(updatedRoom);

      // Act
      const result = await roomUCAdapter.changeRoomState("room1", "open");

      // Assert
      expect(result).toEqual(updatedRoom);
      expect(mockRoomGateway.uptdateRoom).toHaveBeenCalledWith("room1", expect.objectContaining({
        roomStatus: "open",
      }));
    });

    it("debería lanzar error cuando la sala no existe", async () => {
      // Arrange
      mockRoomGateway.obtainRoomByID.mockResolvedValue(null);

      // Act
      const result = await roomUCAdapter.changeRoomState("room999", "open");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con ID room999 no existe.");
    });
  });
});
