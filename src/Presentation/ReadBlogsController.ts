import { ReadBlogs } from "Application/ReadBlog";
import { Request, Response } from "express";

export class ReadBlogsController {
  constructor(private readonly _useCase: ReadBlogs) {}

  public async handle(request: Request, response: Response): Promise<void> {
    const result = await this._useCase.execute();
    response.status(200).json(result);
  }
}
