import { RoomEntity } from "./RoomModel";

export class StudentEntity {
  constructor(
    public stuID: string,
    public stuCedula: string,
    public roomID: string,
    public room?: RoomEntity,
    public report: Report[] = []
  ) {}
}