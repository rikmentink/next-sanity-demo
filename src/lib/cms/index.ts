import type { SanityClient } from '@sanity/client';
import { sanityClient } from './client';

export async function fetchSanityQuery<T>(
  query: string,
  params: Record<string, unknown> = {},
  client: SanityClient = sanityClient
): Promise<T> {
  try {
    const data = await client.fetch<T>(query, params);
    return data;
  } catch (error) {
    console.error(
      'Sanity fetch error:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
}
