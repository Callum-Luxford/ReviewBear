import { Link } from "react-router-dom";

const base = "border px-2 py-1.5 rounded-md";

const variants = {
  primary: "bg-theme_clr_2 text-black",
  secondary: "bg-theme_clr_4 text-white border-theme_clr_4",
};
// border border-gray-300 px-2 py-1.5 rounded-md shadow-md
const sizes = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
  xxxl: "text-3xl",
};

export default function CTAButton({
  to,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const v = variants[variant] ?? variants.primary;
  const s = sizes[size] ?? sizes.md;
  const classes = `${base} ${v} ${s} ${className}`;

  // Link button
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
