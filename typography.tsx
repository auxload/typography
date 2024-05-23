import React, { ReactNode, FC, HTMLAttributes } from "react";
import "./ty.css";
import { cn } from "@/lib/utils";

const variantsMapping: { [key in Variant]: keyof JSX.IntrinsicElements } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  span: "span",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "subheading1"
  | "subheading2"
  | "body1"
  | "body2";

type Color = "primary" | "secondary" | "accent" | "muted";

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  children: ReactNode;
  className?: HTMLAttributes<any>["className"];
  [key: string]: any; // Allow other props
}

const Typography: FC<TypographyProps> = ({
  variant,
  color,
  children,
  className,
  ...props
}) => {
  const Component: React.ElementType = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={cn(
        {
          [`typography--variant-${variant}`]: variant,
          [`typography--color-${color}`]: color,
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
