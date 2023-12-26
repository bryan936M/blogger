import { Blog } from "Domain/Blog";
import IBlogRepository from "../Repository/IBlogRepository";

export class ReadBlogs{
  constructor(private readonly _blogRepository: IBlogRepository){}

  public async execute(): Promise<Blog[]> {
    const blogs = await this._blogRepository.GetBlogs();

    if (!blogs) throw new Error("get blogs failed");

    return blogs;
  }
}