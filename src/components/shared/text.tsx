// https://github.com/shadcn-ui/ui/discussions/3257
import React from "react";
import { cn } from "@/lib/utils";

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "li";
type StyleVariant = "lead" | "muted";

type TextProps = {
  as: Variant;
  styleVariant?: StyleVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<Variant, string> = {
  h1: "scroll-m-20 text-7xl/[120%] font-bold tracking-tight",
  h2: "scroll-m-20 text-6xl/[120%] font-semibold tracking-tight md:text-6xl lg:text-7xl",
  h3: "scroll-m-20 text-5xl/[120%] font-medium tracking-tight",
  h4: "scroll-m-20 text-4xl/[150%] font-normal tracking-tight",
  p: "text-base/[140%] font-normal tracking-tight",
  li: "my-6 ml-6 list-disc mt-2",
};

const styleVariants: Record<StyleVariant, string> = {
  lead: "text-muted-foreground",
  muted: "text-muted-foreground bg-red-400",
};

export const Text: React.FC<TextProps> = ({
  as: Component,
  styleVariant,
  className,
  children,
}) => {
  return (
    <Component
      className={cn(
        variantStyles[Component],
        styleVariant ? styleVariants[styleVariant] : "",
        className
      )}
    >
      {children}
    </Component>
  );
};