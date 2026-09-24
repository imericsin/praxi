import { ButtonHTMLAttributes } from "react";

// Figma component "Button" (node 81:7205 frame; Standard=81:7194/81:7204
// default/hover, Secondary=81:7217 default). No Secondary hover state
// exists in the Figma file yet -- flagged, falls back to a standard
// darken-on-hover until one is specified.
type ButtonVariant = "standard" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  standard: "bg-white text-foreground-1 hover:bg-[#2563eb] hover:text-white", // hover: color/blue-600
  secondary: "bg-foreground-1 text-white hover:bg-foreground-2", // color/stone-950 === Foreground/1
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
