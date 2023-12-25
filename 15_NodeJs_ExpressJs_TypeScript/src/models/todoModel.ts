export class Todo {
  constructor(
    public todoId: string,
    public title: string,
    public status: boolean = false,
  ) {}
}
