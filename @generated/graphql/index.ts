export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ActiveVariations: any;
  Date: any;
  FormattedVariants: any;
  JSON: any;
  JSONPropsCmsObject: any;
  ObjectOrString: any;
  SlugsMap: any;
  VariantsByName: any;
};

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne: InputMaybe<Scalars['Boolean']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type CmsBlock = {
  data: Scalars['JSONPropsCmsObject'];
  id: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CmsBlockFilterInput = {
  data: InputMaybe<JsonPropsCmsObjectQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
};

export type CmsBlockFilterListInput = {
  elemMatch: InputMaybe<CmsBlockFilterInput>;
};

export type CmsCategory = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  infoPage: Maybe<CmsCategoryInfoPage>;
  internal: Internal;
  name: Scalars['String'];
  parent: Maybe<Node>;
  sections: Array<CmsBlock>;
  versionStatus: Maybe<Scalars['String']>;
};

export type CmsCategoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCategoryEdge>;
  group: Array<CmsCategoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCategory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCategoryConnectionDistinctArgs = {
  field: CmsCategoryFieldsEnum;
};


export type CmsCategoryConnectionGroupArgs = {
  field: CmsCategoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCategoryConnectionMaxArgs = {
  field: CmsCategoryFieldsEnum;
};


export type CmsCategoryConnectionMinArgs = {
  field: CmsCategoryFieldsEnum;
};


export type CmsCategoryConnectionSumArgs = {
  field: CmsCategoryFieldsEnum;
};

export type CmsCategoryEdge = {
  next: Maybe<CmsCategory>;
  node: CmsCategory;
  previous: Maybe<CmsCategory>;
};

export type CmsCategoryFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'infoPage___siteMetadataWithSlug___seo___children'
  | 'infoPage___siteMetadataWithSlug___seo___id'
  | 'infoPage___siteMetadataWithSlug___seo___slug'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sections'
  | 'sections___data'
  | 'sections___id'
  | 'sections___name'
  | 'versionStatus';

export type CmsCategoryFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  infoPage: InputMaybe<CmsCategoryInfoPageFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};

export type CmsCategoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCategoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsCategoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCategory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCategoryGroupConnectionDistinctArgs = {
  field: CmsCategoryFieldsEnum;
};


export type CmsCategoryGroupConnectionGroupArgs = {
  field: CmsCategoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCategoryGroupConnectionMaxArgs = {
  field: CmsCategoryFieldsEnum;
};


export type CmsCategoryGroupConnectionMinArgs = {
  field: CmsCategoryFieldsEnum;
};


export type CmsCategoryGroupConnectionSumArgs = {
  field: CmsCategoryFieldsEnum;
};

export type CmsCategoryInfoPage = {
  siteMetadataWithSlug: Maybe<CmsCategoryInfoPageSiteMetadataWithSlug>;
};

export type CmsCategoryInfoPageFilterInput = {
  siteMetadataWithSlug: InputMaybe<CmsCategoryInfoPageSiteMetadataWithSlugFilterInput>;
};

export type CmsCategoryInfoPageSiteMetadataWithSlug = {
  seo: Maybe<CmsCategoryInfoPageSiteMetadataWithSlugSeo>;
};

export type CmsCategoryInfoPageSiteMetadataWithSlugFilterInput = {
  seo: InputMaybe<CmsCategoryInfoPageSiteMetadataWithSlugSeoFilterInput>;
};

export type CmsCategoryInfoPageSiteMetadataWithSlugSeo = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  slug: Maybe<Scalars['String']>;
};

export type CmsCategoryInfoPageSiteMetadataWithSlugSeoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCategoryInfoPageSiteMetadataWithSlugSeoEdge>;
  group: Array<CmsCategoryInfoPageSiteMetadataWithSlugSeoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCategoryInfoPageSiteMetadataWithSlugSeo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoConnectionDistinctArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoConnectionGroupArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoConnectionMaxArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoConnectionMinArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoConnectionSumArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};

export type CmsCategoryInfoPageSiteMetadataWithSlugSeoEdge = {
  next: Maybe<CmsCategoryInfoPageSiteMetadataWithSlugSeo>;
  node: CmsCategoryInfoPageSiteMetadataWithSlugSeo;
  previous: Maybe<CmsCategoryInfoPageSiteMetadataWithSlugSeo>;
};

export type CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'slug';

export type CmsCategoryInfoPageSiteMetadataWithSlugSeoFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
};

export type CmsCategoryInfoPageSiteMetadataWithSlugSeoGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCategoryInfoPageSiteMetadataWithSlugSeoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsCategoryInfoPageSiteMetadataWithSlugSeoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCategoryInfoPageSiteMetadataWithSlugSeo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoGroupConnectionDistinctArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoGroupConnectionGroupArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoGroupConnectionMaxArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoGroupConnectionMinArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCategoryInfoPageSiteMetadataWithSlugSeoGroupConnectionSumArgs = {
  field: CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};

export type CmsCategoryInfoPageSiteMetadataWithSlugSeoSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsCategoryInfoPageSiteMetadataWithSlugSeoFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsCategorySortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsCategoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsCollection = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  infoPage: Maybe<CmsCollectionInfoPage>;
  internal: Internal;
  name: Scalars['String'];
  parent: Maybe<Node>;
  sections: Array<CmsBlock>;
  versionStatus: Maybe<Scalars['String']>;
};

export type CmsCollectionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCollectionEdge>;
  group: Array<CmsCollectionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCollection>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCollectionConnectionDistinctArgs = {
  field: CmsCollectionFieldsEnum;
};


export type CmsCollectionConnectionGroupArgs = {
  field: CmsCollectionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCollectionConnectionMaxArgs = {
  field: CmsCollectionFieldsEnum;
};


export type CmsCollectionConnectionMinArgs = {
  field: CmsCollectionFieldsEnum;
};


export type CmsCollectionConnectionSumArgs = {
  field: CmsCollectionFieldsEnum;
};

export type CmsCollectionEdge = {
  next: Maybe<CmsCollection>;
  node: CmsCollection;
  previous: Maybe<CmsCollection>;
};

export type CmsCollectionFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'infoPage___siteMetadataWithSlug___configCollection___children'
  | 'infoPage___siteMetadataWithSlug___configCollection___collection'
  | 'infoPage___siteMetadataWithSlug___configCollection___hideUnavailableItems'
  | 'infoPage___siteMetadataWithSlug___configCollection___id'
  | 'infoPage___siteMetadataWithSlug___configCollection___maxQuantityProducts'
  | 'infoPage___siteMetadataWithSlug___configCollection___rangePrice'
  | 'infoPage___siteMetadataWithSlug___configCollection___sort'
  | 'infoPage___siteMetadataWithSlug___configCollection___term'
  | 'infoPage___siteMetadataWithSlug___seo___children'
  | 'infoPage___siteMetadataWithSlug___seo___description'
  | 'infoPage___siteMetadataWithSlug___seo___id'
  | 'infoPage___siteMetadataWithSlug___seo___slug'
  | 'infoPage___siteMetadataWithSlug___seo___title'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sections'
  | 'sections___data'
  | 'sections___id'
  | 'sections___name'
  | 'versionStatus';

export type CmsCollectionFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  infoPage: InputMaybe<CmsCollectionInfoPageFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};

export type CmsCollectionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCollectionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsCollectionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCollection>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCollectionGroupConnectionDistinctArgs = {
  field: CmsCollectionFieldsEnum;
};


export type CmsCollectionGroupConnectionGroupArgs = {
  field: CmsCollectionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCollectionGroupConnectionMaxArgs = {
  field: CmsCollectionFieldsEnum;
};


export type CmsCollectionGroupConnectionMinArgs = {
  field: CmsCollectionFieldsEnum;
};


export type CmsCollectionGroupConnectionSumArgs = {
  field: CmsCollectionFieldsEnum;
};

export type CmsCollectionInfoPage = {
  siteMetadataWithSlug: Maybe<CmsCollectionInfoPageSiteMetadataWithSlug>;
};

export type CmsCollectionInfoPageFilterInput = {
  siteMetadataWithSlug: InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugFilterInput>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlug = {
  configCollection: Maybe<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection>;
  seo: Maybe<CmsCollectionInfoPageSiteMetadataWithSlugSeo>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection = Node & {
  children: Array<Node>;
  collection: Maybe<Scalars['String']>;
  hideUnavailableItems: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  maxQuantityProducts: Maybe<Scalars['Int']>;
  parent: Maybe<Node>;
  rangePrice: Maybe<Scalars['String']>;
  sort: Maybe<Scalars['String']>;
  term: Maybe<Scalars['String']>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionEdge>;
  group: Array<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionConnectionDistinctArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionConnectionGroupArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionConnectionMaxArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionConnectionMinArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionConnectionSumArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionEdge = {
  next: Maybe<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection>;
  node: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection;
  previous: Maybe<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'collection'
  | 'hideUnavailableItems'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'maxQuantityProducts'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'rangePrice'
  | 'sort'
  | 'term';

export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  collection: InputMaybe<StringQueryOperatorInput>;
  hideUnavailableItems: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  maxQuantityProducts: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  rangePrice: InputMaybe<StringQueryOperatorInput>;
  sort: InputMaybe<StringQueryOperatorInput>;
  term: InputMaybe<StringQueryOperatorInput>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionGroupConnectionDistinctArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionGroupConnectionGroupArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionGroupConnectionMaxArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionGroupConnectionMinArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionGroupConnectionSumArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugFilterInput = {
  configCollection: InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFilterInput>;
  seo: InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugSeoFilterInput>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugSeo = Node & {
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  slug: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugSeoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCollectionInfoPageSiteMetadataWithSlugSeoEdge>;
  group: Array<CmsCollectionInfoPageSiteMetadataWithSlugSeoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCollectionInfoPageSiteMetadataWithSlugSeo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoConnectionDistinctArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoConnectionGroupArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoConnectionMaxArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoConnectionMinArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoConnectionSumArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugSeoEdge = {
  next: Maybe<CmsCollectionInfoPageSiteMetadataWithSlugSeo>;
  node: CmsCollectionInfoPageSiteMetadataWithSlugSeo;
  previous: Maybe<CmsCollectionInfoPageSiteMetadataWithSlugSeo>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'description'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'slug'
  | 'title';

export type CmsCollectionInfoPageSiteMetadataWithSlugSeoFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugSeoGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsCollectionInfoPageSiteMetadataWithSlugSeoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsCollectionInfoPageSiteMetadataWithSlugSeoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsCollectionInfoPageSiteMetadataWithSlugSeo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoGroupConnectionDistinctArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoGroupConnectionGroupArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoGroupConnectionMaxArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoGroupConnectionMinArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};


export type CmsCollectionInfoPageSiteMetadataWithSlugSeoGroupConnectionSumArgs = {
  field: CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum;
};

export type CmsCollectionInfoPageSiteMetadataWithSlugSeoSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugSeoFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsCollectionSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsCollectionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooter = Node & {
  children: Array<Node>;
  contatoFooter: Maybe<CmsFooterContatoFooter>;
  id: Scalars['ID'];
  infosRodape: Maybe<CmsFooterInfosRodape>;
  internal: Internal;
  menuFooter: Maybe<CmsFooterMenuFooter>;
  name: Scalars['String'];
  pagamentosDisponiveis: Maybe<CmsFooterPagamentosDisponiveis>;
  parent: Maybe<Node>;
  sections: Array<CmsBlock>;
  selos: Maybe<CmsFooterSelos>;
  versionStatus: Maybe<Scalars['String']>;
};

export type CmsFooterConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterEdge>;
  group: Array<CmsFooterGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooter>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterConnectionDistinctArgs = {
  field: CmsFooterFieldsEnum;
};


export type CmsFooterConnectionGroupArgs = {
  field: CmsFooterFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterConnectionMaxArgs = {
  field: CmsFooterFieldsEnum;
};


export type CmsFooterConnectionMinArgs = {
  field: CmsFooterFieldsEnum;
};


export type CmsFooterConnectionSumArgs = {
  field: CmsFooterFieldsEnum;
};

export type CmsFooterContatoFooter = {
  contacts: Maybe<CmsFooterContatoFooterContacts>;
};

export type CmsFooterContatoFooterContacts = {
  buttonContact: Maybe<CmsFooterContatoFooterContactsButtonContact>;
  infoAtendimento: Maybe<CmsFooterContatoFooterContactsInfoAtendimento>;
  socialMedia: Maybe<CmsFooterContatoFooterContactsSocialMedia>;
};

export type CmsFooterContatoFooterContactsButtonContact = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  link: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  textButton: Maybe<Scalars['String']>;
};

export type CmsFooterContatoFooterContactsButtonContactConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterContatoFooterContactsButtonContactEdge>;
  group: Array<CmsFooterContatoFooterContactsButtonContactGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterContatoFooterContactsButtonContact>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterContatoFooterContactsButtonContactConnectionDistinctArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
};


export type CmsFooterContatoFooterContactsButtonContactConnectionGroupArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterContatoFooterContactsButtonContactConnectionMaxArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
};


export type CmsFooterContatoFooterContactsButtonContactConnectionMinArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
};


export type CmsFooterContatoFooterContactsButtonContactConnectionSumArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
};

export type CmsFooterContatoFooterContactsButtonContactEdge = {
  next: Maybe<CmsFooterContatoFooterContactsButtonContact>;
  node: CmsFooterContatoFooterContactsButtonContact;
  previous: Maybe<CmsFooterContatoFooterContactsButtonContact>;
};

export type CmsFooterContatoFooterContactsButtonContactFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'link'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'textButton';

export type CmsFooterContatoFooterContactsButtonContactFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  textButton: InputMaybe<StringQueryOperatorInput>;
};

export type CmsFooterContatoFooterContactsButtonContactGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterContatoFooterContactsButtonContactEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterContatoFooterContactsButtonContactGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterContatoFooterContactsButtonContact>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterContatoFooterContactsButtonContactGroupConnectionDistinctArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
};


export type CmsFooterContatoFooterContactsButtonContactGroupConnectionGroupArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterContatoFooterContactsButtonContactGroupConnectionMaxArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
};


export type CmsFooterContatoFooterContactsButtonContactGroupConnectionMinArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
};


export type CmsFooterContatoFooterContactsButtonContactGroupConnectionSumArgs = {
  field: CmsFooterContatoFooterContactsButtonContactFieldsEnum;
};

export type CmsFooterContatoFooterContactsButtonContactSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterContatoFooterContactsButtonContactFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterContatoFooterContactsFilterInput = {
  buttonContact: InputMaybe<CmsFooterContatoFooterContactsButtonContactFilterInput>;
  infoAtendimento: InputMaybe<CmsFooterContatoFooterContactsInfoAtendimentoFilterInput>;
  socialMedia: InputMaybe<CmsFooterContatoFooterContactsSocialMediaFilterInput>;
};

export type CmsFooterContatoFooterContactsInfoAtendimento = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  text: Maybe<Scalars['String']>;
};

export type CmsFooterContatoFooterContactsInfoAtendimentoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterContatoFooterContactsInfoAtendimentoEdge>;
  group: Array<CmsFooterContatoFooterContactsInfoAtendimentoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterContatoFooterContactsInfoAtendimento>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterContatoFooterContactsInfoAtendimentoConnectionDistinctArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
};


export type CmsFooterContatoFooterContactsInfoAtendimentoConnectionGroupArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterContatoFooterContactsInfoAtendimentoConnectionMaxArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
};


export type CmsFooterContatoFooterContactsInfoAtendimentoConnectionMinArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
};


export type CmsFooterContatoFooterContactsInfoAtendimentoConnectionSumArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
};

export type CmsFooterContatoFooterContactsInfoAtendimentoEdge = {
  next: Maybe<CmsFooterContatoFooterContactsInfoAtendimento>;
  node: CmsFooterContatoFooterContactsInfoAtendimento;
  previous: Maybe<CmsFooterContatoFooterContactsInfoAtendimento>;
};

export type CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'text';

