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
        const exists = await this.roomGateway.obtainRoomByID(room.roomID);
        if (exists === null) {
            return this.roomGateway.createRoom(room);
        }
        this.errorFormatter.errorExistsEntity(`Room with ID ${room.roomID} already exists.`);
        return null;
    }
    async obtainRoomByID(roomID: string): Promise<Room | null> {
        const room = await this.roomGateway.obtainRoomByID(roomID);
        if (room != null) {
            return room;
        }
        this.errorFormatter.errorNotFound(`Room with ID ${roomID} does not exist.`);
        return null;
    }
    async obtainRoomsByTeacher(teaID: string): Promise<Room[]> {
        return this.roomGateway.obtainRoomsByTeacher(teaID);
    }
    async obtainRoomsByUser(usuID: string): Promise<Room[]> {
        return this.roomGateway.obtainRoomsByUser(usuID);
    }
    async uptdateRoom(roomID: string, room: Room): Promise<Room | null> {
        const exists = await this.roomGateway.obtainRoomByID(roomID);
        if (exists != null) {
            return this.roomGateway.uptdateRoom(roomID, room);
        }
        this.errorFormatter.errorNotFound(`Room with ID ${roomID} does not exist.`);
        return null;
    }
    async updateRoomName (roomID: string, roomName: string): Promise<Room | null> {
        const room = await this.roomGateway.obtainRoomByID(roomID); 
        if (room != null) {
            room.roomName = roomName;
            return this.roomGateway.uptdateRoom(roomID, room);
        }
        this.errorFormatter.errorNotFound(`Room with ID ${roomID} does not exist.`);
        return null;
    }
    async deleteRoomByID(roomID: string): Promise<void> {
        const room = await this.roomGateway.obtainRoomByID(roomID);
        if (room != null) {
            await this.roomGateway.deleteRoomByID(roomID);
            return;
        }
        this.errorFormatter.errorNotFound(`Room with ID ${roomID} does not exist.`);
    }
    async deleteRoomByDate(roomDate: Date): Promise<void> {
        await this.roomGateway.deleteRoomByDate(roomDate);
    }
    async validateRoomPassword(roomID: string, roomPassword: string): Promise<boolean> {
        const room = await this.roomGateway.obtainRoomByID(roomID);
        if (room != null) {
            return room.roomPassword === roomPassword;
        }
        this.errorFormatter.errorNotFound(`Room with ID ${roomID} does not exist.`);
        return false;
    }
} 