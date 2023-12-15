import IBlogRepository from "Application/IblogRepository";
import { Blog } from "Domain/Blog";

export default class InMemoryBlogRepository implements IBlogRepository {
  private readonly _blogs: Blog[] = [];
  
  public async save(blog: Blog): Promise<boolean> {
    this._blogs.push(blog);
    return Promise.resolve(true);
  }
}
