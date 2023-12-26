import { Blog } from "../Domain/Blog";

export default interface IBlogRepository {
  save(blog: Blog): Promise<boolean>;
  GetBlogs(): Promise<Blog[] | null>;
}