
import IBlogRepository from "../Application/IBlogRepository";
import { Blog } from "../Domain/Blog";

export default class InMemoryBlogRepository implements IBlogRepository {
  private readonly _blogs: Blog[] = [];
  
  public async save(blog: Blog): Promise<boolean> {
    this._blogs.push(blog);
    return Promise.resolve(true);
  }

  public async GetBlogs(): Promise<Blog[] | null > {
  
    return Promise.resolve(this._blogs ?? null);
  }
}
