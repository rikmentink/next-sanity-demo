import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <strong className="text-xl">Revision Digital B.V.</strong>
          </Link>
          <Button href="/get-started" variant="primary">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
