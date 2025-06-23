export class FormActivosFijosEntity {
  constructor(
    public actID: string,
    public actContent: any,
    public report: Report[] = []
  ) {}
}