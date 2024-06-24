interface Props {
  className?: string;
  strokeDasharray?: string;
  height?: string;
}

export default function IllustrationVerticalLine({
  className,
  strokeDasharray,
  height,
}: Props) {
  return (
    <svg width="40" height={height} className={className}>
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
