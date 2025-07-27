import { Room} from "./RoomModel";

export class User{
  constructor(
    public usuID: string,
    public usuName: string,
    public usuEmail: string,
    public usuPassword: string,
    public usuRole: 'admin' | 'professor',
    public room: Room[] = []
  ) {}
}