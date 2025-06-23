export class FormCaratulaEntity {
  constructor(
    public carID: string,
    public carContent: any,
    public report: Report[] = []
  ) {}
}