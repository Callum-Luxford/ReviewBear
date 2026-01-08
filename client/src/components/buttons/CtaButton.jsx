import { Link } from "react-router-dom";

function CTAButton({
  children,
  to,
  type = "button",
  variant = "primary", // "primary" | "secondary"
  size = "md", // "sm" | "md" | "lg"
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  // Navigation button
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // Regular button (forms, actions)
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default CTAButton;
