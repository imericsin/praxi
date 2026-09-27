import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

// Figma component "Button" (node 81:7205 frame; Standard=81:7194/81:7204
// default/hover, Secondary=81:7217 default). No Secondary hover state
// exists in the Figma file yet -- flagged, falls back to a standard
// darken-on-hover until one is specified.
type ButtonVariant = "standard" | "secondary";

const variantClasses: Record<ButtonVariant, string> = {
  standard: "bg-white text-foreground-1 hover:bg-[#2563eb] hover:text-white", // hover: color/blue-600
  secondary: "bg-foreground-1 text-white hover:bg-foreground-2", // color/stone-950 === Foreground/1
};

const baseClasses =
  "flex items-center justify-center rounded-[6px] px-4 py-3 font-sans text-xs leading-none font-medium whitespace-nowrap transition-colors";

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  href?: undefined;
};

type ButtonAsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  href: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

// Renders an <a> (via next/link) when `href` is passed, otherwise a
// <button> -- same visual component either way, since the Figma component
// itself has no notion of link vs. button (that's a code-side concern for
// wiring up page navigation).
export function Button({
  variant = "standard",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
