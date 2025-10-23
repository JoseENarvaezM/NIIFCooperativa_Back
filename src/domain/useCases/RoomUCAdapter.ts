import { Room } from "../models/RoomModel"
import { RoomGatewayIntPort } from "../../application/output/RoomGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
import { RoomUCIntPort } from "../../application/input/RoomUCIntPort";


export class RoomUCAdapter implements RoomUCIntPort {
    constructor(
        private roomGateway: RoomGatewayIntPort,
        private errorFormatter: ErrorFormatterIntPort
    ) { }
    async createRoom(room: Room): Promise<Room | null> {
        room.roomDate = new Date();
        room.roomStatus = "closed";
        room.roomAnswer = {}

        const existRoomByPassword = await this.roomGateway.validateRoomPassword(room.roomPassword);
        if (existRoomByPassword) {
            this.errorFormatter.genericError(`Room con contraseña ${room.roomPassword} ya existe.`);
            return null;
        }

        return this.roomGateway.createRoom(room);
    }
    async obtainRoomByID(roomID: string): Promise<Room | null> {
        const room = await this.roomGateway.obtainRoomByID(roomID);
        if (room != null) {
            return room;
        }
        this.errorFormatter.errorNotFound(`Room con ID ${roomID} no existe.`);
        return null;
    }
    async obtainRoomsByTeacher(teaID: string): Promise<Room[]> {
        return this.roomGateway.obtainRoomsByTeacher(teaID);
    }
    async uptdateRoom(roomID: string, room: Room): Promise<Room | null> {

        const existingRoom = await this.roomGateway.obtainRoomByID(roomID);
        if (!existingRoom) {
            this.errorFormatter.errorNotFound(`Room con ID ${roomID} no existe.`);
            return null;
        }

        const existRoomByPassword = await this.roomGateway.validateRoomPassword(room.roomPassword);

        if (existRoomByPassword) {
            this.errorFormatter.genericError(`Room con contraseña ${room.roomPassword} ya existe.`);
            return null;
        }

        return this.roomGateway.uptdateRoom(roomID, room);
    }
    async deleteRoomByID(roomID: string): Promise<void> {
        const room = await this.roomGateway.obtainRoomByID(roomID);

        if (room === null) {
            this.errorFormatter.errorNotFound("La sala no existe.");
            return;
        }

        if (room.roomStatus === "open") {
            this.errorFormatter.genericError("La sala esta abierta, no se puede eliminar.");
            return;
        }

        await this.roomGateway.deleteRoomByID(roomID);
        return;
    }
    async validateRoomPassword(roomPassword: string): Promise<string | null> {
        const result = await this.roomGateway.validateRoomPassword(roomPassword);
        if (!result) {
            this.errorFormatter.genericError(`Room con contraseña ${roomPassword} no existe.`);
            return null;
        }
        if (result.roomStatus === "closed") {
            this.errorFormatter.genericError(`Room con contraseña ${roomPassword} esta cerrado.`);
            return null;
        }
        return result.roomID;
    }
    async changeRoomState(roomID: string, roomState: 'open' | 'closed'): Promise<Room | null> {
        const room = await this.roomGateway.obtainRoomByID(roomID);
        if (room) {
            room.roomStatus = roomState;
            return this.roomGateway.uptdateRoom(roomID, room);
        }
        this.errorFormatter.errorNotFound(`Room con ID ${roomID} no existe.`);
        return null;
    }
}