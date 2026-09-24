import { ButtonHTMLAttributes } from "react";

// Figma component "Button" (node 81:7194, state=Default, style=Standard).
type ButtonVariant = "standard";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  standard: "bg-white text-foreground-1 hover:bg-neutral-100",
};

export function Button({
  variant = "standard",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-[6px] px-4 py-3 font-sans text-xs leading-none font-medium whitespace-nowrap transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
