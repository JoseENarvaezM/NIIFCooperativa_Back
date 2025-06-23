export class FormEsfPatrimonioEntity {
  constructor(
    public esfID: string,
    public esfContent: any,
    public report: Report[] = []
  ) {}
}