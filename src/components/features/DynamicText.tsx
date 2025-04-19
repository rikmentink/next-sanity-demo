import React from 'react';

/**
 * Props for the DynamicText component
 * @param value - The value fetched from the CMS, if available
 * @param children - Fallback content if value is not provided
 * @param as - Optional wrapper element tag name (defaults to fragment)
 */
type DynamicTextProps = {
  value: string | null | undefined;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export const DynamicText: React.FC<DynamicTextProps> = ({
  value,
  children,
  as: Wrapper = React.Fragment,
}) => {
  const content = value || children;
  return <Wrapper>{content}</Wrapper>;
};
