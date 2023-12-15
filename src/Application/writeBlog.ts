import { Blog } from "Domain/Blog";
import IBlogRepository from "./IBlogRepository";

interface IWriteBlogInputs {
  title: string;
  desc: string;
  content: string;
  author: string;
  tags: string[];
}

interface IwriteBlogResult {
  blogId: string;
}

// useCase: writeBlog
export class writeBlog {
  public constructor(private readonly _blogRepository: IBlogRepository) {}

  public async execute(input: IWriteBlogInputs): Promise<IwriteBlogResult> {
    const blog = new Blog(
      input.title,
      input.desc,
      input.content,
      input.author,
      input.tags
    );

    const result = await this._blogRepository.save(blog);

    if(!result) throw new Error("save blog failed");

    return {
      blogId: "",
    };
  }
}
