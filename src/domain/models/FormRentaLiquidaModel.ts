export class FormRentaLiquida {
  constructor(
    public renID: string,
    public renContent: any,
    public report: Report[] = []
  ) {}
}