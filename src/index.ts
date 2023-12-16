import { WriteBlogController } from "./Presentation/WriteBlogController";
import { WriteBlog } from "./Application/WriteBlog";
import InMemoryBlogRepository from "./Infrastructure/InMemoryBlogRepository";
import { ApiServer } from "./Presentation/ApiServer";
import { ReadBlogs } from "./Application/ReadBlog";
import { ReadBlogsController } from "./Presentation/ReadBlogsController";

async function main() {
  // repositories
  const blogRepository = new InMemoryBlogRepository();

  // useCases
  const writeBlogUseCase = new WriteBlog(blogRepository);
  const readBlogsUseCase = new ReadBlogs(blogRepository)

  // controllers
  const writeBlogController  = new WriteBlogController(writeBlogUseCase);
  const readBlogsController = new ReadBlogsController(readBlogsUseCase);

  await ApiServer.start(3000, writeBlogController, readBlogsController);
}

main();