export type CmsFooterContatoFooterContactsInfoAtendimentoFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  text: InputMaybe<StringQueryOperatorInput>;
};

export type CmsFooterContatoFooterContactsInfoAtendimentoGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterContatoFooterContactsInfoAtendimentoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterContatoFooterContactsInfoAtendimentoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterContatoFooterContactsInfoAtendimento>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterContatoFooterContactsInfoAtendimentoGroupConnectionDistinctArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
};


export type CmsFooterContatoFooterContactsInfoAtendimentoGroupConnectionGroupArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterContatoFooterContactsInfoAtendimentoGroupConnectionMaxArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
};


export type CmsFooterContatoFooterContactsInfoAtendimentoGroupConnectionMinArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
};


export type CmsFooterContatoFooterContactsInfoAtendimentoGroupConnectionSumArgs = {
  field: CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum;
};

export type CmsFooterContatoFooterContactsInfoAtendimentoSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterContatoFooterContactsInfoAtendimentoFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterContatoFooterContactsSocialMedia = {
  listSocialMedia: Maybe<Array<Maybe<CmsFooterContatoFooterContactsSocialMediaListSocialMedia>>>;
};

export type CmsFooterContatoFooterContactsSocialMediaFilterInput = {
  listSocialMedia: InputMaybe<CmsFooterContatoFooterContactsSocialMediaListSocialMediaFilterListInput>;
};

export type CmsFooterContatoFooterContactsSocialMediaListSocialMedia = Node & {
  alt: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  image: Maybe<Scalars['String']>;
  internal: Internal;
  link: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  target: Maybe<Scalars['Boolean']>;
};

export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterContatoFooterContactsSocialMediaListSocialMediaEdge>;
  group: Array<CmsFooterContatoFooterContactsSocialMediaListSocialMediaGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterContatoFooterContactsSocialMediaListSocialMedia>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaConnectionDistinctArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaConnectionGroupArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaConnectionMaxArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaConnectionMinArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaConnectionSumArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
};

export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaEdge = {
  next: Maybe<CmsFooterContatoFooterContactsSocialMediaListSocialMedia>;
  node: CmsFooterContatoFooterContactsSocialMediaListSocialMedia;
  previous: Maybe<CmsFooterContatoFooterContactsSocialMediaListSocialMedia>;
};

export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum =
  | 'alt'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'image'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'link'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'target';

export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaFilterInput = {
  alt: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  target: InputMaybe<BooleanQueryOperatorInput>;
};

export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaFilterListInput = {
  elemMatch: InputMaybe<CmsFooterContatoFooterContactsSocialMediaListSocialMediaFilterInput>;
};

export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterContatoFooterContactsSocialMediaListSocialMediaEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterContatoFooterContactsSocialMediaListSocialMediaGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterContatoFooterContactsSocialMediaListSocialMedia>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaGroupConnectionDistinctArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaGroupConnectionGroupArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaGroupConnectionMaxArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaGroupConnectionMinArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
};


export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaGroupConnectionSumArgs = {
  field: CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum;
};

export type CmsFooterContatoFooterContactsSocialMediaListSocialMediaSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterContatoFooterContactsSocialMediaListSocialMediaFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterContatoFooterFilterInput = {
  contacts: InputMaybe<CmsFooterContatoFooterContactsFilterInput>;
};

export type CmsFooterEdge = {
  next: Maybe<CmsFooter>;
  node: CmsFooter;
  previous: Maybe<CmsFooter>;
};

export type CmsFooterFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contatoFooter___contacts___buttonContact___children'
  | 'contatoFooter___contacts___buttonContact___id'
  | 'contatoFooter___contacts___buttonContact___link'
  | 'contatoFooter___contacts___buttonContact___textButton'
  | 'contatoFooter___contacts___infoAtendimento___children'
  | 'contatoFooter___contacts___infoAtendimento___id'
  | 'contatoFooter___contacts___infoAtendimento___text'
  | 'contatoFooter___contacts___socialMedia___listSocialMedia'
  | 'id'
  | 'infosRodape___informations___children'
  | 'infosRodape___informations___children___children'
  | 'infosRodape___informations___children___id'
  | 'infosRodape___informations___copyright'
  | 'infosRodape___informations___id'
  | 'infosRodape___informations___infoBusiness'
  | 'infosRodape___informations___internal___content'
  | 'infosRodape___informations___internal___contentDigest'
  | 'infosRodape___informations___internal___contentFilePath'
  | 'infosRodape___informations___internal___description'
  | 'infosRodape___informations___internal___fieldOwners'
  | 'infosRodape___informations___internal___ignoreType'
  | 'infosRodape___informations___internal___mediaType'
  | 'infosRodape___informations___internal___owner'
  | 'infosRodape___informations___internal___type'
  | 'infosRodape___informations___parent___children'
  | 'infosRodape___informations___parent___id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'menuFooter___menu___columns'
  | 'menuFooter___menu___columns___children'
  | 'menuFooter___menu___columns___id'
  | 'menuFooter___menu___columns___links'
  | 'menuFooter___menu___columns___title'
  | 'name'
  | 'pagamentosDisponiveis___payments___listPayment'
  | 'pagamentosDisponiveis___payments___listPayment___alt'
  | 'pagamentosDisponiveis___payments___listPayment___children'
  | 'pagamentosDisponiveis___payments___listPayment___id'
  | 'pagamentosDisponiveis___payments___listPayment___image'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sections'
  | 'sections___data'
  | 'sections___id'
  | 'sections___name'
  | 'selos___certificates___listCertificates'
  | 'selos___certificates___listCertificates___alt'
  | 'selos___certificates___listCertificates___children'
  | 'selos___certificates___listCertificates___id'
  | 'selos___certificates___listCertificates___image'
  | 'selos___certificates___listCertificates___link'
  | 'selos___certificates___listCertificates___target'
  | 'versionStatus';

export type CmsFooterFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contatoFooter: InputMaybe<CmsFooterContatoFooterFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  infosRodape: InputMaybe<CmsFooterInfosRodapeFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  menuFooter: InputMaybe<CmsFooterMenuFooterFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  pagamentosDisponiveis: InputMaybe<CmsFooterPagamentosDisponiveisFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  selos: InputMaybe<CmsFooterSelosFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};

export type CmsFooterGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooter>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterGroupConnectionDistinctArgs = {
  field: CmsFooterFieldsEnum;
};


export type CmsFooterGroupConnectionGroupArgs = {
  field: CmsFooterFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterGroupConnectionMaxArgs = {
  field: CmsFooterFieldsEnum;
};


export type CmsFooterGroupConnectionMinArgs = {
  field: CmsFooterFieldsEnum;
};


export type CmsFooterGroupConnectionSumArgs = {
  field: CmsFooterFieldsEnum;
};

export type CmsFooterInfosRodape = {
  informations: Maybe<CmsFooterInfosRodapeInformations>;
};

export type CmsFooterInfosRodapeFilterInput = {
  informations: InputMaybe<CmsFooterInfosRodapeInformationsFilterInput>;
};

export type CmsFooterInfosRodapeInformations = Node & {
  children: Array<Node>;
  copyright: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  infoBusiness: Maybe<Scalars['String']>;
  internal: Internal;
  parent: Maybe<Node>;
};

export type CmsFooterInfosRodapeInformationsConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterInfosRodapeInformationsEdge>;
  group: Array<CmsFooterInfosRodapeInformationsGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterInfosRodapeInformations>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterInfosRodapeInformationsConnectionDistinctArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
};


export type CmsFooterInfosRodapeInformationsConnectionGroupArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterInfosRodapeInformationsConnectionMaxArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
};


export type CmsFooterInfosRodapeInformationsConnectionMinArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
};


export type CmsFooterInfosRodapeInformationsConnectionSumArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
};

export type CmsFooterInfosRodapeInformationsEdge = {
  next: Maybe<CmsFooterInfosRodapeInformations>;
  node: CmsFooterInfosRodapeInformations;
  previous: Maybe<CmsFooterInfosRodapeInformations>;
};

export type CmsFooterInfosRodapeInformationsFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'copyright'
  | 'id'
  | 'infoBusiness'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id';

export type CmsFooterInfosRodapeInformationsFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  copyright: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  infoBusiness: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type CmsFooterInfosRodapeInformationsGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterInfosRodapeInformationsEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterInfosRodapeInformationsGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterInfosRodapeInformations>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterInfosRodapeInformationsGroupConnectionDistinctArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
};


export type CmsFooterInfosRodapeInformationsGroupConnectionGroupArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterInfosRodapeInformationsGroupConnectionMaxArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
};


export type CmsFooterInfosRodapeInformationsGroupConnectionMinArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
};


export type CmsFooterInfosRodapeInformationsGroupConnectionSumArgs = {
  field: CmsFooterInfosRodapeInformationsFieldsEnum;
};

export type CmsFooterInfosRodapeInformationsSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterInfosRodapeInformationsFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterMenuFooter = {
  menu: Maybe<CmsFooterMenuFooterMenu>;
};

export type CmsFooterMenuFooterFilterInput = {
  menu: InputMaybe<CmsFooterMenuFooterMenuFilterInput>;
};

export type CmsFooterMenuFooterMenu = {
  columns: Maybe<Array<Maybe<CmsFooterMenuFooterMenuColumns>>>;
};

export type CmsFooterMenuFooterMenuColumns = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  links: Maybe<Array<Maybe<CmsFooterMenuFooterMenuColumnsLinks>>>;
  parent: Maybe<Node>;
  title: Maybe<Scalars['String']>;
};

export type CmsFooterMenuFooterMenuColumnsConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterMenuFooterMenuColumnsEdge>;
  group: Array<CmsFooterMenuFooterMenuColumnsGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterMenuFooterMenuColumns>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterMenuFooterMenuColumnsConnectionDistinctArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsConnectionGroupArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterMenuFooterMenuColumnsConnectionMaxArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsConnectionMinArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsConnectionSumArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
};

export type CmsFooterMenuFooterMenuColumnsEdge = {
  next: Maybe<CmsFooterMenuFooterMenuColumns>;
  node: CmsFooterMenuFooterMenuColumns;
  previous: Maybe<CmsFooterMenuFooterMenuColumns>;
};

export type CmsFooterMenuFooterMenuColumnsFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'links'
  | 'links___children'
  | 'links___children___children'
  | 'links___children___children___children'
  | 'links___children___children___id'
  | 'links___children___id'
  | 'links___children___internal___content'
  | 'links___children___internal___contentDigest'
  | 'links___children___internal___contentFilePath'
  | 'links___children___internal___description'
  | 'links___children___internal___fieldOwners'
  | 'links___children___internal___ignoreType'
  | 'links___children___internal___mediaType'
  | 'links___children___internal___owner'
  | 'links___children___internal___type'
  | 'links___children___parent___children'
  | 'links___children___parent___id'
  | 'links___id'
  | 'links___internal___content'
  | 'links___internal___contentDigest'
  | 'links___internal___contentFilePath'
  | 'links___internal___description'
  | 'links___internal___fieldOwners'
  | 'links___internal___ignoreType'
  | 'links___internal___mediaType'
  | 'links___internal___owner'
  | 'links___internal___type'
  | 'links___link'
  | 'links___parent___children'
  | 'links___parent___children___children'
  | 'links___parent___children___id'
  | 'links___parent___id'
  | 'links___parent___internal___content'
  | 'links___parent___internal___contentDigest'
  | 'links___parent___internal___contentFilePath'
  | 'links___parent___internal___description'
  | 'links___parent___internal___fieldOwners'
  | 'links___parent___internal___ignoreType'
  | 'links___parent___internal___mediaType'
  | 'links___parent___internal___owner'
  | 'links___parent___internal___type'
  | 'links___parent___parent___children'
  | 'links___parent___parent___id'
  | 'links___target'
  | 'links___title'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'title';

export type CmsFooterMenuFooterMenuColumnsFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  links: InputMaybe<CmsFooterMenuFooterMenuColumnsLinksFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsFooterMenuFooterMenuColumnsFilterListInput = {
  elemMatch: InputMaybe<CmsFooterMenuFooterMenuColumnsFilterInput>;
};

export type CmsFooterMenuFooterMenuColumnsGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterMenuFooterMenuColumnsEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterMenuFooterMenuColumnsGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterMenuFooterMenuColumns>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterMenuFooterMenuColumnsGroupConnectionDistinctArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsGroupConnectionGroupArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterMenuFooterMenuColumnsGroupConnectionMaxArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsGroupConnectionMinArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsGroupConnectionSumArgs = {
  field: CmsFooterMenuFooterMenuColumnsFieldsEnum;
};

export type CmsFooterMenuFooterMenuColumnsLinks = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  link: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  target: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
};

export type CmsFooterMenuFooterMenuColumnsLinksConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterMenuFooterMenuColumnsLinksEdge>;
  group: Array<CmsFooterMenuFooterMenuColumnsLinksGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterMenuFooterMenuColumnsLinks>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterMenuFooterMenuColumnsLinksConnectionDistinctArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsLinksConnectionGroupArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterMenuFooterMenuColumnsLinksConnectionMaxArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsLinksConnectionMinArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsLinksConnectionSumArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
};

export type CmsFooterMenuFooterMenuColumnsLinksEdge = {
  next: Maybe<CmsFooterMenuFooterMenuColumnsLinks>;
  node: CmsFooterMenuFooterMenuColumnsLinks;
  previous: Maybe<CmsFooterMenuFooterMenuColumnsLinks>;
};

export type CmsFooterMenuFooterMenuColumnsLinksFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'link'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'target'
  | 'title';

export type CmsFooterMenuFooterMenuColumnsLinksFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  target: InputMaybe<BooleanQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsFooterMenuFooterMenuColumnsLinksFilterListInput = {
  elemMatch: InputMaybe<CmsFooterMenuFooterMenuColumnsLinksFilterInput>;
};

export type CmsFooterMenuFooterMenuColumnsLinksGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterMenuFooterMenuColumnsLinksEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterMenuFooterMenuColumnsLinksGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterMenuFooterMenuColumnsLinks>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterMenuFooterMenuColumnsLinksGroupConnectionDistinctArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsLinksGroupConnectionGroupArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterMenuFooterMenuColumnsLinksGroupConnectionMaxArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsLinksGroupConnectionMinArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
};


export type CmsFooterMenuFooterMenuColumnsLinksGroupConnectionSumArgs = {
  field: CmsFooterMenuFooterMenuColumnsLinksFieldsEnum;
};

export type CmsFooterMenuFooterMenuColumnsLinksSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterMenuFooterMenuColumnsLinksFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterMenuFooterMenuColumnsSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterMenuFooterMenuColumnsFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterMenuFooterMenuFilterInput = {
  columns: InputMaybe<CmsFooterMenuFooterMenuColumnsFilterListInput>;
};

export type CmsFooterPagamentosDisponiveis = {
  payments: Maybe<CmsFooterPagamentosDisponiveisPayments>;
};

export type CmsFooterPagamentosDisponiveisFilterInput = {
  payments: InputMaybe<CmsFooterPagamentosDisponiveisPaymentsFilterInput>;
};

export type CmsFooterPagamentosDisponiveisPayments = {
  listPayment: Maybe<Array<Maybe<CmsFooterPagamentosDisponiveisPaymentsListPayment>>>;
};

export type CmsFooterPagamentosDisponiveisPaymentsFilterInput = {
  listPayment: InputMaybe<CmsFooterPagamentosDisponiveisPaymentsListPaymentFilterListInput>;
};

export type CmsFooterPagamentosDisponiveisPaymentsListPayment = Node & {
  alt: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  image: Maybe<Scalars['String']>;
  internal: Internal;
  parent: Maybe<Node>;
};

export type CmsFooterPagamentosDisponiveisPaymentsListPaymentConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterPagamentosDisponiveisPaymentsListPaymentEdge>;
  group: Array<CmsFooterPagamentosDisponiveisPaymentsListPaymentGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterPagamentosDisponiveisPaymentsListPayment>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentConnectionDistinctArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentConnectionGroupArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentConnectionMaxArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentConnectionMinArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentConnectionSumArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
};

