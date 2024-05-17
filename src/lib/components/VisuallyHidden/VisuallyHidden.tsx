import { PropsWithChildren } from "react";
import styles from "./VisuallyHidden.module.css";

interface VisuallyHiddenProps {
  as?: string;
}
export function VisuallyHidden({
  as = "span",
  children,
}: PropsWithChildren<VisuallyHiddenProps>) {
  const Tag = as as keyof JSX.IntrinsicElements;
  return <Tag className={styles.visuallyHidden}>{children}</Tag>;
}
