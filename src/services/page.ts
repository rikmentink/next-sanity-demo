import { getHomepage } from '@/lib/sanity/queries';
import { HomepageContent } from '@/types/sanity';

export class PageError extends Error {
  constructor(
    message: string,
    public code: string
  ) {
    super(message);
    this.name = 'PageError';
  }
}

export const getHomepageContent = async (): Promise<HomepageContent | null> => {
  try {
    return await getHomepage();
  } catch (error) {
    console.error('Error fetching homepage content:', error);
    throw new PageError(
      'Failed to fetch homepage content',
      error instanceof Error ? error.message : 'UNKNOWN_ERROR'
    );
  }
};
