export interface ICardsBlog {
  title?: string;
  cards: ICardBlog[];
}

export interface ICardBlog {
  content: ICardContent;
  image: ICardImage;
  link: string;
}

export interface ICardContent {
  description: string;
  title: string;
}

export interface ICardImage {
  alt?: string;
  image: string;
}

export interface ICardBlogAllContent {
  image: string
  link: string
  title: string
  text: string
  alt?: string
  target?: boolean 
}