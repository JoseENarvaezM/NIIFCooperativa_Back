import { CaratulaUCAdapter } from "../../../src/domain/useCases/CaratulaUCAdapter";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { FormCaratula } from "../../../src/domain/models/FormCaratulaModel";

describe("CaratulaUCAdapter", () => {
  let caratulaUCAdapter: CaratulaUCAdapter;
  let mockCaratulaGateway: jest.Mocked<FormsGatewayIntPort<FormCaratula>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockCaratulaGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormCaratula>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    caratulaUCAdapter = new CaratulaUCAdapter(mockCaratulaGateway, mockErrorFormatter);
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario cuando existe", async () => {
      // Arrange
      const mockForm: FormCaratula = { carID: "form1" } as FormCaratula;
      mockCaratulaGateway.getIDForm.mockResolvedValue(mockForm);

      // Act
      const result = await caratulaUCAdapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockCaratulaGateway.getIDForm).toHaveBeenCalledWith("stu1", "room1");
    });

    it("debería lanzar error cuando el formulario no existe", async () => {
      // Arrange
      mockCaratulaGateway.getIDForm.mockResolvedValue(null);

      // Act
      const result = await caratulaUCAdapter.getIDForm("stu999", "room999");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith(
        "Formulario con stuID stu999 y roomID room999 no se encontró."
      );
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario correctamente", async () => {
      // Arrange
      const mockForm: FormCaratula = { carID: "form1" } as FormCaratula;
      mockCaratulaGateway.updateForm.mockResolvedValue(mockForm);

      // Act
      const result = await caratulaUCAdapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockCaratulaGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
    });
  });
});
