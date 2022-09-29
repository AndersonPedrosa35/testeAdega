export interface ISubmenuProps {
  submenuLinks?: ISubmenuColumns[];
  submenuBanner?: string;
}

export interface ISubmenuColumns {
  title: string;
  links: ISubmenuColumnLinks[];
}

export interface ISubmenuColumnLinks {
  link: string;
  title: string;
  linkHighlight: boolean;
  target: boolean
}
