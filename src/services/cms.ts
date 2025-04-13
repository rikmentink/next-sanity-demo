import { getCmsPage, getAllCmsPageSlugs } from '@/lib/sanity/queries';
import { CmsPage } from '@/types/sanity';

export class CmsError extends Error {
  constructor(
    message: string,
    public code: string
  ) {
    super(message);
    this.name = 'CmsError';
  }
}

export const getPage = async (slug: string): Promise<CmsPage | null> => {
  try {
    return await getCmsPage(slug);
  } catch (error) {
    console.error('Error fetching page:', error);
    throw new CmsError(
      'Failed to fetch page content',
      error instanceof Error ? error.message : 'UNKNOWN_ERROR'
    );
  }
};

export const getAllPageSlugs = async (): Promise<{ slug: string }[]> => {
  try {
    return await getAllCmsPageSlugs();
  } catch (error) {
    console.error('Error fetching all page slugs:', error);
    throw new CmsError(
      'Failed to fetch all page slugs',
      error instanceof Error ? error.message : 'UNKNOWN_ERROR'
    );
  }
};
