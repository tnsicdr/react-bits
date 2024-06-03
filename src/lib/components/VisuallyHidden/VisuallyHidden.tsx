import { PropsWithChildren } from "react";

interface VisuallyHiddenProps {
  as?: string;
}
export function VisuallyHidden({
  as = "span",
  children,
}: PropsWithChildren<VisuallyHiddenProps>) {
  const Tag = as as keyof JSX.IntrinsicElements;
  return <Tag className="rb-visually-hidden">{children}</Tag>;
}