export type CmsFooterPagamentosDisponiveisPaymentsListPaymentEdge = {
  next: Maybe<CmsFooterPagamentosDisponiveisPaymentsListPayment>;
  node: CmsFooterPagamentosDisponiveisPaymentsListPayment;
  previous: Maybe<CmsFooterPagamentosDisponiveisPaymentsListPayment>;
};

export type CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum =
  | 'alt'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'image'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id';

export type CmsFooterPagamentosDisponiveisPaymentsListPaymentFilterInput = {
  alt: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type CmsFooterPagamentosDisponiveisPaymentsListPaymentFilterListInput = {
  elemMatch: InputMaybe<CmsFooterPagamentosDisponiveisPaymentsListPaymentFilterInput>;
};

export type CmsFooterPagamentosDisponiveisPaymentsListPaymentGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterPagamentosDisponiveisPaymentsListPaymentEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterPagamentosDisponiveisPaymentsListPaymentGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterPagamentosDisponiveisPaymentsListPayment>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentGroupConnectionDistinctArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentGroupConnectionGroupArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentGroupConnectionMaxArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentGroupConnectionMinArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
};


export type CmsFooterPagamentosDisponiveisPaymentsListPaymentGroupConnectionSumArgs = {
  field: CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum;
};

export type CmsFooterPagamentosDisponiveisPaymentsListPaymentSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterPagamentosDisponiveisPaymentsListPaymentFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterSelos = {
  certificates: Maybe<CmsFooterSelosCertificates>;
};

export type CmsFooterSelosCertificates = {
  listCertificates: Maybe<Array<Maybe<CmsFooterSelosCertificatesListCertificates>>>;
};

export type CmsFooterSelosCertificatesFilterInput = {
  listCertificates: InputMaybe<CmsFooterSelosCertificatesListCertificatesFilterListInput>;
};

export type CmsFooterSelosCertificatesListCertificates = Node & {
  alt: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  image: Maybe<Scalars['String']>;
  internal: Internal;
  link: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  target: Maybe<Scalars['Boolean']>;
};

export type CmsFooterSelosCertificatesListCertificatesConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterSelosCertificatesListCertificatesEdge>;
  group: Array<CmsFooterSelosCertificatesListCertificatesGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterSelosCertificatesListCertificates>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterSelosCertificatesListCertificatesConnectionDistinctArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
};


export type CmsFooterSelosCertificatesListCertificatesConnectionGroupArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterSelosCertificatesListCertificatesConnectionMaxArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
};


export type CmsFooterSelosCertificatesListCertificatesConnectionMinArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
};


export type CmsFooterSelosCertificatesListCertificatesConnectionSumArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
};

export type CmsFooterSelosCertificatesListCertificatesEdge = {
  next: Maybe<CmsFooterSelosCertificatesListCertificates>;
  node: CmsFooterSelosCertificatesListCertificates;
  previous: Maybe<CmsFooterSelosCertificatesListCertificates>;
};

export type CmsFooterSelosCertificatesListCertificatesFieldsEnum =
  | 'alt'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'image'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'link'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'target';

export type CmsFooterSelosCertificatesListCertificatesFilterInput = {
  alt: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  target: InputMaybe<BooleanQueryOperatorInput>;
};

export type CmsFooterSelosCertificatesListCertificatesFilterListInput = {
  elemMatch: InputMaybe<CmsFooterSelosCertificatesListCertificatesFilterInput>;
};

export type CmsFooterSelosCertificatesListCertificatesGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterSelosCertificatesListCertificatesEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterSelosCertificatesListCertificatesGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterSelosCertificatesListCertificates>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterSelosCertificatesListCertificatesGroupConnectionDistinctArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
};


export type CmsFooterSelosCertificatesListCertificatesGroupConnectionGroupArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterSelosCertificatesListCertificatesGroupConnectionMaxArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
};


export type CmsFooterSelosCertificatesListCertificatesGroupConnectionMinArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
};


export type CmsFooterSelosCertificatesListCertificatesGroupConnectionSumArgs = {
  field: CmsFooterSelosCertificatesListCertificatesFieldsEnum;
};

export type CmsFooterSelosCertificatesListCertificatesSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterSelosCertificatesListCertificatesFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterSelosCertificatesListPayment = Node & {
  alt: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  image: Maybe<Scalars['String']>;
  internal: Internal;
  link: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
};

export type CmsFooterSelosCertificatesListPaymentConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterSelosCertificatesListPaymentEdge>;
  group: Array<CmsFooterSelosCertificatesListPaymentGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterSelosCertificatesListPayment>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterSelosCertificatesListPaymentConnectionDistinctArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
};


export type CmsFooterSelosCertificatesListPaymentConnectionGroupArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterSelosCertificatesListPaymentConnectionMaxArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
};


export type CmsFooterSelosCertificatesListPaymentConnectionMinArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
};


export type CmsFooterSelosCertificatesListPaymentConnectionSumArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
};

export type CmsFooterSelosCertificatesListPaymentEdge = {
  next: Maybe<CmsFooterSelosCertificatesListPayment>;
  node: CmsFooterSelosCertificatesListPayment;
  previous: Maybe<CmsFooterSelosCertificatesListPayment>;
};

export type CmsFooterSelosCertificatesListPaymentFieldsEnum =
  | 'alt'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'image'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'link'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id';

export type CmsFooterSelosCertificatesListPaymentFilterInput = {
  alt: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type CmsFooterSelosCertificatesListPaymentGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsFooterSelosCertificatesListPaymentEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsFooterSelosCertificatesListPaymentGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsFooterSelosCertificatesListPayment>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsFooterSelosCertificatesListPaymentGroupConnectionDistinctArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
};


export type CmsFooterSelosCertificatesListPaymentGroupConnectionGroupArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsFooterSelosCertificatesListPaymentGroupConnectionMaxArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
};


export type CmsFooterSelosCertificatesListPaymentGroupConnectionMinArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
};


export type CmsFooterSelosCertificatesListPaymentGroupConnectionSumArgs = {
  field: CmsFooterSelosCertificatesListPaymentFieldsEnum;
};

export type CmsFooterSelosCertificatesListPaymentSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterSelosCertificatesListPaymentFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsFooterSelosFilterInput = {
  certificates: InputMaybe<CmsFooterSelosCertificatesFilterInput>;
};

export type CmsFooterSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsFooterFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsHeader = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  menu: Maybe<CmsHeaderMenu>;
  name: Scalars['String'];
  parent: Maybe<Node>;
  sections: Array<CmsBlock>;
  topbar: Maybe<CmsHeaderTopbar>;
  versionStatus: Maybe<Scalars['String']>;
};

export type CmsHeaderConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderEdge>;
  group: Array<CmsHeaderGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeader>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderConnectionDistinctArgs = {
  field: CmsHeaderFieldsEnum;
};


export type CmsHeaderConnectionGroupArgs = {
  field: CmsHeaderFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderConnectionMaxArgs = {
  field: CmsHeaderFieldsEnum;
};


export type CmsHeaderConnectionMinArgs = {
  field: CmsHeaderFieldsEnum;
};


export type CmsHeaderConnectionSumArgs = {
  field: CmsHeaderFieldsEnum;
};

export type CmsHeaderEdge = {
  next: Maybe<CmsHeader>;
  node: CmsHeader;
  previous: Maybe<CmsHeader>;
};

export type CmsHeaderFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'menu___menuItems___menu'
  | 'name'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sections'
  | 'sections___data'
  | 'sections___id'
  | 'sections___name'
  | 'topbar___topbarText___children'
  | 'topbar___topbarText___children___children'
  | 'topbar___topbarText___children___id'
  | 'topbar___topbarText___id'
  | 'topbar___topbarText___internal___content'
  | 'topbar___topbarText___internal___contentDigest'
  | 'topbar___topbarText___internal___contentFilePath'
  | 'topbar___topbarText___internal___description'
  | 'topbar___topbarText___internal___fieldOwners'
  | 'topbar___topbarText___internal___ignoreType'
  | 'topbar___topbarText___internal___mediaType'
  | 'topbar___topbarText___internal___owner'
  | 'topbar___topbarText___internal___type'
  | 'topbar___topbarText___parent___children'
  | 'topbar___topbarText___parent___id'
  | 'topbar___topbarText___text'
  | 'versionStatus';

export type CmsHeaderFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  menu: InputMaybe<CmsHeaderMenuFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  topbar: InputMaybe<CmsHeaderTopbarFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};

export type CmsHeaderGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsHeaderGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeader>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderGroupConnectionDistinctArgs = {
  field: CmsHeaderFieldsEnum;
};


export type CmsHeaderGroupConnectionGroupArgs = {
  field: CmsHeaderFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderGroupConnectionMaxArgs = {
  field: CmsHeaderFieldsEnum;
};


export type CmsHeaderGroupConnectionMinArgs = {
  field: CmsHeaderFieldsEnum;
};


export type CmsHeaderGroupConnectionSumArgs = {
  field: CmsHeaderFieldsEnum;
};

export type CmsHeaderMenu = {
  menuItems: Maybe<CmsHeaderMenuMenuItems>;
};

export type CmsHeaderMenuFilterInput = {
  menuItems: InputMaybe<CmsHeaderMenuMenuItemsFilterInput>;
};

export type CmsHeaderMenuMenuItems = {
  menu: Maybe<Array<Maybe<CmsHeaderMenuMenuItemsMenu>>>;
};

export type CmsHeaderMenuMenuItemsFilterInput = {
  menu: InputMaybe<CmsHeaderMenuMenuItemsMenuFilterListInput>;
};

export type CmsHeaderMenuMenuItemsMenu = {
  item: Maybe<CmsHeaderMenuMenuItemsMenuItem>;
};

export type CmsHeaderMenuMenuItemsMenuFilterInput = {
  item: InputMaybe<CmsHeaderMenuMenuItemsMenuItemFilterInput>;
};

export type CmsHeaderMenuMenuItemsMenuFilterListInput = {
  elemMatch: InputMaybe<CmsHeaderMenuMenuItemsMenuFilterInput>;
};

export type CmsHeaderMenuMenuItemsMenuItem = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  link: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  submenu: Maybe<Array<Maybe<CmsHeaderMenuMenuItemsMenuItemSubmenu>>>;
  submenuImage: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type CmsHeaderMenuMenuItemsMenuItemConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderMenuMenuItemsMenuItemEdge>;
  group: Array<CmsHeaderMenuMenuItemsMenuItemGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeaderMenuMenuItemsMenuItem>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderMenuMenuItemsMenuItemConnectionDistinctArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemConnectionGroupArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderMenuMenuItemsMenuItemConnectionMaxArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemConnectionMinArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemConnectionSumArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
};

export type CmsHeaderMenuMenuItemsMenuItemEdge = {
  next: Maybe<CmsHeaderMenuMenuItemsMenuItem>;
  node: CmsHeaderMenuMenuItemsMenuItem;
  previous: Maybe<CmsHeaderMenuMenuItemsMenuItem>;
};

export type CmsHeaderMenuMenuItemsMenuItemFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'link'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'submenu'
  | 'submenuImage'
  | 'submenu___children'
  | 'submenu___children___children'
  | 'submenu___children___children___children'
  | 'submenu___children___children___id'
  | 'submenu___children___id'
  | 'submenu___children___internal___content'
  | 'submenu___children___internal___contentDigest'
  | 'submenu___children___internal___contentFilePath'
  | 'submenu___children___internal___description'
  | 'submenu___children___internal___fieldOwners'
  | 'submenu___children___internal___ignoreType'
  | 'submenu___children___internal___mediaType'
  | 'submenu___children___internal___owner'
  | 'submenu___children___internal___type'
  | 'submenu___children___parent___children'
  | 'submenu___children___parent___id'
  | 'submenu___id'
  | 'submenu___internal___content'
  | 'submenu___internal___contentDigest'
  | 'submenu___internal___contentFilePath'
  | 'submenu___internal___description'
  | 'submenu___internal___fieldOwners'
  | 'submenu___internal___ignoreType'
  | 'submenu___internal___mediaType'
  | 'submenu___internal___owner'
  | 'submenu___internal___type'
  | 'submenu___links'
  | 'submenu___links___children'
  | 'submenu___links___children___children'
  | 'submenu___links___children___id'
  | 'submenu___links___id'
  | 'submenu___links___internal___content'
  | 'submenu___links___internal___contentDigest'
  | 'submenu___links___internal___contentFilePath'
  | 'submenu___links___internal___description'
  | 'submenu___links___internal___fieldOwners'
  | 'submenu___links___internal___ignoreType'
  | 'submenu___links___internal___mediaType'
  | 'submenu___links___internal___owner'
  | 'submenu___links___internal___type'
  | 'submenu___links___link'
  | 'submenu___links___linkHighlight'
  | 'submenu___links___parent___children'
  | 'submenu___links___parent___id'
  | 'submenu___links___target'
  | 'submenu___links___title'
  | 'submenu___parent___children'
  | 'submenu___parent___children___children'
  | 'submenu___parent___children___id'
  | 'submenu___parent___id'
  | 'submenu___parent___internal___content'
  | 'submenu___parent___internal___contentDigest'
  | 'submenu___parent___internal___contentFilePath'
  | 'submenu___parent___internal___description'
  | 'submenu___parent___internal___fieldOwners'
  | 'submenu___parent___internal___ignoreType'
  | 'submenu___parent___internal___mediaType'
  | 'submenu___parent___internal___owner'
  | 'submenu___parent___internal___type'
  | 'submenu___parent___parent___children'
  | 'submenu___parent___parent___id'
  | 'submenu___title'
  | 'title';

export type CmsHeaderMenuMenuItemsMenuItemFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  submenu: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuFilterListInput>;
  submenuImage: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsHeaderMenuMenuItemsMenuItemGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderMenuMenuItemsMenuItemEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsHeaderMenuMenuItemsMenuItemGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeaderMenuMenuItemsMenuItem>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderMenuMenuItemsMenuItemGroupConnectionDistinctArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemGroupConnectionGroupArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderMenuMenuItemsMenuItemGroupConnectionMaxArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemGroupConnectionMinArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemGroupConnectionSumArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemFieldsEnum;
};

