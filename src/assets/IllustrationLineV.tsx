interface Props {
  className?: string;
  strokeDasharray?: string;
  height?: string;
  id?: string;
}

export default function IllustrationLineV({
  className,
  strokeDasharray,
  height,
  id,
}: Props) {
  return (
    <svg width="40" height={height} className={className} id={id}>
      <path
        d="M 20 0 L 20 1000"
        style={{
          stroke: "var(--text-color)",
          strokeDasharray: strokeDasharray,
        }}
        strokeWidth="2"
      />
    </svg>
  );
}
