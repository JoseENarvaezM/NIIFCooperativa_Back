import { RentaLiquidaUCAdapter } from "../../../src/domain/useCases/RentaLiquidaUCAdapter";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { FormRentaLiquida } from "../../../src/domain/models/FormRentaLiquidaModel";

describe("RentaLiquidaUCAdapter", () => {
  let rentaLiquidaUCAdapter: RentaLiquidaUCAdapter;
  let mockRentaLiquidaGateway: jest.Mocked<FormsGatewayIntPort<FormRentaLiquida>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockRentaLiquidaGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormRentaLiquida>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    rentaLiquidaUCAdapter = new RentaLiquidaUCAdapter(mockRentaLiquidaGateway, mockErrorFormatter);
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario calculado cuando existe", async () => {
      // Arrange
      const mockForm: FormRentaLiquida = { renID: "form1" } as FormRentaLiquida;
      const mockCalculatedForm: FormRentaLiquida = { renID: "form1", calculated: true } as any;
      mockRentaLiquidaGateway.getIDForm.mockResolvedValue(mockForm);
      mockRentaLiquidaGateway.calculateReference.mockResolvedValue(mockCalculatedForm);

      // Act
      const result = await rentaLiquidaUCAdapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockCalculatedForm);
      expect(mockRentaLiquidaGateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
    });

    it("debería lanzar error cuando el formulario no existe", async () => {
      // Arrange
      mockRentaLiquidaGateway.getIDForm.mockResolvedValue(null);
      mockRentaLiquidaGateway.calculateReference.mockResolvedValue(null);

      // Act
      const result = await rentaLiquidaUCAdapter.getIDForm("stu999", "room999");

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
      const mockForm: FormRentaLiquida = { renID: "form1" } as FormRentaLiquida;
      mockRentaLiquidaGateway.updateForm.mockResolvedValue(mockForm);

      // Act
      const result = await rentaLiquidaUCAdapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockRentaLiquidaGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
    });
  });
});
