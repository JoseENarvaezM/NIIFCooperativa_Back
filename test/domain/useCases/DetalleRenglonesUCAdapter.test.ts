import { DetalleRenglonesUCAdapter } from "../../../src/domain/useCases/DetalleRenglonesUCAdapter";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { FormDetalleRenglones } from "../../../src/domain/models/FormDetallerEnglonesModel";

describe("DetalleRenglonesUCAdapter", () => {
  let detalleRenglonesUCAdapter: DetalleRenglonesUCAdapter;
  let mockDetalleRenglonesGateway: jest.Mocked<FormsGatewayIntPort<FormDetalleRenglones>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockDetalleRenglonesGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormDetalleRenglones>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    detalleRenglonesUCAdapter = new DetalleRenglonesUCAdapter(mockDetalleRenglonesGateway, mockErrorFormatter);
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario cuando existe", async () => {
      // Arrange
      const mockForm: FormDetalleRenglones = { detID: "form1" } as FormDetalleRenglones;
      mockDetalleRenglonesGateway.getIDForm.mockResolvedValue(mockForm);

      // Act
      const result = await detalleRenglonesUCAdapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockDetalleRenglonesGateway.getIDForm).toHaveBeenCalledWith("stu1", "room1");
    });

    it("debería lanzar error cuando el formulario no existe", async () => {
      // Arrange
      mockDetalleRenglonesGateway.getIDForm.mockResolvedValue(null);

      // Act
      const result = await detalleRenglonesUCAdapter.getIDForm("stu999", "room999");

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
      const mockForm: FormDetalleRenglones = { detID: "form1" } as FormDetalleRenglones;
      mockDetalleRenglonesGateway.updateForm.mockResolvedValue(mockForm);

      // Act
      const result = await detalleRenglonesUCAdapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockDetalleRenglonesGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
    });
  });
});