export type CmsHeaderMenuMenuItemsMenuItemSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsHeaderMenuMenuItemsMenuItemFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenu = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  links: Maybe<Array<Maybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinks>>>;
  parent: Maybe<Node>;
  title: Maybe<Scalars['String']>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuEdge>;
  group: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeaderMenuMenuItemsMenuItemSubmenu>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuConnectionDistinctArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuConnectionGroupArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuConnectionMaxArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuConnectionMinArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuConnectionSumArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuEdge = {
  next: Maybe<CmsHeaderMenuMenuItemsMenuItemSubmenu>;
  node: CmsHeaderMenuMenuItemsMenuItemSubmenu;
  previous: Maybe<CmsHeaderMenuMenuItemsMenuItemSubmenu>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'links'
  | 'links___children'
  | 'links___children___children'
  | 'links___children___children___children'
  | 'links___children___children___id'
  | 'links___children___id'
  | 'links___children___internal___content'
  | 'links___children___internal___contentDigest'
  | 'links___children___internal___contentFilePath'
  | 'links___children___internal___description'
  | 'links___children___internal___fieldOwners'
  | 'links___children___internal___ignoreType'
  | 'links___children___internal___mediaType'
  | 'links___children___internal___owner'
  | 'links___children___internal___type'
  | 'links___children___parent___children'
  | 'links___children___parent___id'
  | 'links___id'
  | 'links___internal___content'
  | 'links___internal___contentDigest'
  | 'links___internal___contentFilePath'
  | 'links___internal___description'
  | 'links___internal___fieldOwners'
  | 'links___internal___ignoreType'
  | 'links___internal___mediaType'
  | 'links___internal___owner'
  | 'links___internal___type'
  | 'links___link'
  | 'links___linkHighlight'
  | 'links___parent___children'
  | 'links___parent___children___children'
  | 'links___parent___children___id'
  | 'links___parent___id'
  | 'links___parent___internal___content'
  | 'links___parent___internal___contentDigest'
  | 'links___parent___internal___contentFilePath'
  | 'links___parent___internal___description'
  | 'links___parent___internal___fieldOwners'
  | 'links___parent___internal___ignoreType'
  | 'links___parent___internal___mediaType'
  | 'links___parent___internal___owner'
  | 'links___parent___internal___type'
  | 'links___parent___parent___children'
  | 'links___parent___parent___id'
  | 'links___target'
  | 'links___title'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'title';

export type CmsHeaderMenuMenuItemsMenuItemSubmenuFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  links: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuFilterListInput = {
  elemMatch: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuFilterInput>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeaderMenuMenuItemsMenuItemSubmenu>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuGroupConnectionDistinctArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuGroupConnectionGroupArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuGroupConnectionMaxArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuGroupConnectionMinArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuGroupConnectionSumArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinks = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  link: Maybe<Scalars['String']>;
  linkHighlight: Maybe<Scalars['Boolean']>;
  parent: Maybe<Node>;
  target: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksEdge>;
  group: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuLinks>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksConnectionDistinctArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksConnectionGroupArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksConnectionMaxArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksConnectionMinArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksConnectionSumArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksEdge = {
  next: Maybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinks>;
  node: CmsHeaderMenuMenuItemsMenuItemSubmenuLinks;
  previous: Maybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinks>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'link'
  | 'linkHighlight'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'target'
  | 'title';

export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  linkHighlight: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  target: InputMaybe<BooleanQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFilterListInput = {
  elemMatch: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFilterInput>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeaderMenuMenuItemsMenuItemSubmenuLinks>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksGroupConnectionDistinctArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksGroupConnectionGroupArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksGroupConnectionMaxArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksGroupConnectionMinArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
};


export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksGroupConnectionSumArgs = {
  field: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuLinksSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsHeaderMenuMenuItemsMenuItemSubmenuSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsHeaderSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsHeaderFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsHeaderTopbar = {
  topbarText: Maybe<CmsHeaderTopbarTopbarText>;
};

export type CmsHeaderTopbarFilterInput = {
  topbarText: InputMaybe<CmsHeaderTopbarTopbarTextFilterInput>;
};

export type CmsHeaderTopbarTopbarText = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  text: Maybe<Scalars['String']>;
};

export type CmsHeaderTopbarTopbarTextConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderTopbarTopbarTextEdge>;
  group: Array<CmsHeaderTopbarTopbarTextGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeaderTopbarTopbarText>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderTopbarTopbarTextConnectionDistinctArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
};


export type CmsHeaderTopbarTopbarTextConnectionGroupArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderTopbarTopbarTextConnectionMaxArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
};


export type CmsHeaderTopbarTopbarTextConnectionMinArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
};


export type CmsHeaderTopbarTopbarTextConnectionSumArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
};

export type CmsHeaderTopbarTopbarTextEdge = {
  next: Maybe<CmsHeaderTopbarTopbarText>;
  node: CmsHeaderTopbarTopbarText;
  previous: Maybe<CmsHeaderTopbarTopbarText>;
};

export type CmsHeaderTopbarTopbarTextFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'text';

export type CmsHeaderTopbarTopbarTextFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  text: InputMaybe<StringQueryOperatorInput>;
};

export type CmsHeaderTopbarTopbarTextGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHeaderTopbarTopbarTextEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsHeaderTopbarTopbarTextGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHeaderTopbarTopbarText>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHeaderTopbarTopbarTextGroupConnectionDistinctArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
};


export type CmsHeaderTopbarTopbarTextGroupConnectionGroupArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHeaderTopbarTopbarTextGroupConnectionMaxArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
};


export type CmsHeaderTopbarTopbarTextGroupConnectionMinArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
};


export type CmsHeaderTopbarTopbarTextGroupConnectionSumArgs = {
  field: CmsHeaderTopbarTopbarTextFieldsEnum;
};

export type CmsHeaderTopbarTopbarTextSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsHeaderTopbarTopbarTextFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsHome = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Scalars['String'];
  parent: Maybe<Node>;
  sections: Array<CmsBlock>;
  versionStatus: Maybe<Scalars['String']>;
};

export type CmsHomeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHomeEdge>;
  group: Array<CmsHomeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHome>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHomeConnectionDistinctArgs = {
  field: CmsHomeFieldsEnum;
};


export type CmsHomeConnectionGroupArgs = {
  field: CmsHomeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHomeConnectionMaxArgs = {
  field: CmsHomeFieldsEnum;
};


export type CmsHomeConnectionMinArgs = {
  field: CmsHomeFieldsEnum;
};


export type CmsHomeConnectionSumArgs = {
  field: CmsHomeFieldsEnum;
};

export type CmsHomeEdge = {
  next: Maybe<CmsHome>;
  node: CmsHome;
  previous: Maybe<CmsHome>;
};

export type CmsHomeFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sections'
  | 'sections___data'
  | 'sections___id'
  | 'sections___name'
  | 'versionStatus';

export type CmsHomeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};

export type CmsHomeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsHomeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsHomeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsHome>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsHomeGroupConnectionDistinctArgs = {
  field: CmsHomeFieldsEnum;
};


export type CmsHomeGroupConnectionGroupArgs = {
  field: CmsHomeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsHomeGroupConnectionMaxArgs = {
  field: CmsHomeFieldsEnum;
};


export type CmsHomeGroupConnectionMinArgs = {
  field: CmsHomeFieldsEnum;
};


export type CmsHomeGroupConnectionSumArgs = {
  field: CmsHomeFieldsEnum;
};

export type CmsHomeSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsHomeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsInstitutionalPage = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Scalars['String'];
  parent: Maybe<Node>;
  sections: Array<CmsBlock>;
  seo: Maybe<CmsInstitutionalPageSeo>;
  versionStatus: Maybe<Scalars['String']>;
};

export type CmsInstitutionalPageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsInstitutionalPageEdge>;
  group: Array<CmsInstitutionalPageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsInstitutionalPage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsInstitutionalPageConnectionDistinctArgs = {
  field: CmsInstitutionalPageFieldsEnum;
};


export type CmsInstitutionalPageConnectionGroupArgs = {
  field: CmsInstitutionalPageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsInstitutionalPageConnectionMaxArgs = {
  field: CmsInstitutionalPageFieldsEnum;
};


export type CmsInstitutionalPageConnectionMinArgs = {
  field: CmsInstitutionalPageFieldsEnum;
};


export type CmsInstitutionalPageConnectionSumArgs = {
  field: CmsInstitutionalPageFieldsEnum;
};

export type CmsInstitutionalPageEdge = {
  next: Maybe<CmsInstitutionalPage>;
  node: CmsInstitutionalPage;
  previous: Maybe<CmsInstitutionalPage>;
};

export type CmsInstitutionalPageFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sections'
  | 'sections___data'
  | 'sections___id'
  | 'sections___name'
  | 'seo___children'
  | 'seo___children___children'
  | 'seo___children___children___children'
  | 'seo___children___children___id'
  | 'seo___children___id'
  | 'seo___children___internal___content'
  | 'seo___children___internal___contentDigest'
  | 'seo___children___internal___contentFilePath'
  | 'seo___children___internal___description'
  | 'seo___children___internal___fieldOwners'
  | 'seo___children___internal___ignoreType'
  | 'seo___children___internal___mediaType'
  | 'seo___children___internal___owner'
  | 'seo___children___internal___type'
  | 'seo___children___parent___children'
  | 'seo___children___parent___id'
  | 'seo___id'
  | 'seo___internal___content'
  | 'seo___internal___contentDigest'
  | 'seo___internal___contentFilePath'
  | 'seo___internal___description'
  | 'seo___internal___fieldOwners'
  | 'seo___internal___ignoreType'
  | 'seo___internal___mediaType'
  | 'seo___internal___owner'
  | 'seo___internal___type'
  | 'seo___parent___children'
  | 'seo___parent___children___children'
  | 'seo___parent___children___id'
  | 'seo___parent___id'
  | 'seo___parent___internal___content'
  | 'seo___parent___internal___contentDigest'
  | 'seo___parent___internal___contentFilePath'
  | 'seo___parent___internal___description'
  | 'seo___parent___internal___fieldOwners'
  | 'seo___parent___internal___ignoreType'
  | 'seo___parent___internal___mediaType'
  | 'seo___parent___internal___owner'
  | 'seo___parent___internal___type'
  | 'seo___parent___parent___children'
  | 'seo___parent___parent___id'
  | 'seo___siteMetadataWithSlug___children'
  | 'seo___siteMetadataWithSlug___children___children'
  | 'seo___siteMetadataWithSlug___children___id'
  | 'seo___siteMetadataWithSlug___description'
  | 'seo___siteMetadataWithSlug___id'
  | 'seo___siteMetadataWithSlug___internal___content'
  | 'seo___siteMetadataWithSlug___internal___contentDigest'
  | 'seo___siteMetadataWithSlug___internal___contentFilePath'
  | 'seo___siteMetadataWithSlug___internal___description'
  | 'seo___siteMetadataWithSlug___internal___fieldOwners'
  | 'seo___siteMetadataWithSlug___internal___ignoreType'
  | 'seo___siteMetadataWithSlug___internal___mediaType'
  | 'seo___siteMetadataWithSlug___internal___owner'
  | 'seo___siteMetadataWithSlug___internal___type'
  | 'seo___siteMetadataWithSlug___parent___children'
  | 'seo___siteMetadataWithSlug___parent___id'
  | 'seo___siteMetadataWithSlug___slug'
  | 'seo___siteMetadataWithSlug___title'
  | 'seo___siteMetadataWithSlug___titleTemplate'
  | 'versionStatus';

export type CmsInstitutionalPageFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  seo: InputMaybe<CmsInstitutionalPageSeoFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};

export type CmsInstitutionalPageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsInstitutionalPageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsInstitutionalPageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsInstitutionalPage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsInstitutionalPageGroupConnectionDistinctArgs = {
  field: CmsInstitutionalPageFieldsEnum;
};


export type CmsInstitutionalPageGroupConnectionGroupArgs = {
  field: CmsInstitutionalPageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsInstitutionalPageGroupConnectionMaxArgs = {
  field: CmsInstitutionalPageFieldsEnum;
};


export type CmsInstitutionalPageGroupConnectionMinArgs = {
  field: CmsInstitutionalPageFieldsEnum;
};


export type CmsInstitutionalPageGroupConnectionSumArgs = {
  field: CmsInstitutionalPageFieldsEnum;
};

export type CmsInstitutionalPageSeo = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  siteMetadataWithSlug: Maybe<CmsInstitutionalPageSeoSiteMetadataWithSlug>;
};

export type CmsInstitutionalPageSeoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsInstitutionalPageSeoEdge>;
  group: Array<CmsInstitutionalPageSeoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsInstitutionalPageSeo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsInstitutionalPageSeoConnectionDistinctArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
};


export type CmsInstitutionalPageSeoConnectionGroupArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsInstitutionalPageSeoConnectionMaxArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
};


export type CmsInstitutionalPageSeoConnectionMinArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
};


export type CmsInstitutionalPageSeoConnectionSumArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
};

export type CmsInstitutionalPageSeoEdge = {
  next: Maybe<CmsInstitutionalPageSeo>;
  node: CmsInstitutionalPageSeo;
  previous: Maybe<CmsInstitutionalPageSeo>;
};

export type CmsInstitutionalPageSeoFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'siteMetadataWithSlug___children'
  | 'siteMetadataWithSlug___children___children'
  | 'siteMetadataWithSlug___children___children___children'
  | 'siteMetadataWithSlug___children___children___id'
  | 'siteMetadataWithSlug___children___id'
  | 'siteMetadataWithSlug___children___internal___content'
  | 'siteMetadataWithSlug___children___internal___contentDigest'
  | 'siteMetadataWithSlug___children___internal___contentFilePath'
  | 'siteMetadataWithSlug___children___internal___description'
  | 'siteMetadataWithSlug___children___internal___fieldOwners'
  | 'siteMetadataWithSlug___children___internal___ignoreType'
  | 'siteMetadataWithSlug___children___internal___mediaType'
  | 'siteMetadataWithSlug___children___internal___owner'
  | 'siteMetadataWithSlug___children___internal___type'
  | 'siteMetadataWithSlug___children___parent___children'
  | 'siteMetadataWithSlug___children___parent___id'
  | 'siteMetadataWithSlug___description'
  | 'siteMetadataWithSlug___id'
  | 'siteMetadataWithSlug___internal___content'
  | 'siteMetadataWithSlug___internal___contentDigest'
  | 'siteMetadataWithSlug___internal___contentFilePath'
  | 'siteMetadataWithSlug___internal___description'
  | 'siteMetadataWithSlug___internal___fieldOwners'
  | 'siteMetadataWithSlug___internal___ignoreType'
  | 'siteMetadataWithSlug___internal___mediaType'
  | 'siteMetadataWithSlug___internal___owner'
  | 'siteMetadataWithSlug___internal___type'
  | 'siteMetadataWithSlug___parent___children'
  | 'siteMetadataWithSlug___parent___children___children'
  | 'siteMetadataWithSlug___parent___children___id'
  | 'siteMetadataWithSlug___parent___id'
  | 'siteMetadataWithSlug___parent___internal___content'
  | 'siteMetadataWithSlug___parent___internal___contentDigest'
  | 'siteMetadataWithSlug___parent___internal___contentFilePath'
  | 'siteMetadataWithSlug___parent___internal___description'
  | 'siteMetadataWithSlug___parent___internal___fieldOwners'
  | 'siteMetadataWithSlug___parent___internal___ignoreType'
  | 'siteMetadataWithSlug___parent___internal___mediaType'
  | 'siteMetadataWithSlug___parent___internal___owner'
  | 'siteMetadataWithSlug___parent___internal___type'
  | 'siteMetadataWithSlug___parent___parent___children'
  | 'siteMetadataWithSlug___parent___parent___id'
  | 'siteMetadataWithSlug___slug'
  | 'siteMetadataWithSlug___title'
  | 'siteMetadataWithSlug___titleTemplate';

export type CmsInstitutionalPageSeoFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  siteMetadataWithSlug: InputMaybe<CmsInstitutionalPageSeoSiteMetadataWithSlugFilterInput>;
};

export type CmsInstitutionalPageSeoGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsInstitutionalPageSeoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsInstitutionalPageSeoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsInstitutionalPageSeo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsInstitutionalPageSeoGroupConnectionDistinctArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
};


export type CmsInstitutionalPageSeoGroupConnectionGroupArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsInstitutionalPageSeoGroupConnectionMaxArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
};


export type CmsInstitutionalPageSeoGroupConnectionMinArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
};


export type CmsInstitutionalPageSeoGroupConnectionSumArgs = {
  field: CmsInstitutionalPageSeoFieldsEnum;
};

export type CmsInstitutionalPageSeoSiteMetadataWithSlug = Node & {
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  slug: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  titleTemplate: Maybe<Scalars['String']>;
};

export type CmsInstitutionalPageSeoSiteMetadataWithSlugConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsInstitutionalPageSeoSiteMetadataWithSlugEdge>;
  group: Array<CmsInstitutionalPageSeoSiteMetadataWithSlugGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsInstitutionalPageSeoSiteMetadataWithSlug>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugConnectionDistinctArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugConnectionGroupArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugConnectionMaxArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugConnectionMinArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugConnectionSumArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
};

export type CmsInstitutionalPageSeoSiteMetadataWithSlugEdge = {
  next: Maybe<CmsInstitutionalPageSeoSiteMetadataWithSlug>;
  node: CmsInstitutionalPageSeoSiteMetadataWithSlug;
  previous: Maybe<CmsInstitutionalPageSeoSiteMetadataWithSlug>;
};

export type CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'description'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'slug'
  | 'title'
  | 'titleTemplate';

