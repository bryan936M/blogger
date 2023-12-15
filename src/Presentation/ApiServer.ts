import express from 'express';

export class ApiServer {
  public static async start(port: number = 4000) : Promise<void> {
    const app = express();
    app.use(express.json());

    app.listen(port, () => {
      console.log(`Started API server on port ${port}`);
    });
  }
}