import React from 'react';

/**
 * Props for the DynamicText component
 * @param value - The value fetched from the CMS, if available
 * @param children - Fallback content if value is not provided
 */
type DynamicTextProps = {
  value: string | null | undefined;
  children: React.ReactNode;
};

export const DynamicText = ({ value, children }: DynamicTextProps) => {
  const content = value || children;
  return <>{content}</>;
};
