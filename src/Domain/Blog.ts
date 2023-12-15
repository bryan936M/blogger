export class Blog {
  constructor(
    public readonly title: string,
    public readonly desc: string,
    public readonly content: string,
    public readonly author: string,
    public readonly tags: string[]
  ) {}
}