import { defineQuery } from 'next-sanity';
import { fetchSanity } from '@/lib/sanity/fetch';
import { CmsPage, HomepageContent } from '@/types/sanity';

export const getCmsPage = async (slug: string): Promise<CmsPage | null> => {
  const query = defineQuery(`*[_type == "cmsPage" && slug.current == $slug][0]{
    _id,
    title,
    content,
    metaTitle,
    metaDescription
  }`);
  return fetchSanity<CmsPage | null>(query, { slug });
};

export const getAllCmsPages = async (): Promise<CmsPage[]> => {
  const query = defineQuery(`*[_type == "cmsPage"]{
   _id, 
   title,
   slug
 }`);
  return fetchSanity<CmsPage[]>(query);
};

export const getAllCmsPageSlugs = async (): Promise<{ slug: string }[]> => {
  const query = defineQuery(
    `*[_type == "cmsPage" && defined(slug.current)][].slug.current`
  );
  const slugs = await fetchSanity<string[]>(query);
  return slugs.map((slug: string) => ({ slug }));
};

export const getHomepage = async (): Promise<HomepageContent | null> => {
  const query = defineQuery(`*[_type == "homepage"][0]`);
  return fetchSanity<HomepageContent | null>(query);
};
