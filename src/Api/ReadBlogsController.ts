import { ReadBlogs } from "../Services/ReadBlog";
import { Request, Response } from "express";

export class ReadBlogsController {
  constructor(private readonly _useCase: ReadBlogs) {}

  public async handle(request: Request, response: Response): Promise<void> {
    try {
      const result = await this._useCase.execute();
      
      response.status(200).json(result);

    } catch (error: any) {
      // Handle the error here
      response.status(400).json({message: error.message });

    }
  }
}
