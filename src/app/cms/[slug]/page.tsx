import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPage } from '@/services/cms';
import type { CmsPage } from '@/types/sanity';

interface CmsPageProps {
  slug: string;
}

interface MetadataProps {
  slug: string;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function CmsPage({
  params,
}: {
  params: Promise<CmsPageProps>;
}) {
  const { slug } = await params;
  const page: CmsPage | null = await getPage(slug);

  if (!page) {
    return notFound();
  }

  return (
    <div className="text-primary container mx-auto px-4 py-12">
      <article>
        <h1 className="mb-6 text-4xl font-bold">{page.title}</h1>

        {page.content && (
          <div className="prose lg:prose-xl max-w-none">
            {page.content
              .split('\n')
              .map((paragraph, index) =>
                paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
              )}
          </div>
        )}
      </article>
    </div>
  );
}

/**
 * Generate metadata for the page
 * @param {MetadataProps} params
 * @param {ResolvingMetadata} parent
 * @returns {Promise<Metadata>}
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<MetadataProps>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page: CmsPage | null = await getPage(slug);

  const pageTitle = page?.metaTitle ?? page?.title;
  const pageDescription = page?.metaDescription ?? '';

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
    },
  };
}

/**
 * Generate static params for all the pages that should be generated statically
 * Temporarily disabled because of draft mode error
 * @returns {Promise<{ slug: string }[]>}
 */
// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//   const slugs = await getAllPageSlugs();
//   return slugs;
// }
