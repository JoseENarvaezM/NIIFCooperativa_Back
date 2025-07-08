import { Room } from "../../domain/models/RoomModel";

export interface RoomUCIntPort {
    createRoom(room: Room): Promise<Room | null>;
    obtainRoomByID(roomID: string): Promise<Room | null>;
    obtainRoomsByTeacher(teaID: string): Promise<Room[]>;
    obtainRoomsByUser(usuID: string): Promise<Room[]>;
    uptdateRoom(roomID: string, room: Room): Promise<Room | null>;
    updateRoomName(roomID: string, roomName: string): Promise<Room | null>;
    deleteRoomByID(roomID: string): Promise<void>;
    deleteRoomByDate(roomDate: Date): Promise<void>;
    validateRoomPassword(roomID: string, roomPassword: string): Promise<boolean>;
}