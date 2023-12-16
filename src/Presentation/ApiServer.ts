import express from 'express';
import { WriteBlogController } from "./WriteBlogController";
import { get } from 'http';
import { ReadBlogsController } from './ReadBlogsController';

export class ApiServer {
  public static async start(
    port: number = 4000,
    writeController: WriteBlogController,
    getController: ReadBlogsController
  ): Promise<void> {
    const app = express();
    app.use(express.json());

    app.post("/blog", async (request, response) =>
      writeController.handle(request, response)
    );

    app.get("/blogs", async (request, response) =>
      getController.handle(request, response)
    );

    app.listen(port, () => {
      console.log(`Started API server on port ${port}`);
    });
  }
}