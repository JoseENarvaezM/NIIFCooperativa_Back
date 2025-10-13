import { StudentUCAdapter } from "../../../src/domain/useCases/StudentUCAdapter";
import { StudentGatewayIntPort } from "../../../src/application/output/StudentGatewayIntPort";
import { RoomGatewayIntPort } from "../../../src/application/output/RoomGatewayIntPort";
import { ReportGatewayIntPort } from "../../../src/application/output/ReportGatewayIntPort";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { AuthIntPort } from "../../../src/application/output/AuthIntPort";
import { Student } from "../../../src/domain/models/StudentModel";
import { Room } from "../../../src/domain/models/RoomModel";
import { FormActivosFijos } from "../../../src/domain/models/FormActivosFijosModel";
import { FormCaratula } from "../../../src/domain/models/FormCaratulaModel";
import { FormDetalleRenglones } from "../../../src/domain/models/FormDetallerEnglonesModel";
import { FormEsfPatrimonio } from "../../../src/domain/models/FormEsfPatrimonioModel";
import { FormR110 } from "../../../src/domain/models/FormR110Model";
import { FormImpuestoDiferido } from "../../../src/domain/models/FormImpuestoDiferidoModel";
import { FormIngresosFancturacion } from "../../../src/domain/models/FormIngresosFancturacionModel";
import { FormRentaLiquida } from "../../../src/domain/models/FormRentaLiquidaModel";
import { FormResumenEsferi } from "../../../src/domain/models/FormResumenEsferiModel";

