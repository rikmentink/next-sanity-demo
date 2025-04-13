import { SanityDocument } from 'next-sanity';

export interface CmsPageDocument extends SanityDocument {
  _type: 'cmsPage';
  title: string;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
  isPublished?: boolean;
  slug: {
    _type: 'slug';
    current: string;
  };
}
