import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 font-share-tech",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 font-share-tech",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground font-share-tech",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-share-tech",
        ghost: "hover:bg-accent hover:text-accent-foreground font-share-tech",
        link: "text-primary underline-offset-4 hover:underline font-share-tech",
        glow: "bg-primary/80 text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(59,130,246,0.5)] font-share-tech",
        glowSecondary: "bg-secondary/80 text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_15px_rgba(192,132,252,0.5)] font-share-tech",
        glowAccent: "bg-accent/80 text-accent-foreground hover:bg-accent/90 shadow-[0_0_15px_rgba(244,114,182,0.5)] font-share-tech",
        cyber: "relative overflow-hidden border border-primary/50 bg-background text-primary hover:text-white hover:before:h-[300%] before:absolute before:left-[-100%] before:top-[-300%] before:-z-10 before:h-0 before:w-[300%] before:rotate-45 before:bg-gradient-to-r before:from-primary before:to-primary/50 before:transition-all before:duration-500 font-share-tech",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }