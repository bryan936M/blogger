import { WriteBlog } from "./Application/writeBlog";
import InMemoryBlogRepository from "./Infrastructure/InMemoryBlogRepository";
import { ApiServer } from "./Presentation/ApiServer";

async function main() {
  // repositories
  const blogRepository = new InMemoryBlogRepository();

  // useCases
  const writeBlogUseCase = new WriteBlog(blogRepository);

  await ApiServer.start(3000)
}

main();
