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
import { RoomGatewayIntPort } from "../../application/output/RoomGatewayIntPort";
import  * as formsinput from "../../utils/index";
import { AuthIntPort } from "../../application/output/AuthIntPort";


export class StudentUCAdapter implements StudentUCIntPort {
    constructor(
        private roomGateway: RoomGatewayIntPort,
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
        private errorFormatter: ErrorFormatterIntPort,
        private TokenService: AuthIntPort
    ) { }

    async createStudent(student: Student): Promise<Student & { token: string, usuRole: string } | null> {

        const room = await this.roomGateway.obtainRoomByID(student.roomID);

        if (!room) {
            this.errorFormatter.errorNotFound(`Room con id ${student.roomID} no existe.`);
            return null;
        }

        const activosfijos = await this.formsActivosFijosGateway.createForm(new FormActivosFijos( formsinput.ActivosFijosInput ));
        const caratula = await this.formsCaratulaGateway.createForm(new FormCaratula(formsinput.CaratulaInput));
        const detalleRenglones = await this.formsDetalleRenglonesGateway.createForm(new FormDetalleRenglones(formsinput.DetalleRenglonesInput ));
        const esfPatrimonio = await this.formsEsfPatrimonioGateway.createForm(new FormEsfPatrimonio( formsinput.ESFPatrimonioInput ));
        const r110 = await this.formsR110Gateway.createForm(new FormR110( formsinput.Form110Input ));
        const impuestoDiferido = await this.formsImpuestoDiferidoGateway.createForm(new FormImpuestoDiferido( formsinput.ImpuestoDiferidoInput ));
        const ingresosFancturacion = await this.formsIngresosFancturacionGateway.createForm(new FormIngresosFancturacion( formsinput.IngresosFacturacionInput ));
        const rentaLiquida = await this.formsRentaLiquidaGateway.createForm(new FormRentaLiquida( formsinput.RentaLiquidaInput ));
        const resumenEsferi = await this.formsResumenEsferiGateway.createForm(new FormResumenEsferi( formsinput.ResumenESFInput ));

        const studentExists = await this.studentGateway.searchStudentByCedulaRoom(student.stuCedula, student.roomID);

        if (studentExists) {
            this.errorFormatter.genericError(`Estudiante con cedula ${student.stuCedula} ya existe en este room ${room.roomName}.`);
            return null;
        }

        const studentCreated = await this.studentGateway.createStudent(student); 

        this.reportGateway.createReport(new Report(
            "",
            studentCreated.stuID,
            studentCreated.roomID,
            caratula.carID!,
            detalleRenglones.detID!,
            esfPatrimonio.esfID!,
            rentaLiquida.renID!,
            impuestoDiferido.impID!,
            ingresosFancturacion.ingID!,
            activosfijos.actID!,
            resumenEsferi.resID!,
            r110.r110ID!))

        const token = await this.TokenService.createAccessToken({stuID: studentCreated.stuID, roomID: studentCreated.roomID, usuRole: "student"});

        return {
            ...studentCreated,
            token: token,
            usuRole: "student"
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
        this.errorFormatter.errorNotFound(`Estudiante con id ${id} no existe.`);
        return null;
    }

    async updateStudent(id: string, student: Student): Promise<Student | null> {
        const updatedStudent = await this.studentGateway.updateStudent(id, student);
        if (updatedStudent) {
            return updatedStudent;
        }
        this.errorFormatter.errorNotFound(`Estudiante con id ${id} no existe.`);
        return null;
    }

    async deleteStudent(id: string): Promise<void> {
        const student = await this.studentGateway.getStudentById(id);
        if (student) {
            await this.studentGateway.deleteStudent(id);
            return;
        }
        this.errorFormatter.errorNotFound(`Estudiante con id ${id} no existe.`);
    }

    async getStudentByCedulaRoom(cedula: string, roomID: string): Promise<Student & { token: string, usuRole: string } | null> {

        const room = await this.roomGateway.obtainRoomByID(roomID);

        if (!room) {
            this.errorFormatter.errorNotFound(`Room con id ${roomID} no existe.`);
            return null;
        }

        const student = await this.studentGateway.searchStudentByCedulaRoom(cedula, roomID);
        
        if (!student) {
            this.errorFormatter.errorNotFound(`Estudiante con cedula ${cedula} en este room ${room.roomName} no existe.`);
            return null;
        }

        const token = await this.TokenService.createAccessToken({stuID: student.stuID, roomID: student.roomID, usuRole: "student"});
        console.log(token,student);
        return {
            ...student,
            token: token,
            usuRole: "student"
        };
    }

    async searchStudentsByRoom(roomID: string): Promise<Student[]> {
        return this.studentGateway.searchStudentsByRoom(roomID);
    }
}