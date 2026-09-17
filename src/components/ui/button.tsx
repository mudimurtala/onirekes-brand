import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0.5 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-button hover:-translate-y-0.5 hover:bg-primary/88 hover:shadow-button-hover",
        destructive: "bg-destructive text-destructive-foreground shadow-button hover:-translate-y-0.5 hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-soft hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gold text-gold-foreground shadow-button hover:-translate-y-0.5 hover:bg-paper hover:text-ink hover:shadow-button-hover",
        ink: "bg-ink text-paper shadow-button hover:-translate-y-0.5 hover:bg-ink-soft hover:shadow-button-hover",
        paper: "bg-paper text-ink shadow-button hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground hover:shadow-button-hover",
        goldOutline: "border border-gold bg-background text-foreground shadow-soft hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground hover:border-gold",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-7 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
