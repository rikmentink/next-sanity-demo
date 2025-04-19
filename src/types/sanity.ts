import { SanityDocument } from 'next-sanity';

export interface CmsPage extends SanityDocument {
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

export interface HomepageContent extends SanityDocument {
  _type: 'homepage';
  title: string;
  heroHeading: string;
}
