import { sanityFetch } from '@/lib/sanity/live';

type FetchOptions = {
  useCdn?: boolean;
  perspective?: 'published' | 'previewDrafts';
  isStatic?: boolean;
};

export async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: FetchOptions = {}
): Promise<T> {
  try {
    const { data } = await sanityFetch({
      query,
      params,
      ...options,
      // next: {
      //   revalidate: 60, // Revalidate every minute
      //   tags: ['cms'], // Add cache tags for selective revalidation
      // },
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