describe("StudentUCAdapter", () => {
  let studentUCAdapter: StudentUCAdapter;
  let mockRoomGateway: jest.Mocked<RoomGatewayIntPort>;
  let mockStudentGateway: jest.Mocked<StudentGatewayIntPort>;
  let mockReportGateway: jest.Mocked<ReportGatewayIntPort>;
  let mockFormsActivosFijosGateway: jest.Mocked<FormsGatewayIntPort<FormActivosFijos>>;
  let mockFormsCaratulaGateway: jest.Mocked<FormsGatewayIntPort<FormCaratula>>;
  let mockFormsDetalleRenglonesGateway: jest.Mocked<FormsGatewayIntPort<FormDetalleRenglones>>;
  let mockFormsEsfPatrimonioGateway: jest.Mocked<FormsGatewayIntPort<FormEsfPatrimonio>>;
  let mockFormsR110Gateway: jest.Mocked<FormsGatewayIntPort<FormR110>>;
  let mockFormsImpuestoDiferidoGateway: jest.Mocked<FormsGatewayIntPort<FormImpuestoDiferido>>;
  let mockFormsIngresosFancturacionGateway: jest.Mocked<FormsGatewayIntPort<FormIngresosFancturacion>>;
  let mockFormsRentaLiquidaGateway: jest.Mocked<FormsGatewayIntPort<FormRentaLiquida>>;
  let mockFormsResumenEsferiGateway: jest.Mocked<FormsGatewayIntPort<FormResumenEsferi>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;
  let mockTokenService: jest.Mocked<AuthIntPort>;

  beforeEach(() => {
    mockRoomGateway = {
      obtainRoomByID: jest.fn(),
      createRoom: jest.fn(),
      obtainRoomsByTeacher: jest.fn(),
      uptdateRoom: jest.fn(),
      deleteRoomByID: jest.fn(),
      validateRoomPassword: jest.fn(),
    } as jest.Mocked<RoomGatewayIntPort>;

    mockStudentGateway = {
      createStudent: jest.fn(),
      getStudents: jest.fn(),
      getStudentById: jest.fn(),
      updateStudent: jest.fn(),
      deleteStudent: jest.fn(),
      searchStudentByCedulaRoom: jest.fn(),
      searchStudentsByRoom: jest.fn(),
    } as jest.Mocked<StudentGatewayIntPort>;

    mockReportGateway = {
      createReport: jest.fn(),
    } as any;

    mockFormsActivosFijosGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormActivosFijos>>;

    mockFormsCaratulaGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormCaratula>>;

    mockFormsDetalleRenglonesGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormDetalleRenglones>>;

    mockFormsEsfPatrimonioGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormEsfPatrimonio>>;

    mockFormsR110Gateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormR110>>;

    mockFormsImpuestoDiferidoGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormImpuestoDiferido>>;

    mockFormsIngresosFancturacionGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormIngresosFancturacion>>;

    mockFormsRentaLiquidaGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormRentaLiquida>>;

    mockFormsResumenEsferiGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormResumenEsferi>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    mockTokenService = {
      createAccessToken: jest.fn(),
      verifyAccessToken: jest.fn(),
    } as jest.Mocked<AuthIntPort>;

    studentUCAdapter = new StudentUCAdapter(
      mockRoomGateway,
      mockStudentGateway,
      mockReportGateway,
      mockFormsActivosFijosGateway,
      mockFormsCaratulaGateway,
      mockFormsDetalleRenglonesGateway,
      mockFormsEsfPatrimonioGateway,
      mockFormsR110Gateway,
      mockFormsImpuestoDiferidoGateway,
      mockFormsIngresosFancturacionGateway,
      mockFormsRentaLiquidaGateway,
      mockFormsResumenEsferiGateway,
      mockErrorFormatter,
      mockTokenService
    );
  });

  describe("createStudent", () => {
    it("debería crear un estudiante con todos los formularios y retornar token", async () => {
      // Arrange
      const mockStudent: Student = {
        stuID: "",
        stuCedula: "12345678",
        roomID: "room1",
        report: [],
      };
      const mockRoom: Room = {
        roomID: "room1",
        roomName: "Test Room",
      } as Room;
      const mockCreatedStudent: Student = {
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
      mockFormsActivosFijosGateway.createForm.mockResolvedValue({ actID: "act1" } as FormActivosFijos);
      mockFormsCaratulaGateway.createForm.mockResolvedValue({ carID: "car1" } as FormCaratula);
      mockFormsDetalleRenglonesGateway.createForm.mockResolvedValue({ detID: "det1" } as FormDetalleRenglones);
      mockFormsEsfPatrimonioGateway.createForm.mockResolvedValue({ esfID: "esf1" } as FormEsfPatrimonio);
      mockFormsR110Gateway.createForm.mockResolvedValue({ r110ID: "r1101" } as FormR110);
      mockFormsImpuestoDiferidoGateway.createForm.mockResolvedValue({ impID: "imp1" } as FormImpuestoDiferido);
      mockFormsIngresosFancturacionGateway.createForm.mockResolvedValue({ ingID: "ing1" } as FormIngresosFancturacion);
      mockFormsRentaLiquidaGateway.createForm.mockResolvedValue({ renID: "ren1" } as FormRentaLiquida);
      mockFormsResumenEsferiGateway.createForm.mockResolvedValue({ resID: "res1" } as FormResumenEsferi);

      // Act
      const result = await studentUCAdapter.createStudent(mockStudent);

      // Assert
      expect(result).not.toBeNull();
      expect(result?.token).toBe("test-token");
      expect(result?.usuRole).toBe("student");
      expect(mockReportGateway.createReport).toHaveBeenCalled();
      expect(mockStudentGateway.createStudent).toHaveBeenCalledWith(mockStudent);
    });

    it("debería lanzar error cuando el room no existe", async () => {
      // Arrange
      const mockStudent: Student = {
        stuID: "",
        stuCedula: "12345678",
        roomID: "room999",
        report: [],
      };
      mockRoomGateway.obtainRoomByID.mockResolvedValue(null);

      // Act
      const result = await studentUCAdapter.createStudent(mockStudent);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con id room999 no existe.");
    });

    it("debería lanzar error cuando el estudiante ya existe en el room", async () => {
      // Arrange
      const mockStudent: Student = {
        stuID: "",
        stuCedula: "12345678",
        roomID: "room1",
        report: [],
      };
      const mockRoom: Room = {
        roomID: "room1",
        roomName: "Test Room",
      } as Room;
      mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
      mockStudentGateway.searchStudentByCedulaRoom.mockResolvedValue(mockStudent);

      // Mock form creations
      mockFormsActivosFijosGateway.createForm.mockResolvedValue({ actID: "act1" } as FormActivosFijos);
      mockFormsCaratulaGateway.createForm.mockResolvedValue({ carID: "car1" } as FormCaratula);
      mockFormsDetalleRenglonesGateway.createForm.mockResolvedValue({ detID: "det1" } as FormDetalleRenglones);
      mockFormsEsfPatrimonioGateway.createForm.mockResolvedValue({ esfID: "esf1" } as FormEsfPatrimonio);
      mockFormsR110Gateway.createForm.mockResolvedValue({ r110ID: "r1101" } as FormR110);
      mockFormsImpuestoDiferidoGateway.createForm.mockResolvedValue({ impID: "imp1" } as FormImpuestoDiferido);
      mockFormsIngresosFancturacionGateway.createForm.mockResolvedValue({ ingID: "ing1" } as FormIngresosFancturacion);
      mockFormsRentaLiquidaGateway.createForm.mockResolvedValue({ renID: "ren1" } as FormRentaLiquida);
      mockFormsResumenEsferiGateway.createForm.mockResolvedValue({ resID: "res1" } as FormResumenEsferi);

      // Act
      const result = await studentUCAdapter.createStudent(mockStudent);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.genericError).toHaveBeenCalledWith(
        "Estudiante con cedula 12345678 ya existe en este room Test Room."
      );
    });
  });

  describe("getStudents", () => {
    it("debería retornar todos los estudiantes", async () => {
      // Arrange
      const mockStudents: Student[] = [
        { stuID: "stu1", stuCedula: "123", roomID: "room1", report: [] },
        { stuID: "stu2", stuCedula: "456", roomID: "room1", report: [] },
      ];
      mockStudentGateway.getStudents.mockResolvedValue(mockStudents);

      // Act
      const result = await studentUCAdapter.getStudents();

      // Assert
      expect(result).toEqual(mockStudents);
      expect(mockStudentGateway.getStudents).toHaveBeenCalled();
    });
  });

  describe("getStudentById", () => {
    it("debería retornar el estudiante cuando existe", async () => {
      // Arrange
      const mockStudent: Student = {
        stuID: "stu1",
        stuCedula: "12345678",
        roomID: "room1",
        report: [],
      };
      mockStudentGateway.getStudentById.mockResolvedValue(mockStudent);

      // Act
      const result = await studentUCAdapter.getStudentById("stu1");

      // Assert
      expect(result).toEqual(mockStudent);
      expect(mockStudentGateway.getStudentById).toHaveBeenCalledWith("stu1");
    });

    it("debería lanzar error cuando el estudiante no existe", async () => {
      // Arrange
      mockStudentGateway.getStudentById.mockResolvedValue(null);

      // Act
      const result = await studentUCAdapter.getStudentById("stu999");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Estudiante con id stu999 no existe.");
    });
  });

  describe("updateStudent", () => {
    it("debería actualizar el estudiante cuando existe", async () => {
      // Arrange
      const mockStudent: Student = {
        stuID: "stu1",
        stuCedula: "12345678",
        roomID: "room1",
        report: [],
      };
      mockStudentGateway.updateStudent.mockResolvedValue(mockStudent);

      // Act
      const result = await studentUCAdapter.updateStudent("stu1", mockStudent);

      // Assert
      expect(result).toEqual(mockStudent);
      expect(mockStudentGateway.updateStudent).toHaveBeenCalledWith("stu1", mockStudent);
    });

    it("debería lanzar error cuando el estudiante no existe", async () => {
      // Arrange
      mockStudentGateway.updateStudent.mockResolvedValue(null);

      // Act
      const result = await studentUCAdapter.updateStudent("stu999", {} as Student);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Estudiante con id stu999 no existe.");
    });
  });

  describe("deleteStudent", () => {
    it("debería eliminar el estudiante cuando existe", async () => {
      // Arrange
      const mockStudent: Student = {
        stuID: "stu1",
        stuCedula: "12345678",
        roomID: "room1",
        report: [],
      };
      mockStudentGateway.getStudentById.mockResolvedValue(mockStudent);

      // Act
      await studentUCAdapter.deleteStudent("stu1");

      // Assert
      expect(mockStudentGateway.deleteStudent).toHaveBeenCalledWith("stu1");
    });

    it("debería lanzar error cuando el estudiante no existe", async () => {
      // Arrange
      mockStudentGateway.getStudentById.mockResolvedValue(null);

      // Act
      await studentUCAdapter.deleteStudent("stu999");

      // Assert
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Estudiante con id stu999 no existe.");
    });
  });

  describe("getStudentByCedulaRoom", () => {
    it("debería retornar el estudiante con token cuando existe", async () => {
      // Arrange
      const mockStudent: Student = {
        stuID: "stu1",
        stuCedula: "12345678",
        roomID: "room1",
        report: [],
      };
      const mockRoom: Room = {
        roomID: "room1",
        roomName: "Test Room",
      } as Room;
      mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
      mockStudentGateway.searchStudentByCedulaRoom.mockResolvedValue(mockStudent);
      mockTokenService.createAccessToken.mockResolvedValue("test-token");

      // Act
      const result = await studentUCAdapter.getStudentByCedulaRoom("12345678", "room1");

      // Assert
      expect(result).not.toBeNull();
      expect(result?.token).toBe("test-token");
      expect(result?.usuRole).toBe("student");
      expect(mockStudentGateway.searchStudentByCedulaRoom).toHaveBeenCalledWith("12345678", "room1");
    });

    it("debería lanzar error cuando el room no existe", async () => {
      // Arrange
      mockRoomGateway.obtainRoomByID.mockResolvedValue(null);

      // Act
      const result = await studentUCAdapter.getStudentByCedulaRoom("12345678", "room999");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Room con id room999 no existe.");
    });

    it("debería lanzar error cuando el estudiante no existe en el room", async () => {
      // Arrange
      const mockRoom: Room = {
        roomID: "room1",
        roomName: "Test Room",
      } as Room;
      mockRoomGateway.obtainRoomByID.mockResolvedValue(mockRoom);
      mockStudentGateway.searchStudentByCedulaRoom.mockResolvedValue(null);

      // Act
      const result = await studentUCAdapter.getStudentByCedulaRoom("99999999", "room1");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith(
        "Estudiante con cedula 99999999 en este room Test Room no existe."
      );
    });
  });

  describe("searchStudentsByRoom", () => {
    it("debería retornar los estudiantes del room", async () => {
      // Arrange
      const mockStudents: Student[] = [
        { stuID: "stu1", stuCedula: "123", roomID: "room1", report: [] },
        { stuID: "stu2", stuCedula: "456", roomID: "room1", report: [] },
      ];
      mockStudentGateway.searchStudentsByRoom.mockResolvedValue(mockStudents);

      // Act
      const result = await studentUCAdapter.searchStudentsByRoom("room1");

      // Assert
      expect(result).toEqual(mockStudents);
      expect(mockStudentGateway.searchStudentsByRoom).toHaveBeenCalledWith("room1");
    });
  });
});
