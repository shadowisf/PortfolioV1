interface Props {
  className?: string;
  strokeDasharray?: string;
  width?: string;
}

export default function IllustrationHorizontalLine({
  className,
  strokeDasharray,
  width,
}: Props) {
  return (
    <svg width={width} height="40" className={className}>
      <path
        d="M 0 20 L 5000 20"
        style={{
          stroke: "var(--text-color)",
          strokeDasharray: strokeDasharray,
        }}
        strokeWidth="2"
      />
    </svg>
  );
}