export type CmsInstitutionalPageSeoSiteMetadataWithSlugFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  titleTemplate: InputMaybe<StringQueryOperatorInput>;
};

export type CmsInstitutionalPageSeoSiteMetadataWithSlugGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsInstitutionalPageSeoSiteMetadataWithSlugEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsInstitutionalPageSeoSiteMetadataWithSlugGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsInstitutionalPageSeoSiteMetadataWithSlug>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugGroupConnectionDistinctArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugGroupConnectionGroupArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugGroupConnectionMaxArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugGroupConnectionMinArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsInstitutionalPageSeoSiteMetadataWithSlugGroupConnectionSumArgs = {
  field: CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum;
};

export type CmsInstitutionalPageSeoSiteMetadataWithSlugSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsInstitutionalPageSeoSiteMetadataWithSlugFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsInstitutionalPageSeoSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsInstitutionalPageSeoFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsInstitutionalPageSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsInstitutionalPageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsLandingPageCustom = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Scalars['String'];
  parent: Maybe<Node>;
  sections: Array<CmsBlock>;
  seo: Maybe<CmsLandingPageCustomSeo>;
  versionStatus: Maybe<Scalars['String']>;
};

export type CmsLandingPageCustomConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsLandingPageCustomEdge>;
  group: Array<CmsLandingPageCustomGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsLandingPageCustom>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsLandingPageCustomConnectionDistinctArgs = {
  field: CmsLandingPageCustomFieldsEnum;
};


export type CmsLandingPageCustomConnectionGroupArgs = {
  field: CmsLandingPageCustomFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsLandingPageCustomConnectionMaxArgs = {
  field: CmsLandingPageCustomFieldsEnum;
};


export type CmsLandingPageCustomConnectionMinArgs = {
  field: CmsLandingPageCustomFieldsEnum;
};


export type CmsLandingPageCustomConnectionSumArgs = {
  field: CmsLandingPageCustomFieldsEnum;
};

export type CmsLandingPageCustomEdge = {
  next: Maybe<CmsLandingPageCustom>;
  node: CmsLandingPageCustom;
  previous: Maybe<CmsLandingPageCustom>;
};

export type CmsLandingPageCustomFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sections'
  | 'sections___data'
  | 'sections___id'
  | 'sections___name'
  | 'seo___children'
  | 'seo___children___children'
  | 'seo___children___children___children'
  | 'seo___children___children___id'
  | 'seo___children___id'
  | 'seo___children___internal___content'
  | 'seo___children___internal___contentDigest'
  | 'seo___children___internal___contentFilePath'
  | 'seo___children___internal___description'
  | 'seo___children___internal___fieldOwners'
  | 'seo___children___internal___ignoreType'
  | 'seo___children___internal___mediaType'
  | 'seo___children___internal___owner'
  | 'seo___children___internal___type'
  | 'seo___children___parent___children'
  | 'seo___children___parent___id'
  | 'seo___id'
  | 'seo___internal___content'
  | 'seo___internal___contentDigest'
  | 'seo___internal___contentFilePath'
  | 'seo___internal___description'
  | 'seo___internal___fieldOwners'
  | 'seo___internal___ignoreType'
  | 'seo___internal___mediaType'
  | 'seo___internal___owner'
  | 'seo___internal___type'
  | 'seo___parent___children'
  | 'seo___parent___children___children'
  | 'seo___parent___children___id'
  | 'seo___parent___id'
  | 'seo___parent___internal___content'
  | 'seo___parent___internal___contentDigest'
  | 'seo___parent___internal___contentFilePath'
  | 'seo___parent___internal___description'
  | 'seo___parent___internal___fieldOwners'
  | 'seo___parent___internal___ignoreType'
  | 'seo___parent___internal___mediaType'
  | 'seo___parent___internal___owner'
  | 'seo___parent___internal___type'
  | 'seo___parent___parent___children'
  | 'seo___parent___parent___id'
  | 'seo___siteMetadataWithSlug___children'
  | 'seo___siteMetadataWithSlug___children___children'
  | 'seo___siteMetadataWithSlug___children___id'
  | 'seo___siteMetadataWithSlug___description'
  | 'seo___siteMetadataWithSlug___id'
  | 'seo___siteMetadataWithSlug___internal___content'
  | 'seo___siteMetadataWithSlug___internal___contentDigest'
  | 'seo___siteMetadataWithSlug___internal___contentFilePath'
  | 'seo___siteMetadataWithSlug___internal___description'
  | 'seo___siteMetadataWithSlug___internal___fieldOwners'
  | 'seo___siteMetadataWithSlug___internal___ignoreType'
  | 'seo___siteMetadataWithSlug___internal___mediaType'
  | 'seo___siteMetadataWithSlug___internal___owner'
  | 'seo___siteMetadataWithSlug___internal___type'
  | 'seo___siteMetadataWithSlug___parent___children'
  | 'seo___siteMetadataWithSlug___parent___id'
  | 'seo___siteMetadataWithSlug___slug'
  | 'seo___siteMetadataWithSlug___title'
  | 'versionStatus';

export type CmsLandingPageCustomFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  seo: InputMaybe<CmsLandingPageCustomSeoFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};

export type CmsLandingPageCustomGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsLandingPageCustomEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsLandingPageCustomGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsLandingPageCustom>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsLandingPageCustomGroupConnectionDistinctArgs = {
  field: CmsLandingPageCustomFieldsEnum;
};


export type CmsLandingPageCustomGroupConnectionGroupArgs = {
  field: CmsLandingPageCustomFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsLandingPageCustomGroupConnectionMaxArgs = {
  field: CmsLandingPageCustomFieldsEnum;
};


export type CmsLandingPageCustomGroupConnectionMinArgs = {
  field: CmsLandingPageCustomFieldsEnum;
};


export type CmsLandingPageCustomGroupConnectionSumArgs = {
  field: CmsLandingPageCustomFieldsEnum;
};

export type CmsLandingPageCustomSeo = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  siteMetadataWithSlug: Maybe<CmsLandingPageCustomSeoSiteMetadataWithSlug>;
};

export type CmsLandingPageCustomSeoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsLandingPageCustomSeoEdge>;
  group: Array<CmsLandingPageCustomSeoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsLandingPageCustomSeo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsLandingPageCustomSeoConnectionDistinctArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
};


export type CmsLandingPageCustomSeoConnectionGroupArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsLandingPageCustomSeoConnectionMaxArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
};


export type CmsLandingPageCustomSeoConnectionMinArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
};


export type CmsLandingPageCustomSeoConnectionSumArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
};

export type CmsLandingPageCustomSeoEdge = {
  next: Maybe<CmsLandingPageCustomSeo>;
  node: CmsLandingPageCustomSeo;
  previous: Maybe<CmsLandingPageCustomSeo>;
};

export type CmsLandingPageCustomSeoFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'siteMetadataWithSlug___children'
  | 'siteMetadataWithSlug___children___children'
  | 'siteMetadataWithSlug___children___children___children'
  | 'siteMetadataWithSlug___children___children___id'
  | 'siteMetadataWithSlug___children___id'
  | 'siteMetadataWithSlug___children___internal___content'
  | 'siteMetadataWithSlug___children___internal___contentDigest'
  | 'siteMetadataWithSlug___children___internal___contentFilePath'
  | 'siteMetadataWithSlug___children___internal___description'
  | 'siteMetadataWithSlug___children___internal___fieldOwners'
  | 'siteMetadataWithSlug___children___internal___ignoreType'
  | 'siteMetadataWithSlug___children___internal___mediaType'
  | 'siteMetadataWithSlug___children___internal___owner'
  | 'siteMetadataWithSlug___children___internal___type'
  | 'siteMetadataWithSlug___children___parent___children'
  | 'siteMetadataWithSlug___children___parent___id'
  | 'siteMetadataWithSlug___description'
  | 'siteMetadataWithSlug___id'
  | 'siteMetadataWithSlug___internal___content'
  | 'siteMetadataWithSlug___internal___contentDigest'
  | 'siteMetadataWithSlug___internal___contentFilePath'
  | 'siteMetadataWithSlug___internal___description'
  | 'siteMetadataWithSlug___internal___fieldOwners'
  | 'siteMetadataWithSlug___internal___ignoreType'
  | 'siteMetadataWithSlug___internal___mediaType'
  | 'siteMetadataWithSlug___internal___owner'
  | 'siteMetadataWithSlug___internal___type'
  | 'siteMetadataWithSlug___parent___children'
  | 'siteMetadataWithSlug___parent___children___children'
  | 'siteMetadataWithSlug___parent___children___id'
  | 'siteMetadataWithSlug___parent___id'
  | 'siteMetadataWithSlug___parent___internal___content'
  | 'siteMetadataWithSlug___parent___internal___contentDigest'
  | 'siteMetadataWithSlug___parent___internal___contentFilePath'
  | 'siteMetadataWithSlug___parent___internal___description'
  | 'siteMetadataWithSlug___parent___internal___fieldOwners'
  | 'siteMetadataWithSlug___parent___internal___ignoreType'
  | 'siteMetadataWithSlug___parent___internal___mediaType'
  | 'siteMetadataWithSlug___parent___internal___owner'
  | 'siteMetadataWithSlug___parent___internal___type'
  | 'siteMetadataWithSlug___parent___parent___children'
  | 'siteMetadataWithSlug___parent___parent___id'
  | 'siteMetadataWithSlug___slug'
  | 'siteMetadataWithSlug___title';

export type CmsLandingPageCustomSeoFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  siteMetadataWithSlug: InputMaybe<CmsLandingPageCustomSeoSiteMetadataWithSlugFilterInput>;
};

export type CmsLandingPageCustomSeoGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsLandingPageCustomSeoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsLandingPageCustomSeoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsLandingPageCustomSeo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsLandingPageCustomSeoGroupConnectionDistinctArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
};


export type CmsLandingPageCustomSeoGroupConnectionGroupArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsLandingPageCustomSeoGroupConnectionMaxArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
};


export type CmsLandingPageCustomSeoGroupConnectionMinArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
};


export type CmsLandingPageCustomSeoGroupConnectionSumArgs = {
  field: CmsLandingPageCustomSeoFieldsEnum;
};

export type CmsLandingPageCustomSeoSiteMetadataWithSlug = Node & {
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  slug: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type CmsLandingPageCustomSeoSiteMetadataWithSlugConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsLandingPageCustomSeoSiteMetadataWithSlugEdge>;
  group: Array<CmsLandingPageCustomSeoSiteMetadataWithSlugGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsLandingPageCustomSeoSiteMetadataWithSlug>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugConnectionDistinctArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugConnectionGroupArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugConnectionMaxArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugConnectionMinArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugConnectionSumArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
};

export type CmsLandingPageCustomSeoSiteMetadataWithSlugEdge = {
  next: Maybe<CmsLandingPageCustomSeoSiteMetadataWithSlug>;
  node: CmsLandingPageCustomSeoSiteMetadataWithSlug;
  previous: Maybe<CmsLandingPageCustomSeoSiteMetadataWithSlug>;
};

export type CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'description'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'slug'
  | 'title';

export type CmsLandingPageCustomSeoSiteMetadataWithSlugFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsLandingPageCustomSeoSiteMetadataWithSlugGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsLandingPageCustomSeoSiteMetadataWithSlugEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsLandingPageCustomSeoSiteMetadataWithSlugGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsLandingPageCustomSeoSiteMetadataWithSlug>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugGroupConnectionDistinctArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugGroupConnectionGroupArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugGroupConnectionMaxArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugGroupConnectionMinArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
};


export type CmsLandingPageCustomSeoSiteMetadataWithSlugGroupConnectionSumArgs = {
  field: CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum;
};

export type CmsLandingPageCustomSeoSiteMetadataWithSlugSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsLandingPageCustomSeoSiteMetadataWithSlugFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsLandingPageCustomSeoSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsLandingPageCustomSeoFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsLandingPageCustomSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsLandingPageCustomFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CmsPoliticsPage = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  menuLateral: Maybe<CmsPoliticsPageMenuLateral>;
  name: Scalars['String'];
  parent: Maybe<Node>;
  sections: Array<CmsBlock>;
  seo: Maybe<CmsPoliticsPageSeo>;
  versionStatus: Maybe<Scalars['String']>;
};

export type CmsPoliticsPageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsPoliticsPageEdge>;
  group: Array<CmsPoliticsPageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsPoliticsPage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsPoliticsPageConnectionDistinctArgs = {
  field: CmsPoliticsPageFieldsEnum;
};


export type CmsPoliticsPageConnectionGroupArgs = {
  field: CmsPoliticsPageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsPoliticsPageConnectionMaxArgs = {
  field: CmsPoliticsPageFieldsEnum;
};


export type CmsPoliticsPageConnectionMinArgs = {
  field: CmsPoliticsPageFieldsEnum;
};


export type CmsPoliticsPageConnectionSumArgs = {
  field: CmsPoliticsPageFieldsEnum;
};

export type CmsPoliticsPageEdge = {
  next: Maybe<CmsPoliticsPage>;
  node: CmsPoliticsPage;
  previous: Maybe<CmsPoliticsPage>;
};

export type CmsPoliticsPageFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'menuLateral___menuLateral___title'
  | 'name'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sections'
  | 'sections___data'
  | 'sections___id'
  | 'sections___name'
  | 'seo___siteMetadataWithSlug___description'
  | 'seo___siteMetadataWithSlug___slug'
  | 'seo___siteMetadataWithSlug___title'
  | 'versionStatus';

export type CmsPoliticsPageFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  menuLateral: InputMaybe<CmsPoliticsPageMenuLateralFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  seo: InputMaybe<CmsPoliticsPageSeoFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};

export type CmsPoliticsPageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<CmsPoliticsPageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CmsPoliticsPageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CmsPoliticsPage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type CmsPoliticsPageGroupConnectionDistinctArgs = {
  field: CmsPoliticsPageFieldsEnum;
};


