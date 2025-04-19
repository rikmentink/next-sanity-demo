import Link from 'next/link';

type ButtonProps = {
  href: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
};

export default function Button({ href, variant, children }: ButtonProps) {
  const getButtonStyles = (variant: ButtonProps['variant']) => {
    const baseStyles =
      'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors';

    const variantStyles = {
      primary:
        'bg-[var(--color-primary)] text-[var(--color-secondary)] hover:bg-[var(--color-primary-variant)]',
      secondary:
        'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/80',
    };

    return `${baseStyles} ${variantStyles[variant]}`;
  };

  return (
    <Link href={href} className={getButtonStyles(variant)}>
      {children}
    </Link>
  );
}
