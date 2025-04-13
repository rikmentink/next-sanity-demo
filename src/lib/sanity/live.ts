import { defineLive } from 'next-sanity';
import { sanityClient } from '@/lib/sanity/client';

const token = process.env.SANITY_VIEWER_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient,
  serverToken: token,
  browserToken: token,
});
