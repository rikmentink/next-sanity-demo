import { DynamicText } from '@/components/features/DynamicText';
import { getHomepageContent } from '@/services/page';
import { HomepageContent } from '@/types/sanity';

export default async function Home() {
  // Fetch homepage-specific content (Server Component)
  const homepageData: HomepageContent | null = await getHomepageContent();

  return (
    <div className="py-8">
      <section className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[800px] pt-16 text-center">
          <h1 className="text-6xl/20 font-bold">
            <DynamicText value={homepageData?.heroHeading}>
              {/* Fallback text directly inside */}
              Supercharge Your Business with Custom Software and Websites
            </DynamicText>
          </h1>
        </div>
      </section>
    </div>
  );
}
