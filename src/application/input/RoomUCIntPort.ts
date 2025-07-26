import { Room } from "../../domain/models/RoomModel";

export interface RoomUCIntPort {
    createRoom(room: Room): Promise<Room | null>;
    obtainRoomByID(roomID: string): Promise<Room | null>;
    obtainRoomsByTeacher(teaID: string): Promise<Room[]>;
    obtainRoomsByUser(usuID: string): Promise<Room[]>;
    uptdateRoom(roomID: string, room: Room): Promise<Room | null>;
    updateRoomName(roomID: string, roomName: string): Promise<Room | null>;
    deleteRoomByID(roomID: string): Promise<void>;
    validateRoomPassword(roomPassword: string): Promise<string | null>;
    changeRoomState(roomID: string, roomState: 'open' | 'closed'): Promise<Room | null>;
}