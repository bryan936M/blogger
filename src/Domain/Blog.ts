export class Blog {
  constructor(
    public readonly title: string,
    public readonly desc: string,
    public readonly content: string,
    public readonly author: string,
    public readonly tags: string[]
  ) {
  if (title.length < 5) throw new Error("Title is too short");
  }
}