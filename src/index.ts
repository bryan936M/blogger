import { WriteBlogController } from "./Api/WriteBlogController";
import { WriteBlog } from "./Services/WriteBlog";
import InMemoryBlogRepository from "./Repository/InMemoryBlogRepository";
import { ApiServer } from "./Api/ApiServer";
import { ReadBlogs } from "./Services/ReadBlog";
import { ReadBlogsController } from "./Api/ReadBlogsController";

async function main() {
  // repositories
  const blogRepository = new InMemoryBlogRepository();

  // useCases
  const writeBlogUseCase = new WriteBlog(blogRepository);
  const readBlogsUseCase = new ReadBlogs(blogRepository)

  // controllers
  const writeBlogController  = new WriteBlogController(writeBlogUseCase);
  const readBlogsController = new ReadBlogsController(readBlogsUseCase);

  await ApiServer.start(4000, writeBlogController, readBlogsController);
}

main();
