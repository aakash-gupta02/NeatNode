export default function SimpleBrandIcon({ icon, title, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title ?? icon.title}
      role="img"
      {...props}
    >
      <title>{title ?? icon.title}</title>
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}
