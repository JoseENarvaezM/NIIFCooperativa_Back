export class FormResumenEsferi {
  constructor(
    public resID: string,
    public resContent: any,
    public report: Report[] = []
  ) {}
}