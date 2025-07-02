// https://github.com/shadcn-ui/ui/discussions/3257

import React from "react";
import { cn } from "@/lib/utils";

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "li" | "span";
type StyleVariant = "lead" | "muted";

type TypographyProps = {
  as: Variant;
  styleVariant?: StyleVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<Variant, string> = {
  h1: "scroll-m-20 text-5xl/[120%] font-bold tracking-tight md:text-6xl lg:text-7xl",
  h2: "scroll-m-20 text-3xl/[120%] font-semibold tracking-tight md:text-5xl lg:text-6xl",
  h3: "scroll-m-20 text-2xl/[120%] font-medium tracking-tight sm:text-4xl md:text-5xl",
  h4: "scroll-m-20 text-xl/[150%] font-normal tracking-tight md:text-3xl lg:text-4xl",
  p: "text-xs/[140%] font-normal tracking-tight sm:text-sm md:text-base",
  li: "ppx-1.5 py-1",
  span: "text-sm/[120%] font-medium tracking-tight md:text-lg lg:text-xl",
};

const styleVariants: Record<StyleVariant, string> = {
  lead: "text-primary",
  muted: "text-muted-foreground",
  footer: "uppercase text-white",
};

export const Typography: React.FC<TypographyProps> = ({
  as: Component,
  styleVariant,
  className,
  children,
}) => {
  return (
    <Component
      className={cn("whitespace-pre-line",
        variantStyles[Component],
        styleVariant ? styleVariants[styleVariant] : "",
        className
      )}
    >
      {children}
    </Component>
  );
};