import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_READ_TOKEN;

if (!projectId || !dataset || !apiVersion) {
  console.error('Sanity config missing:', { projectId, dataset, apiVersion });
  throw new Error(
    'Sanity project ID, dataset, or API version missing in environment variables.'
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: typeof document === 'undefined' ? false : true, // Use CDN client-side, direct connection server-side
  token: token,
  perspective: 'published',
});
