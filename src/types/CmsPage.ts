export interface CmsPage {
  _id: string;
  _type: 'cmsPage';
  title: string;
  slug: string;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
  isPublished?: boolean;
}
