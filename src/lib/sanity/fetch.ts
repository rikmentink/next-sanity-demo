import { sanityFetch } from '@/lib/sanity/live';

type FetchOptions = {
  useCdn?: boolean;
  perspective?: 'published' | 'previewDrafts';
  next?: {
    revalidate?: number;
  };
};

export async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: FetchOptions = {}
): Promise<T> {
  try {
    options = {
      ...options,
      next: {
        revalidate: 0, // Temporarily disable caching
      },
    };
    const { data } = await sanityFetch({
      query,
      params,
      ...options,
    });
    return data;
  } catch (error) {
    console.error('Sanity fetch error:', {
      query,
      params,
      error,
    });
    console.error(
      'Sanity fetch error:',
      error instanceof Error ? error.message : error
    );

    const errorMessage = error instanceof Error ? error.message : error;
    throw new Error(`Failed to fetch from Sanity: ${errorMessage}`);
  }
}
