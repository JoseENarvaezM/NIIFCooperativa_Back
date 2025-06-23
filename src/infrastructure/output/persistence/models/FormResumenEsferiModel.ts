export class FormResumenEsferiEntity {
  constructor(
    public resID: string,
    public resContent: any,
    public report: Report[] = []
  ) {}
}