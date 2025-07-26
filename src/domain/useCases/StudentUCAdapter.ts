import { Student } from "../models/StudentModel";
import { StudentGatewayIntPort } from "../../application/output/StudentGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
import { StudentUCIntPort } from "../../application/input/StudentUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ReportGatewayIntPort } from "../../application/output/ReportGatewayIntPort";
import { FormActivosFijos } from "../models/FormActivosFijosModel";
import { FormCaratula } from "../models/FormCaratulaModel";
import { FormDetalleRenglones } from "../models/FormDetallerEnglonesModel";
import { FormEsfPatrimonio } from "../models/FormEsfPatrimonioModel";
import { FormR110 } from "../models/FormR110Model";
import { FormImpuestoDiferido } from "../models/FormImpuestoDiferidoModel";
import { FormIngresosFancturacion } from "../models/FormIngresosFancturacionModel";
import { FormRentaLiquida } from "../models/FormRentaLiquidaModel";
import { FormResumenEsferi } from "../models/FormResumenEsferiModel";
import { Report } from "../models/ReportModel";
import { TokenService } from "./SecurityUtils/TokenService";


export class StudentUCAdapter implements StudentUCIntPort {
    constructor(
        private studentGateway: StudentGatewayIntPort,
        private reportGateway: ReportGatewayIntPort,
        private formsActivosFijosGateway: FormsGatewayIntPort<FormActivosFijos>,
        private formsCaratulaGateway: FormsGatewayIntPort<FormCaratula>,
        private formsDetalleRenglonesGateway: FormsGatewayIntPort<FormDetalleRenglones>,
        private formsEsfPatrimonioGateway: FormsGatewayIntPort<FormEsfPatrimonio>,
        private formsR110Gateway: FormsGatewayIntPort<FormR110>,
        private formsImpuestoDiferidoGateway: FormsGatewayIntPort<FormImpuestoDiferido>,
        private formsIngresosFancturacionGateway: FormsGatewayIntPort<FormIngresosFancturacion>,
        private formsRentaLiquidaGateway: FormsGatewayIntPort<FormRentaLiquida>,
        private formsResumenEsferiGateway: FormsGatewayIntPort<FormResumenEsferi>,
        private errorFormatter: ErrorFormatterIntPort
    ) { }

    async createStudent(student: Student): Promise<Student & { token: string }> {
        const activosfijos = await this.formsActivosFijosGateway.createForm(new FormActivosFijos("", {}));
        const caratula = await this.formsCaratulaGateway.createForm(new FormCaratula("", {}));
        const detalleRenglones = await this.formsDetalleRenglonesGateway.createForm(new FormDetalleRenglones("", {}));
        const esfPatrimonio = await this.formsEsfPatrimonioGateway.createForm(new FormEsfPatrimonio("", {}));
        const r110 = await this.formsR110Gateway.createForm(new FormR110("", {}));
        const impuestoDiferido = await this.formsImpuestoDiferidoGateway.createForm(new FormImpuestoDiferido("", {}));  
        const ingresosFancturacion = await this.formsIngresosFancturacionGateway.createForm(new FormIngresosFancturacion("", {}));
        const rentaLiquida = await this.formsRentaLiquidaGateway.createForm(new FormRentaLiquida("", {}));
        const resumenEsferi = await this.formsResumenEsferiGateway.createForm(new FormResumenEsferi("", {}));

        const studentCrated = await this.studentGateway.createStudent(student); 

        const report = this.reportGateway.createReport(new Report(
            "",
            studentCrated.stuID,
            studentCrated.roomID,
            caratula.carID,
            detalleRenglones.detID,
            esfPatrimonio.esfID,
            rentaLiquida.renID,
            impuestoDiferido.impID,
            ingresosFancturacion.ingID,
            activosfijos.actID,
            resumenEsferi.resID,
            r110.r110ID))

        const token = await TokenService.createAccessToken({stuID: studentCrated.stuID, roomID: studentCrated.roomID, usuRol: "student"});
        return {
            ...studentCrated,
            token: token
        };
    }

    async getStudents(): Promise<Student[]> {
        return this.studentGateway.getStudents();
    }

    async getStudentById(id: string): Promise<Student | null> {
        const student = await this.studentGateway.getStudentById(id);
        if (student) {
            return student;
        }
        this.errorFormatter.errorNotFound(`Student with id ${id} does not exist.`);
        return null;
    }

    async updateStudent(id: string, student: Student): Promise<Student | null> {
        const updatedStudent = await this.studentGateway.updateStudent(id, student);
        if (updatedStudent) {
            return updatedStudent;
        }
        this.errorFormatter.errorNotFound(`Student with id ${id} does not exist.`);
        return null;
    }

    async deleteStudent(id: string): Promise<void> {
        const student = await this.studentGateway.getStudentById(id);
        if (student) {
            await this.studentGateway.deleteStudent(id);
            return;
        }
        this.errorFormatter.errorNotFound(`Student with id ${id} does not exist.`);
    }

    async searchStudentsByCedula(cedula: string): Promise<Student[]> {
        return this.studentGateway.searchStudentsByCedula(cedula);
    }

    async searchStudentsByRoom(roomID: string): Promise<Student[]> {
        return this.studentGateway.searchStudentsByRoom(roomID);
    }
}