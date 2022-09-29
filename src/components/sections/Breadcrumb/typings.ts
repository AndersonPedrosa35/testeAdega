export type BreadCrumbItemElement = {
  item: string;
  name: string;
  position: number;
};

export interface BreadcrumbProps {
  breadcrumbList: BreadCrumbItemElement[];
}