export type CmsPoliticsPageGroupConnectionGroupArgs = {
  field: CmsPoliticsPageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type CmsPoliticsPageGroupConnectionMaxArgs = {
  field: CmsPoliticsPageFieldsEnum;
};


export type CmsPoliticsPageGroupConnectionMinArgs = {
  field: CmsPoliticsPageFieldsEnum;
};


export type CmsPoliticsPageGroupConnectionSumArgs = {
  field: CmsPoliticsPageFieldsEnum;
};

export type CmsPoliticsPageMenuLateral = {
  menuLateral: Maybe<CmsPoliticsPageMenuLateralMenuLateral>;
};

export type CmsPoliticsPageMenuLateralFilterInput = {
  menuLateral: InputMaybe<CmsPoliticsPageMenuLateralMenuLateralFilterInput>;
};

export type CmsPoliticsPageMenuLateralMenuLateral = {
  title: Maybe<Scalars['String']>;
};

export type CmsPoliticsPageMenuLateralMenuLateralFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsPoliticsPageSeo = {
  siteMetadataWithSlug: Maybe<CmsPoliticsPageSeoSiteMetadataWithSlug>;
};

export type CmsPoliticsPageSeoFilterInput = {
  siteMetadataWithSlug: InputMaybe<CmsPoliticsPageSeoSiteMetadataWithSlugFilterInput>;
};

export type CmsPoliticsPageSeoSiteMetadataWithSlug = {
  description: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type CmsPoliticsPageSeoSiteMetadataWithSlugFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CmsPoliticsPageSortInput = {
  fields: InputMaybe<Array<InputMaybe<CmsPoliticsPageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  ne: InputMaybe<Scalars['Date']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type File = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** Person data input to the newsletter. */
export type IPersonNewsletter = {
  /** Person's email. */
  email: Scalars['String'];
  /** Person's name. */
  name: Scalars['String'];
};

/** Shopping cart input. */
export type IStoreCart = {
  /** Order information, including `orderNumber` and `acceptedOffer`. */
  order: IStoreOrder;
};

export type IStoreCurrency = {
  /** Currency code (e.g: USD). */
  code: Scalars['String'];
  /** Currency symbol (e.g: $). */
  symbol: Scalars['String'];
};

/** Image input. */
export type IStoreImage = {
  /** Alias for the input image. */
  alternateName: Scalars['String'];
  /** Image input URL. */
  url: Scalars['String'];
};

/** Offer input. */
export type IStoreOffer = {
  /** Information on the item being offered. */
  itemOffered: IStoreProduct;
  /** This is displayed as the "from" price in the context of promotions' price comparison. This may change before it reaches the shelf. */
  listPrice: Scalars['Float'];
  /** Also known as spot price. */
  price: Scalars['Float'];
  /** Number of items offered. */
  quantity: Scalars['Int'];
  /** Seller responsible for the offer. */
  seller: IStoreOrganization;
};

/** Order input. */
export type IStoreOrder = {
  /** Array with information on each accepted offer. */
  acceptedOffer: Array<IStoreOffer>;
  /** ID of the order in [VTEX order management](https://help.vtex.com/en/tutorial/license-manager-resources-oms--60QcBsvWeum02cFi3GjBzg#). */
  orderNumber: Scalars['String'];
};

/** Organization input. */
export type IStoreOrganization = {
  /** Organization ID. */
  identifier: Scalars['String'];
};

/** Client profile data. */
export type IStorePerson = {
  /** Client email. */
  email: Scalars['String'];
  /** Client last name. */
  familyName: Scalars['String'];
  /** Client first name. */
  givenName: Scalars['String'];
  /** Client ID. */
  id: Scalars['String'];
};

/** Product input. Products are variants within product groups, equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type IStoreProduct = {
  /** Custom Product Additional Properties. */
  additionalProperty: InputMaybe<Array<IStorePropertyValue>>;
  /** Array of product images. */
  image: Array<IStoreImage>;
  /** Product name. */
  name: Scalars['String'];
  /** Stock Keeping Unit. Merchant-specific ID for the product. */
  sku: Scalars['String'];
};

export type IStorePropertyValue = {
  /** Property name. */
  name: Scalars['String'];
  /** Property id. This propert changes according to the content of the object. */
  propertyID: InputMaybe<Scalars['String']>;
  /** Property value. May hold a string or the string representation of an object. */
  value: Scalars['ObjectOrString'];
  /** Specifies the nature of the value */
  valueReference: Scalars['String'];
};

/** Selected search facet input. */
export type IStoreSelectedFacet = {
  /** Selected search facet key. */
  key: Scalars['String'];
  /** Selected search facet value. */
  value: Scalars['String'];
};

/** Session input. */
export type IStoreSession = {
  /** Session input channel. */
  channel: InputMaybe<Scalars['String']>;
  /** Session input country. */
  country: Scalars['String'];
  /** Session input currency. */
  currency: IStoreCurrency;
  /** Session input locale. */
  locale: Scalars['String'];
  /** Session input postal code. */
  person: InputMaybe<IStorePerson>;
  /** Session input postal code. */
  postalCode: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  contentFilePath: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  contentDigest: InputMaybe<StringQueryOperatorInput>;
  contentFilePath: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fieldOwners: InputMaybe<StringQueryOperatorInput>;
  ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type JsonPropsCmsObjectQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSONPropsCmsObject']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSONPropsCmsObject']>>>;
  ne: InputMaybe<Scalars['JSONPropsCmsObject']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSONPropsCmsObject']>>>;
};

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>;
  glob: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne: InputMaybe<Scalars['JSON']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  /** Subscribes a new person to the newsletter list. */
  subscribeToNewsletter: Maybe<PersonNewsletter>;
  /** Checks for changes between the cart presented in the UI and the cart stored in the ecommerce platform. If changes are detected, it returns the cart stored on the platform. Otherwise, it returns `null`. */
  validateCart: Maybe<StoreCart>;
  /** Updates a web session with the specified values. */
  validateSession: Maybe<StoreSession>;
};


export type MutationSubscribeToNewsletterArgs = {
  data: IPersonNewsletter;
};


export type MutationValidateCartArgs = {
  cart: IStoreCart;
  session: InputMaybe<IStoreSession>;
};


