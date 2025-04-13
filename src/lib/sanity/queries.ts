import { defineQuery } from 'next-sanity';
import { fetchSanity } from '@/lib/sanity/fetch';
import { CmsPageDocument } from '@/types/sanity';

export const getCmsPage = async (
  slug: string
): Promise<CmsPageDocument | null> => {
  const query = defineQuery(`*[_type == "cmsPage" && slug.current == $slug][0]{
    _id,
    title,
    content,
    metaTitle,
    metaDescription
  }`);
  return fetchSanity<CmsPageDocument | null>(query, { slug });
};

export const getAllCmsPages = async (): Promise<CmsPageDocument[]> => {
  const query = defineQuery(`*[_type == "cmsPage"]{
   _id, 
   title,
   slug
 }`);
  return fetchSanity<CmsPageDocument[]>(query);
};

export const getAllCmsPageSlugs = async (): Promise<{ slug: string }[]> => {
  const query = defineQuery(
    `*[_type == "cmsPage" && defined(slug.current)][].slug.current`
  );
  const slugs = await fetchSanity<string[]>(query);
  return slugs.map((slug: string) => ({ slug }));
};
