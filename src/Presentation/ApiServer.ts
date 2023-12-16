import express from 'express';
import { WriteBlogController } from "./WriteBlogController";

export class ApiServer {
  public static async start(
    port: number = 4000,
    controller: WriteBlogController
  ): Promise<void> {
    const app = express();
    app.use(express.json());

    app.post("/write-book", async (request, response) =>
      controller.handle(request, response)
    );

    app.listen(port, () => {
      console.log(`Started API server on port ${port}`);
    });
  }
}