export type MutationValidateSessionArgs = {
  search: Scalars['String'];
  session: IStoreSession;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

/** Newsletter information. */
export type PersonNewsletter = {
  /** Person's ID in the newsletter list. */
  id: Scalars['String'];
};

export type Query = {
  allCmsCategory: CmsCategoryConnection;
  allCmsCategoryInfoPageSiteMetadataWithSlugSeo: CmsCategoryInfoPageSiteMetadataWithSlugSeoConnection;
  allCmsCollection: CmsCollectionConnection;
  allCmsCollectionInfoPageSiteMetadataWithSlugConfigCollection: CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionConnection;
  allCmsCollectionInfoPageSiteMetadataWithSlugSeo: CmsCollectionInfoPageSiteMetadataWithSlugSeoConnection;
  allCmsFooter: CmsFooterConnection;
  allCmsFooterContatoFooterContactsButtonContact: CmsFooterContatoFooterContactsButtonContactConnection;
  allCmsFooterContatoFooterContactsInfoAtendimento: CmsFooterContatoFooterContactsInfoAtendimentoConnection;
  allCmsFooterContatoFooterContactsSocialMediaListSocialMedia: CmsFooterContatoFooterContactsSocialMediaListSocialMediaConnection;
  allCmsFooterInfosRodapeInformations: CmsFooterInfosRodapeInformationsConnection;
  allCmsFooterMenuFooterMenuColumns: CmsFooterMenuFooterMenuColumnsConnection;
  allCmsFooterMenuFooterMenuColumnsLinks: CmsFooterMenuFooterMenuColumnsLinksConnection;
  allCmsFooterPagamentosDisponiveisPaymentsListPayment: CmsFooterPagamentosDisponiveisPaymentsListPaymentConnection;
  allCmsFooterSelosCertificatesListCertificates: CmsFooterSelosCertificatesListCertificatesConnection;
  allCmsFooterSelosCertificatesListPayment: CmsFooterSelosCertificatesListPaymentConnection;
  allCmsHeader: CmsHeaderConnection;
  allCmsHeaderMenuMenuItemsMenuItem: CmsHeaderMenuMenuItemsMenuItemConnection;
  allCmsHeaderMenuMenuItemsMenuItemSubmenu: CmsHeaderMenuMenuItemsMenuItemSubmenuConnection;
  allCmsHeaderMenuMenuItemsMenuItemSubmenuLinks: CmsHeaderMenuMenuItemsMenuItemSubmenuLinksConnection;
  allCmsHeaderTopbarTopbarText: CmsHeaderTopbarTopbarTextConnection;
  allCmsHome: CmsHomeConnection;
  allCmsInstitutionalPage: CmsInstitutionalPageConnection;
  allCmsInstitutionalPageSeo: CmsInstitutionalPageSeoConnection;
  allCmsInstitutionalPageSeoSiteMetadataWithSlug: CmsInstitutionalPageSeoSiteMetadataWithSlugConnection;
  allCmsLandingPageCustom: CmsLandingPageCustomConnection;
  allCmsLandingPageCustomSeo: CmsLandingPageCustomSeoConnection;
  allCmsLandingPageCustomSeoSiteMetadataWithSlug: CmsLandingPageCustomSeoSiteMetadataWithSlugConnection;
  allCmsPoliticsPage: CmsPoliticsPageConnection;
  /** Returns information about all collections. */
  allCollections: StoreCollectionConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  /** Returns information about all products. */
  allProducts: StoreProductConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  cmsCategory: Maybe<CmsCategory>;
  cmsCategoryInfoPageSiteMetadataWithSlugSeo: Maybe<CmsCategoryInfoPageSiteMetadataWithSlugSeo>;
  cmsCollection: Maybe<CmsCollection>;
  cmsCollectionInfoPageSiteMetadataWithSlugConfigCollection: Maybe<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection>;
  cmsCollectionInfoPageSiteMetadataWithSlugSeo: Maybe<CmsCollectionInfoPageSiteMetadataWithSlugSeo>;
  cmsFooter: Maybe<CmsFooter>;
  cmsFooterContatoFooterContactsButtonContact: Maybe<CmsFooterContatoFooterContactsButtonContact>;
  cmsFooterContatoFooterContactsInfoAtendimento: Maybe<CmsFooterContatoFooterContactsInfoAtendimento>;
  cmsFooterContatoFooterContactsSocialMediaListSocialMedia: Maybe<CmsFooterContatoFooterContactsSocialMediaListSocialMedia>;
  cmsFooterInfosRodapeInformations: Maybe<CmsFooterInfosRodapeInformations>;
  cmsFooterMenuFooterMenuColumns: Maybe<CmsFooterMenuFooterMenuColumns>;
  cmsFooterMenuFooterMenuColumnsLinks: Maybe<CmsFooterMenuFooterMenuColumnsLinks>;
  cmsFooterPagamentosDisponiveisPaymentsListPayment: Maybe<CmsFooterPagamentosDisponiveisPaymentsListPayment>;
  cmsFooterSelosCertificatesListCertificates: Maybe<CmsFooterSelosCertificatesListCertificates>;
  cmsFooterSelosCertificatesListPayment: Maybe<CmsFooterSelosCertificatesListPayment>;
  cmsHeader: Maybe<CmsHeader>;
  cmsHeaderMenuMenuItemsMenuItem: Maybe<CmsHeaderMenuMenuItemsMenuItem>;
  cmsHeaderMenuMenuItemsMenuItemSubmenu: Maybe<CmsHeaderMenuMenuItemsMenuItemSubmenu>;
  cmsHeaderMenuMenuItemsMenuItemSubmenuLinks: Maybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinks>;
  cmsHeaderTopbarTopbarText: Maybe<CmsHeaderTopbarTopbarText>;
  cmsHome: Maybe<CmsHome>;
  cmsInstitutionalPage: Maybe<CmsInstitutionalPage>;
  cmsInstitutionalPageSeo: Maybe<CmsInstitutionalPageSeo>;
  cmsInstitutionalPageSeoSiteMetadataWithSlug: Maybe<CmsInstitutionalPageSeoSiteMetadataWithSlug>;
  cmsLandingPageCustom: Maybe<CmsLandingPageCustom>;
  cmsLandingPageCustomSeo: Maybe<CmsLandingPageCustomSeo>;
  cmsLandingPageCustomSeoSiteMetadataWithSlug: Maybe<CmsLandingPageCustomSeoSiteMetadataWithSlug>;
  cmsPoliticsPage: Maybe<CmsPoliticsPage>;
  /** Returns the details of a collection based on the collection slug. */
  collection: StoreCollection;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  /** Returns the details of a product based on the specified locator. */
  product: StoreProduct;
  /** Returns the result of a product, facet, or suggestion search. */
  search: StoreSearchResult;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
};


export type QueryAllCmsCategoryArgs = {
  filter: InputMaybe<CmsCategoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsCategorySortInput>;
};


export type QueryAllCmsCategoryInfoPageSiteMetadataWithSlugSeoArgs = {
  filter: InputMaybe<CmsCategoryInfoPageSiteMetadataWithSlugSeoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsCategoryInfoPageSiteMetadataWithSlugSeoSortInput>;
};


export type QueryAllCmsCollectionArgs = {
  filter: InputMaybe<CmsCollectionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsCollectionSortInput>;
};


export type QueryAllCmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionArgs = {
  filter: InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionSortInput>;
};


export type QueryAllCmsCollectionInfoPageSiteMetadataWithSlugSeoArgs = {
  filter: InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugSeoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsCollectionInfoPageSiteMetadataWithSlugSeoSortInput>;
};


export type QueryAllCmsFooterArgs = {
  filter: InputMaybe<CmsFooterFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterSortInput>;
};


export type QueryAllCmsFooterContatoFooterContactsButtonContactArgs = {
  filter: InputMaybe<CmsFooterContatoFooterContactsButtonContactFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterContatoFooterContactsButtonContactSortInput>;
};


export type QueryAllCmsFooterContatoFooterContactsInfoAtendimentoArgs = {
  filter: InputMaybe<CmsFooterContatoFooterContactsInfoAtendimentoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterContatoFooterContactsInfoAtendimentoSortInput>;
};


export type QueryAllCmsFooterContatoFooterContactsSocialMediaListSocialMediaArgs = {
  filter: InputMaybe<CmsFooterContatoFooterContactsSocialMediaListSocialMediaFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterContatoFooterContactsSocialMediaListSocialMediaSortInput>;
};


export type QueryAllCmsFooterInfosRodapeInformationsArgs = {
  filter: InputMaybe<CmsFooterInfosRodapeInformationsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterInfosRodapeInformationsSortInput>;
};


export type QueryAllCmsFooterMenuFooterMenuColumnsArgs = {
  filter: InputMaybe<CmsFooterMenuFooterMenuColumnsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterMenuFooterMenuColumnsSortInput>;
};


export type QueryAllCmsFooterMenuFooterMenuColumnsLinksArgs = {
  filter: InputMaybe<CmsFooterMenuFooterMenuColumnsLinksFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterMenuFooterMenuColumnsLinksSortInput>;
};


export type QueryAllCmsFooterPagamentosDisponiveisPaymentsListPaymentArgs = {
  filter: InputMaybe<CmsFooterPagamentosDisponiveisPaymentsListPaymentFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterPagamentosDisponiveisPaymentsListPaymentSortInput>;
};


export type QueryAllCmsFooterSelosCertificatesListCertificatesArgs = {
  filter: InputMaybe<CmsFooterSelosCertificatesListCertificatesFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterSelosCertificatesListCertificatesSortInput>;
};


export type QueryAllCmsFooterSelosCertificatesListPaymentArgs = {
  filter: InputMaybe<CmsFooterSelosCertificatesListPaymentFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsFooterSelosCertificatesListPaymentSortInput>;
};


export type QueryAllCmsHeaderArgs = {
  filter: InputMaybe<CmsHeaderFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsHeaderSortInput>;
};


export type QueryAllCmsHeaderMenuMenuItemsMenuItemArgs = {
  filter: InputMaybe<CmsHeaderMenuMenuItemsMenuItemFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSortInput>;
};


export type QueryAllCmsHeaderMenuMenuItemsMenuItemSubmenuArgs = {
  filter: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuSortInput>;
};


export type QueryAllCmsHeaderMenuMenuItemsMenuItemSubmenuLinksArgs = {
  filter: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksSortInput>;
};


export type QueryAllCmsHeaderTopbarTopbarTextArgs = {
  filter: InputMaybe<CmsHeaderTopbarTopbarTextFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsHeaderTopbarTopbarTextSortInput>;
};


export type QueryAllCmsHomeArgs = {
  filter: InputMaybe<CmsHomeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsHomeSortInput>;
};


export type QueryAllCmsInstitutionalPageArgs = {
  filter: InputMaybe<CmsInstitutionalPageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsInstitutionalPageSortInput>;
};


export type QueryAllCmsInstitutionalPageSeoArgs = {
  filter: InputMaybe<CmsInstitutionalPageSeoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsInstitutionalPageSeoSortInput>;
};


export type QueryAllCmsInstitutionalPageSeoSiteMetadataWithSlugArgs = {
  filter: InputMaybe<CmsInstitutionalPageSeoSiteMetadataWithSlugFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsInstitutionalPageSeoSiteMetadataWithSlugSortInput>;
};


export type QueryAllCmsLandingPageCustomArgs = {
  filter: InputMaybe<CmsLandingPageCustomFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsLandingPageCustomSortInput>;
};


export type QueryAllCmsLandingPageCustomSeoArgs = {
  filter: InputMaybe<CmsLandingPageCustomSeoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsLandingPageCustomSeoSortInput>;
};


export type QueryAllCmsLandingPageCustomSeoSiteMetadataWithSlugArgs = {
  filter: InputMaybe<CmsLandingPageCustomSeoSiteMetadataWithSlugFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsLandingPageCustomSeoSiteMetadataWithSlugSortInput>;
};


export type QueryAllCmsPoliticsPageArgs = {
  filter: InputMaybe<CmsPoliticsPageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CmsPoliticsPageSortInput>;
};


export type QueryAllCollectionsArgs = {
  after: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


export type QueryAllProductsArgs = {
  after: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};


export type QueryCmsCategoryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  infoPage: InputMaybe<CmsCategoryInfoPageFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsCategoryInfoPageSiteMetadataWithSlugSeoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsCollectionArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  infoPage: InputMaybe<CmsCollectionInfoPageFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsCollectionInfoPageSiteMetadataWithSlugConfigCollectionArgs = {
  children: InputMaybe<NodeFilterListInput>;
  collection: InputMaybe<StringQueryOperatorInput>;
  hideUnavailableItems: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  maxQuantityProducts: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  rangePrice: InputMaybe<StringQueryOperatorInput>;
  sort: InputMaybe<StringQueryOperatorInput>;
  term: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsCollectionInfoPageSiteMetadataWithSlugSeoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsFooterArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contatoFooter: InputMaybe<CmsFooterContatoFooterFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  infosRodape: InputMaybe<CmsFooterInfosRodapeFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  menuFooter: InputMaybe<CmsFooterMenuFooterFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  pagamentosDisponiveis: InputMaybe<CmsFooterPagamentosDisponiveisFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  selos: InputMaybe<CmsFooterSelosFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsFooterContatoFooterContactsButtonContactArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  textButton: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsFooterContatoFooterContactsInfoAtendimentoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  text: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsFooterContatoFooterContactsSocialMediaListSocialMediaArgs = {
  alt: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  target: InputMaybe<BooleanQueryOperatorInput>;
};


export type QueryCmsFooterInfosRodapeInformationsArgs = {
  children: InputMaybe<NodeFilterListInput>;
  copyright: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  infoBusiness: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QueryCmsFooterMenuFooterMenuColumnsArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  links: InputMaybe<CmsFooterMenuFooterMenuColumnsLinksFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsFooterMenuFooterMenuColumnsLinksArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  target: InputMaybe<BooleanQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsFooterPagamentosDisponiveisPaymentsListPaymentArgs = {
  alt: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QueryCmsFooterSelosCertificatesListCertificatesArgs = {
  alt: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  target: InputMaybe<BooleanQueryOperatorInput>;
};


export type QueryCmsFooterSelosCertificatesListPaymentArgs = {
  alt: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QueryCmsHeaderArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  menu: InputMaybe<CmsHeaderMenuFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  topbar: InputMaybe<CmsHeaderTopbarFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsHeaderMenuMenuItemsMenuItemArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  submenu: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuFilterListInput>;
  submenuImage: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsHeaderMenuMenuItemsMenuItemSubmenuArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  links: InputMaybe<CmsHeaderMenuMenuItemsMenuItemSubmenuLinksFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsHeaderMenuMenuItemsMenuItemSubmenuLinksArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  linkHighlight: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  target: InputMaybe<BooleanQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsHeaderTopbarTopbarTextArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  text: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsHomeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsInstitutionalPageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  seo: InputMaybe<CmsInstitutionalPageSeoFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsInstitutionalPageSeoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  siteMetadataWithSlug: InputMaybe<CmsInstitutionalPageSeoSiteMetadataWithSlugFilterInput>;
};


export type QueryCmsInstitutionalPageSeoSiteMetadataWithSlugArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  titleTemplate: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsLandingPageCustomArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  seo: InputMaybe<CmsLandingPageCustomSeoFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsLandingPageCustomSeoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  siteMetadataWithSlug: InputMaybe<CmsLandingPageCustomSeoSiteMetadataWithSlugFilterInput>;
};


export type QueryCmsLandingPageCustomSeoSiteMetadataWithSlugArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCmsPoliticsPageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  menuLateral: InputMaybe<CmsPoliticsPageMenuLateralFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sections: InputMaybe<CmsBlockFilterListInput>;
  seo: InputMaybe<CmsPoliticsPageSeoFilterInput>;
  versionStatus: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCollectionArgs = {
  slug: Scalars['String'];
};


export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryProductArgs = {
  locator: Array<IStoreSelectedFacet>;
};


export type QuerySearchArgs = {
  after: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  selectedFacets: InputMaybe<Array<IStoreSelectedFacet>>;
  sort?: InputMaybe<StoreSort>;
  term?: InputMaybe<Scalars['String']>;
};


export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  flags: InputMaybe<SiteFlagsFilterInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  flags: Maybe<SiteFlags>;
  graphqlTypegen: Maybe<Scalars['Boolean']>;
  host: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  port: Maybe<Scalars['Int']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  trailingSlash: Maybe<Scalars['String']>;
};


export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id';

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'flags___FAST_DEV'
  | 'flags___PARALLEL_SOURCING'
  | 'graphqlTypegen'
  | 'host'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'jsxRuntime'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pathPrefix'
  | 'polyfill'
  | 'port'
  | 'siteMetadata___author'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___title'
  | 'siteMetadata___titleTemplate'
  | 'trailingSlash';

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  flags: InputMaybe<SiteFlagsFilterInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFlags = {
  FAST_DEV: Maybe<Scalars['Boolean']>;
  PARALLEL_SOURCING: Maybe<Scalars['Boolean']>;
};

export type SiteFlagsFilterInput = {
  FAST_DEV: InputMaybe<BooleanQueryOperatorInput>;
  PARALLEL_SOURCING: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'functionRoute'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginName'
  | 'relativeCompiledFilePath';

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  pageContext: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'pageContext'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'path'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___contentFilePath'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___id'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___contentFilePath'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___name'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___contentFilePath'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___resolve'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___version';

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<Scalars['JSON']>;
  resolve: Maybe<Scalars['String']>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___contentFilePath'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___contentFilePath'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___contentFilePath'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___contentFilePath'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___contentFilePath'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___contentFilePath'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version';

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  author: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  titleTemplate: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  author: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  siteUrl: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  titleTemplate: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SkuVariants = {
  /** SKU property values for the current SKU. */
  activeVariations: Maybe<Scalars['ActiveVariations']>;
  /** All available options for each SKU variant property, indexed by their name. */
  allVariantsByName: Maybe<Scalars['VariantsByName']>;
  /**
   * Available options for each varying SKU property, taking into account the
   * `dominantVariantName` property. Returns all available options for the
   * dominant property, and only options that can be combined with its current
   * value for other properties.
   */
  availableVariations: Maybe<Scalars['FormattedVariants']>;
  /**
   * Maps property value combinations to their respective SKU's slug. Enables
   * us to retrieve the slug for the SKU that matches the currently selected
   * variations in O(1) time.
   */
  slugsMap: Maybe<Scalars['SlugsMap']>;
};


export type SkuVariantsAvailableVariationsArgs = {
  dominantVariantName: Scalars['String'];
};


export type SkuVariantsSlugsMapArgs = {
  dominantVariantName: Scalars['String'];
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

/** Aggregate offer information, for a given SKU that is available to be fulfilled by multiple sellers. */
export type StoreAggregateOffer = {
  /** Highest price among all sellers. */
  highPrice: Scalars['Float'];
  /** Lowest price among all sellers. */
  lowPrice: Scalars['Float'];
  /** Number of sellers selling this SKU. */
  offerCount: Scalars['Int'];
  /** Array with information on each available offer. */
  offers: Array<StoreOffer>;
  /** ISO code of the currency used for the offer prices. */
  priceCurrency: Scalars['String'];
};

/** Average rating, based on multiple ratings or reviews. */
export type StoreAggregateRating = {
  /** Value of the aggregate rating. */
  ratingValue: Scalars['Float'];
  /** Total number of ratings. */
  reviewCount: Scalars['Int'];
};

/** information about the author of a product review or rating. */
export type StoreAuthor = {
  /** Author name. */
  name: Scalars['String'];
};

/** Brand of a given product. */
export type StoreBrand = {
  /** Brand name. */
  name: Scalars['String'];
};

/** List of items consisting of chain linked web pages, ending with the current page. */
export type StoreBreadcrumbList = {
  /** Array with breadcrumb elements. */
  itemListElement: Array<StoreListItem>;
  /** Number of breadcrumbs in the list. */
  numberOfItems: Scalars['Int'];
};

/** Shopping cart information. */
export type StoreCart = {
  /** List of shopping cart messages. */
  messages: Array<StoreCartMessage>;
  /** Order information, including `orderNumber` and `acceptedOffer`. */
  order: StoreOrder;
};

/** Shopping cart message. */
export type StoreCartMessage = {
  /** Shopping cart message status, which can be `INFO`, `WARNING` or `ERROR`. */
  status: StoreStatus;
  /** Shopping cart message text. */
  text: Scalars['String'];
};

/** Product collection information. */
export type StoreCollection = {
  /** List of items consisting of chain linked web pages, ending with the current page. */
  breadcrumbList: StoreBreadcrumbList;
  /** Collection ID. */
  id: Scalars['ID'];
  /** Collection meta information. Used for search. */
  meta: StoreCollectionMeta;
  /** Meta tag data. */
  seo: StoreSeo;
  /** Corresponding collection URL slug, with which to retrieve this entity. */
  slug: Scalars['String'];
  /** Collection type. */
  type: StoreCollectionType;
};

/** Collection connections, including pagination information and collections returned by the query. */
export type StoreCollectionConnection = {
  /** Array with collection connection page edges, each containing a collection and a corresponding cursor.. */
  edges: Array<StoreCollectionEdge>;
  /** Collection pagination information. */
  pageInfo: StorePageInfo;
};

/** Each collection edge contains a `node`, with product collection information, and a `cursor`, that can be used as a reference for pagination. */
export type StoreCollectionEdge = {
  /** Collection cursor. Used as pagination reference. */
  cursor: Scalars['String'];
  /** Each collection node contains the information of a product collection returned by the query. */
  node: StoreCollection;
};

/** Product collection facet, used for search. */
export type StoreCollectionFacet = {
  /** Facet key. */
  key: Scalars['String'];
  /** Facet value. */
  value: Scalars['String'];
};

/** Collection meta information. Used for search. */
export type StoreCollectionMeta = {
  /** List of selected collection facets. */
  selectedFacets: Array<StoreCollectionFacet>;
};

/** Product collection type. Possible values are `Department`, `Category`, `Brand`, `Cluster`, `SubCategory` or `Collection`. */
export type StoreCollectionType =
  /** Product brand. */
  | 'Brand'
  /** Second level of product categorization. */
  | 'Category'
  /** Product cluster. */
  | 'Cluster'
  /** Product collection. */
  | 'Collection'
  /** First level of product categorization. */
  | 'Department'
  /** Third level of product categorization. */
  | 'SubCategory';

/** Currency information. */
export type StoreCurrency = {
  /** Currency code (e.g: USD). */
  code: Scalars['String'];
  /** Currency symbol (e.g: $). */
  symbol: Scalars['String'];
};

export type StoreFacet = StoreFacetBoolean | StoreFacetRange;

/** Search facet boolean information. */
export type StoreFacetBoolean = {
  /** Facet key. */
  key: Scalars['String'];
  /** Facet label. */
  label: Scalars['String'];
  /** Array with information on each facet value. */
  values: Array<StoreFacetValueBoolean>;
};

/** Search facet range information. */
export type StoreFacetRange = {
  /** Facet key. */
  key: Scalars['String'];
  /** Facet label. */
  label: Scalars['String'];
  /** Maximum facet range value. */
  max: StoreFacetValueRange;
  /** Minimum facet range value. */
  min: StoreFacetValueRange;
};

/** Search facet type. */
export type StoreFacetType =
  /** Indicates boolean search facet. */
  | 'BOOLEAN'
  /** Indicates range type search facet. */
  | 'RANGE';

/** Information of a specific facet value. */
export type StoreFacetValueBoolean = {
  /** Facet value label. */
  label: Scalars['String'];
  /** Number of items with this facet. */
  quantity: Scalars['Int'];
  /** Indicates whether facet is selected. */
  selected: Scalars['Boolean'];
  /** Facet value. */
  value: Scalars['String'];
};

/** Search facet range value information. Used for minimum and maximum range values. */
export type StoreFacetValueRange = {
  /** Search facet range absolute value. */
  absolute: Scalars['Float'];
  /** Search facet range selected value. */
  selected: Scalars['Float'];
};

/** Image. */
export type StoreImage = {
  /** Alias for the image. */
  alternateName: Scalars['String'];
  /** Image URL. */
  url: Scalars['String'];
};

/** Item of a list. */
export type StoreListItem = {
  /** List item value. */
  item: Scalars['String'];
  /** Name of the list item. */
  name: Scalars['String'];
  /** Position of the item in the list. */
  position: Scalars['Int'];
};

/** Offer information. */
export type StoreOffer = {
  /** Offer item availability. */
  availability: Scalars['String'];
  /** Offer item condition. */
  itemCondition: Scalars['String'];
  /** Information on the item being offered. */
  itemOffered: StoreProduct;
  /** This is displayed as the "from" price in the context of promotions' price comparison. This may change before it reaches the shelf. */
  listPrice: Scalars['Float'];
  /** Also known as spot price. */
  price: Scalars['Float'];
  /** ISO code of the currency used for the offer prices. */
  priceCurrency: Scalars['String'];
  /** Next date in which price is scheduled to change. If there is no scheduled change, this will be set a year in the future from current time. */
  priceValidUntil: Scalars['String'];
  /** Number of items offered. */
  quantity: Scalars['Int'];
  /** Seller responsible for the offer. */
  seller: StoreOrganization;
  /** Computed price before applying coupons, taxes or benefits. This may change before it reaches the shelf. */
  sellingPrice: Scalars['Float'];
};

/** Information of a specific order. */
export type StoreOrder = {
  /** Array with information on each accepted offer. */
  acceptedOffer: Array<StoreOffer>;
  /** ID of the order in [VTEX order management](https://help.vtex.com/en/tutorial/license-manager-resources-oms--60QcBsvWeum02cFi3GjBzg#). */
  orderNumber: Scalars['String'];
};

/** Organization. */
export type StoreOrganization = {
  /** Organization ID. */
  identifier: Scalars['String'];
};

/** Whenever you make a query that allows for pagination, such as `allProducts` or `allCollections`, you can check `StorePageInfo` to learn more about the complete set of items and use it to paginate your queries. */
export type StorePageInfo = {
  /** Cursor corresponding to the last possible item. */
  endCursor: Scalars['String'];
  /** Indicates whether there is at least one more page with items after the ones returned in the current query. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether there is at least one more page with items before the ones returned in the current query. */
  hasPreviousPage: Scalars['Boolean'];
  /** Cursor corresponding to the first possible item. */
  startCursor: Scalars['String'];
  /** Total number of items (products or collections), not pages. */
  totalCount: Scalars['Int'];
};

/** Client profile data. */
export type StorePerson = {
  /** Client email. */
  email: Scalars['String'];
  /** Client last name. */
  familyName: Scalars['String'];
  /** Client first name. */
  givenName: Scalars['String'];
  /** Client ID. */
  id: Scalars['String'];
};

/** Product information. Products are variants within product groups, equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type StoreProduct = {
  /** Array of additional properties. */
  additionalProperty: Array<StorePropertyValue>;
  /** Aggregate ratings data. */
  aggregateRating: StoreAggregateRating;
  /** Product brand. */
  brand: StoreBrand;
  /** List of items consisting of chain linked web pages, ending with the current page. */
  breadcrumbList: StoreBreadcrumbList;
  /** Product description. */
  description: Scalars['String'];
  /** Global Trade Item Number. */
  gtin: Scalars['String'];
  /** Array of images. */
  image: Array<StoreImage>;
  /** Indicates product group related to this product. */
  isVariantOf: StoreProductGroup;
  /** Product name. */
  name: Scalars['String'];
  /** Aggregate offer information. */
  offers: StoreAggregateOffer;
  /** Product ID, such as [ISBN](https://www.isbn-international.org/content/what-isbn) or similar global IDs. */
  productID: Scalars['String'];
  /** The product's release date. Formatted using https://en.wikipedia.org/wiki/ISO_8601 */
  releaseDate: Scalars['String'];
  /** Array with review information. */
  review: Array<StoreReview>;
  /** Meta tag data. */
  seo: StoreSeo;
  /** Stock Keeping Unit. Merchant-specific ID for the product. */
  sku: Scalars['String'];
  /** Corresponding collection URL slug, with which to retrieve this entity. */
  slug: Scalars['String'];
};

/** Product connections, including pagination information and products returned by the query. */
export type StoreProductConnection = {
  /** Array with product connection edges, each containing a product and a corresponding cursor. */
  edges: Array<StoreProductEdge>;
  /** Product pagination information. */
  pageInfo: StorePageInfo;
};

/** Each product edge contains a `node`, with product information, and a `cursor`, that can be used as a reference for pagination. */
export type StoreProductEdge = {
  /** Product cursor. Used as pagination reference. */
  cursor: Scalars['String'];
  /** Each product node contains the information of a product returned by the query. */
  node: StoreProduct;
};

/** Product group information. Product groups are catalog entities that may contain variants. They are equivalent to VTEX [Products](https://help.vtex.com/en/tutorial/what-is-a-product--2zrB2gFCHyQokCKKE8kuAw#), whereas each variant is equivalent to a VTEX [SKU](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type StoreProductGroup = {
  /** Array of additional properties. */
  additionalProperty: Array<StorePropertyValue>;
  /** Array of variants related to product group. Variants are equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). */
  hasVariant: Array<StoreProduct>;
  /** Product group name. */
  name: Scalars['String'];
  /** Product group ID. */
  productGroupID: Scalars['String'];
  /**
   * Object containing data structures to facilitate handling different SKU
   * variant properties. Specially useful for implementing SKU selection
   * components.
   */
  skuVariants: Maybe<SkuVariants>;
};

/** Properties that can be associated with products and products groups. */
export type StorePropertyValue = {
  /** Property name. */
  name: Scalars['String'];
  /** Property id. This propert changes according to the content of the object. */
  propertyID: Scalars['String'];
  /** Property value. May hold a string or the string representation of an object. */
  value: Scalars['ObjectOrString'];
  /** Specifies the nature of the value */
  valueReference: Scalars['String'];
};

/** Information of a given review. */
export type StoreReview = {
  /** Review author. */
  author: StoreAuthor;
  /** Review rating information. */
  reviewRating: StoreReviewRating;
};

/** Information of a given review rating. */
export type StoreReviewRating = {
  /** Best rating value. */
  bestRating: Scalars['Float'];
  /** Rating value. */
  ratingValue: Scalars['Float'];
};

/** Search result. */
export type StoreSearchResult = {
  /** Array of search result facets. */
  facets: Array<StoreFacet>;
  /** Search result products. */
  products: StoreProductConnection;
  /** Search result suggestions. */
  suggestions: StoreSuggestions;
};

/** Search Engine Optimization (SEO) tags data. */
export type StoreSeo = {
  /** Canonical tag. */
  canonical: Scalars['String'];
  /** Description tag. */
  description: Scalars['String'];
  /** Title tag. */
  title: Scalars['String'];
  /** Title template tag. */
  titleTemplate: Scalars['String'];
};

/** Session information. */
export type StoreSession = {
  /** Session channel. */
  channel: Maybe<Scalars['String']>;
  /** Session country. */
  country: Scalars['String'];
  /** Session currency. */
  currency: StoreCurrency;
  /** Session locale. */
  locale: Scalars['String'];
  /** Session postal code. */
  person: Maybe<StorePerson>;
  /** Session postal code. */
  postalCode: Maybe<Scalars['String']>;
};

/** Product search results sorting options. */
export type StoreSort =
  /** Sort by discount value, from highest to lowest. */
  | 'discount_desc'
  /** Sort by name, in alphabetical order. */
  | 'name_asc'
  /** Sort by name, in reverse alphabetical order. */
  | 'name_desc'
  /** Sort by orders, from highest to lowest. */
  | 'orders_desc'
  /** Sort by price, from lowest to highest. */
  | 'price_asc'
  /** Sort by price, from highest to lowest. */
  | 'price_desc'
  /** Sort by release date, from  highest to lowest. */
  | 'release_desc'
  /** Sort by product score, from highest to lowest. */
  | 'score_desc';

/** Status used to indicate a message type. For instance, a shopping cart informative or error message. */
export type StoreStatus =
  | 'ERROR'
  | 'INFO'
  | 'WARNING';

/** Suggestion term. */
export type StoreSuggestionTerm = {
  /** Its occurrences count. */
  count: Scalars['Int'];
  /** The term. */
  value: Scalars['String'];
};

/** Suggestions information. */
export type StoreSuggestions = {
  /** Array with suggestion products' information. */
  products: Array<StoreProduct>;
  /** Array with suggestion terms. */
  terms: Array<StoreSuggestionTerm>;
};

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>;
  glob: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne: InputMaybe<Scalars['String']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex: InputMaybe<Scalars['String']>;
};

export type FooterContactQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterContactQuery = { cmsFooter: { contatoFooter: { contacts: { buttonContact: { link: string | null, textButton: string | null } | null, infoAtendimento: { text: string | null } | null, socialMedia: { listSocialMedia: Array<{ alt: string | null, image: string | null, link: string | null, target: boolean | null } | null> | null } | null } | null } | null } | null };

export type FooterRodapeQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterRodapeQuery = { cmsFooter: { infosRodape: { informations: { copyright: string | null, infoBusiness: string | null } | null } | null } | null };

export type FooterPaymentQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterPaymentQuery = { cmsFooter: { pagamentosDisponiveis: { payments: { listPayment: Array<{ alt: string | null, image: string | null } | null> | null } | null } | null, selos: { certificates: { listCertificates: Array<{ alt: string | null, image: string | null, link: string | null, target: boolean | null } | null> | null } | null } | null } | null };

export type FooterMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterMenuQuery = { cmsFooter: { menuFooter: { menu: { columns: Array<{ title: string | null, links: Array<{ link: string | null, title: string | null, target: boolean | null } | null> | null } | null> | null } | null } | null } | null };

export type MenuHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuHeaderQuery = { cmsHeader: { menu: { menuItems: { menu: Array<{ item: { submenuImage: string | null, title: string | null, link: string | null, submenu: Array<{ title: string | null, links: Array<{ title: string | null, link: string | null, linkHighlight: boolean | null, target: boolean | null } | null> | null } | null> | null } | null } | null> | null } | null } | null } | null };

export type TopbarQueryVariables = Exact<{ [key: string]: never; }>;


export type TopbarQuery = { cmsHeader: { topbar: { topbarText: { text: string | null } | null } | null } | null };

export type ProductSummary_ProductFragment = { slug: string, sku: string, name: string, gtin: string, id: string, brand: { name: string, brandName: string }, isVariantOf: { productGroupID: string, name: string, additionalProperty: Array<{ name: string, value: any }> }, image: Array<{ url: string, alternateName: string }>, offers: { lowPrice: number, offers: Array<{ availability: string, price: number, listPrice: number, quantity: number, seller: { identifier: string } }> }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> };

type Filter_Facets_StoreFacetBoolean_Fragment = { __typename: 'StoreFacetBoolean', key: string, label: string, values: Array<{ label: string, value: string, selected: boolean, quantity: number }> };

type Filter_Facets_StoreFacetRange_Fragment = { __typename: 'StoreFacetRange', key: string, label: string, min: { selected: number, absolute: number }, max: { selected: number, absolute: number } };

export type Filter_FacetsFragment = Filter_Facets_StoreFacetBoolean_Fragment | Filter_Facets_StoreFacetRange_Fragment;

export type SearchSuggestionsQueryQueryVariables = Exact<{
  term: Scalars['String'];
  selectedFacets: InputMaybe<Array<IStoreSelectedFacet> | IStoreSelectedFacet>;
}>;


export type SearchSuggestionsQueryQuery = { search: { suggestions: { terms: Array<{ value: string }>, products: Array<{ slug: string, sku: string, name: string, gtin: string, id: string, brand: { name: string, brandName: string }, isVariantOf: { productGroupID: string, name: string, additionalProperty: Array<{ name: string, value: any }> }, image: Array<{ url: string, alternateName: string }>, offers: { lowPrice: number, offers: Array<{ availability: string, price: number, listPrice: number, quantity: number, seller: { identifier: string } }> }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> }> } } };

export type ProductDetailsFragment_ProductFragment = { sku: string, name: string, gtin: string, description: string, id: string, isVariantOf: { productGroupID: string, name: string, additionalProperty: Array<{ name: string, value: any }> }, image: Array<{ url: string, alternateName: string }>, brand: { name: string }, offers: { lowPrice: number, offers: Array<{ availability: string, price: number, listPrice: number, seller: { identifier: string } }> }, breadcrumbList: { itemListElement: Array<{ item: string, name: string, position: number }> }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> };

export type ProductGalleryQueryQueryVariables = Exact<{
  first: Scalars['Int'];
  after: Scalars['String'];
  sort: StoreSort;
  term: Scalars['String'];
  selectedFacets: Array<IStoreSelectedFacet> | IStoreSelectedFacet;
}>;


export type ProductGalleryQueryQuery = { search: { products: { pageInfo: { totalCount: number } }, facets: Array<{ __typename: 'StoreFacetBoolean', key: string, label: string, values: Array<{ label: string, value: string, selected: boolean, quantity: number }> } | { __typename: 'StoreFacetRange', key: string, label: string, min: { selected: number, absolute: number }, max: { selected: number, absolute: number } }> } };

export type CollectionPageQueryQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>;
}>;


export type CollectionPageQueryQuery = { site: { siteMetadata: { titleTemplate: string | null, title: string | null, description: string | null } | null } | null, cmsCategory: { sections: Array<{ data: any, name: string }>, infoPage: { siteMetadataWithSlug: { seo: { slug: string | null } | null } | null } | null } | null };

export type ServerCollectionPageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ServerCollectionPageQueryQuery = { collection: { slug: string, seo: { title: string, description: string }, breadcrumbList: { itemListElement: Array<{ item: string, name: string, position: number }> }, meta: { selectedFacets: Array<{ key: string, value: string }> } } };

export type ProductPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductPageQueryQuery = { site: { siteMetadata: { title: string | null, description: string | null, titleTemplate: string | null, siteUrl: string | null } | null } | null };

export type ServerProductPageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ServerProductPageQueryQuery = { product: { sku: string, gtin: string, name: string, description: string, id: string, seo: { title: string, description: string, canonical: string }, brand: { name: string }, breadcrumbList: { itemListElement: Array<{ item: string, name: string, position: number }> }, image: Array<{ url: string, alternateName: string }>, offers: { lowPrice: number, highPrice: number, priceCurrency: string, offers: Array<{ availability: string, price: number, priceValidUntil: string, priceCurrency: string, itemCondition: string, listPrice: number, seller: { identifier: string } }> }, isVariantOf: { productGroupID: string, name: string, additionalProperty: Array<{ value: any, name: string }> }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> } };

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQueryQuery = { site: { siteMetadata: { title: string | null, description: string | null, titleTemplate: string | null } | null } | null, cmsHome: { sections: Array<{ name: string, data: any }> } | null };

export type InstitutionalAboutUsQueryVariables = Exact<{
  id: InputMaybe<Scalars['String']>;
}>;


export type InstitutionalAboutUsQuery = { cmsInstitutionalPage: { seo: { siteMetadataWithSlug: { description: string | null, title: string | null, slug: string | null } | null } | null, sections: Array<{ data: any, name: string }> } | null };

export type InstitutionalPoliticsQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>;
}>;


