import { WriteBlogController } from "./Presentation/WriteBlogController";
import { WriteBlog } from "./Application/writeBlog";
import InMemoryBlogRepository from "./Infrastructure/InMemoryBlogRepository";
import { ApiServer } from "./Presentation/ApiServer";

async function main() {
  // repositories
  const blogRepository = new InMemoryBlogRepository();

  // useCases
  const writeBlogUseCase = new WriteBlog(blogRepository);
  const writeBlogController  = new WriteBlogController(writeBlogUseCase);

  await ApiServer.start(3000, writeBlogController);
}

main();
