import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <Image
            src="/brand/logo.webp"
            width={100}
            height={42}
            style={{ height: '42px', width: 'auto' }}
            quality={100}
            alt="Hoizt Logo"
          />
        </Link>
      </div>
    </header>
  );
}