export type InstitutionalPoliticsQuery = { allCmsPoliticsPage: { nodes: Array<{ seo: { siteMetadataWithSlug: { slug: string | null } | null } | null, sections: Array<{ data: any }> }> }, cmsPoliticsPage: { menuLateral: { menuLateral: { title: string | null } | null } | null, sections: Array<{ data: any }>, seo: { siteMetadataWithSlug: { title: string | null, description: string | null, slug: string | null } | null } | null } | null };

export type LandingCmsCollectionQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>;
}>;


export type LandingCmsCollectionQuery = { cmsCollection: { infoPage: { siteMetadataWithSlug: { configCollection: { collection: string | null, hideUnavailableItems: boolean | null, maxQuantityProducts: number | null, sort: string | null, rangePrice: string | null } | null, seo: { description: string | null, slug: string | null, title: string | null } | null } | null } | null, sections: Array<{ data: any, name: string }> } | null };

export type LandingPageCustomQueryVariables = Exact<{
  id: InputMaybe<Scalars['String']>;
}>;


export type LandingPageCustomQuery = { cmsLandingPageCustom: { id: string, sections: Array<{ data: any, name: string }>, seo: { siteMetadataWithSlug: { description: string | null, slug: string | null, title: string | null } | null } | null } | null };

export type SearchPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchPageQueryQuery = { site: { siteMetadata: { titleTemplate: string | null, title: string | null, description: string | null } | null } | null };

export type ValidateCartMutationMutationVariables = Exact<{
  cart: IStoreCart;
}>;


export type ValidateCartMutationMutation = { validateCart: { order: { orderNumber: string, acceptedOffer: Array<{ quantity: number, price: number, listPrice: number, seller: { identifier: string }, itemOffered: { sku: string, name: string, gtin: string, image: Array<{ url: string, alternateName: string }>, brand: { name: string }, isVariantOf: { productGroupID: string, name: string }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> } }> }, messages: Array<{ text: string, status: StoreStatus }> } | null };

export type CartMessageFragment = { text: string, status: StoreStatus };

export type CartItemFragment = { quantity: number, price: number, listPrice: number, seller: { identifier: string }, itemOffered: { sku: string, name: string, gtin: string, image: Array<{ url: string, alternateName: string }>, brand: { name: string }, isVariantOf: { productGroupID: string, name: string }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> } };

export type CartProductItemFragment = { sku: string, name: string, gtin: string, image: Array<{ url: string, alternateName: string }>, brand: { name: string }, isVariantOf: { productGroupID: string, name: string }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> };

export type BrowserProductQueryQueryVariables = Exact<{
  locator: Array<IStoreSelectedFacet> | IStoreSelectedFacet;
}>;


export type BrowserProductQueryQuery = { product: { sku: string, name: string, gtin: string, description: string, id: string, isVariantOf: { productGroupID: string, name: string, additionalProperty: Array<{ name: string, value: any }> }, image: Array<{ url: string, alternateName: string }>, brand: { name: string }, offers: { lowPrice: number, offers: Array<{ availability: string, price: number, listPrice: number, seller: { identifier: string } }> }, breadcrumbList: { itemListElement: Array<{ item: string, name: string, position: number }> }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> } };

export type ProductsQueryQueryVariables = Exact<{
  first: Scalars['Int'];
  after: InputMaybe<Scalars['String']>;
  sort: StoreSort;
  term: Scalars['String'];
  selectedFacets: Array<IStoreSelectedFacet> | IStoreSelectedFacet;
}>;


export type ProductsQueryQuery = { search: { products: { pageInfo: { totalCount: number }, edges: Array<{ node: { slug: string, sku: string, name: string, gtin: string, id: string, brand: { name: string, brandName: string }, isVariantOf: { productGroupID: string, name: string, additionalProperty: Array<{ name: string, value: any }> }, image: Array<{ url: string, alternateName: string }>, offers: { lowPrice: number, offers: Array<{ availability: string, price: number, listPrice: number, quantity: number, seller: { identifier: string } }> }, additionalProperty: Array<{ propertyID: string, name: string, value: any, valueReference: string }> } }> } } };

export type TopSearchSuggestionsQueryQueryVariables = Exact<{
  term: Scalars['String'];
  selectedFacets: InputMaybe<Array<IStoreSelectedFacet> | IStoreSelectedFacet>;
}>;


export type TopSearchSuggestionsQueryQuery = { search: { suggestions: { terms: Array<{ value: string }> } } };

export type ValidateSessionMutationVariables = Exact<{
  session: IStoreSession;
  search: Scalars['String'];
}>;


export type ValidateSessionMutation = { validateSession: { locale: string, channel: string | null, country: string, postalCode: string | null, currency: { code: string, symbol: string }, person: { id: string, email: string, givenName: string, familyName: string } | null } | null };
