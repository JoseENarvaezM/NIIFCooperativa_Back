import { Room } from "../../domain/models/RoomModel";

export interface RoomGatewayIntPort {
    createRoom(room: Room): Promise<Room | null>;
    obtainRoomByID(roomID: string): Promise<Room | null>;
    obtainRoomsByTeacher(teaID: string): Promise<Room[]>;
    uptdateRoom(roomID: string, room: Room): Promise<Room | null>;
    deleteRoomByID(roomID: string): Promise<void>;
    validateRoomPassword(roomPassword: string): Promise<Pick<Room, "roomID" | "roomStatus"> | null>;
}