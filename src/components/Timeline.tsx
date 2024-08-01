type timelineProps = {
  children?: React.ReactNode;
  img?: React.ReactNode;
  verticalLine?: boolean;
};

export const TimelineRow = ({ children, img, verticalLine }: timelineProps) => {
  return (
    <>
      <section style={{ marginLeft: "2rem" }} className="flexCenterV">
        <picture className="flexCenterV">{img}</picture>
        <aside className="timelineCaption">{children}</aside>
      </section>
      <svg
        style={verticalLine ? { marginLeft: "2rem" } : { display: "none" }}
        width="40"
        height="50"
        className="flexCenterV"
      >
        <path
          d="M 20 0 L 20 1000"
          style={{
            stroke: "var(--text-color)",
          }}
          strokeWidth="2"
        />
      </svg>
    </>
  );
};
