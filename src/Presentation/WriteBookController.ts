import { Blog } from "../Domain/Blog";
import { Request, Response } from "express";

export class WriteBookController {
  public async handle (request: Request, response: Response): Promise<void> {
    const {title, desc, content, author, tags } = request.body;

    
  }
};