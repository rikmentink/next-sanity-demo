import { fetchSanityQuery } from '@/lib/cms';
import { CmsPage } from '@/types/CmsPage';

export async function getCmsPage(slug: string): Promise<CmsPage | null> {
  const query = `*[_type == "cmsPage" && slug.current == $slug][0]{
    _id,
    title,
    content,
    metaTitle,
    metaDescription
  }`;
  return fetchSanityQuery<CmsPage | null>(query, { slug });
}

export async function getAllCmsPages(): Promise<CmsPage[]> {
  const query = `*[_type == "cmsPage"]{
   _id, 
   title,
   slug
 }`;
  return fetchSanityQuery<CmsPage[]>(query);
}

export async function getAllCmsPageSlugs(): Promise<{ slug: string }[]> {
  const query = `*[_type == "cmsPage" && defined(slug.current)][].slug.current`;
  const slugs = await fetchSanityQuery<string[]>(query);
  return slugs.map((slug) => ({ slug }));
}
