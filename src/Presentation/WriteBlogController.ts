import { Request, Response } from "express";
import { IWriteBlogInputs, WriteBlog } from "../Application/WriteBlog";

export class WriteBlogController {
  public constructor(private readonly _useCase: WriteBlog) {}

  public async handle (request: Request, response: Response): Promise<void> {
    const inputs: IWriteBlogInputs = request.body;

    const result = await this._useCase.execute(inputs);

    response.status(201).json(result);
    
  }
};