export class FormCaratula {
  constructor(
    public carID: string,
    public carContent: any,
    public report: Report[] = []
  ) {}
}