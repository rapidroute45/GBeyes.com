import { Link } from 'react-router-dom';

export function GradientButton({
  to,
  href,
  external,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes =
    variant === 'primary'
      ? `btn-gradient ${className}`
      : `btn-outline-navy ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
