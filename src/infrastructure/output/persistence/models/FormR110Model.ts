export class FormR110Entity {
  constructor(
    public r110ID: string,
    public r110Content: any,
    public report: Report[] = []
  ) {}
}