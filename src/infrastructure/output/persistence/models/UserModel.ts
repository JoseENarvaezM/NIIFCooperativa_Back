import { RoomEntity } from "./RoomModel";

export class UserEntity {
  constructor(
    public usuID: string,
    public usuName: string,
    public usuEmail: string,
    public usuPassword: string,
    public usuRole: 'admin' | 'profesor',
    public room: RoomEntity[] = []
  ) {}
}