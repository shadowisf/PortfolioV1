export const TimelineRow = ({
  children,
  img,
}: {
  children?: React.ReactNode;
  img?: React.ReactNode;
}) => {
  return (
    <section className="flexCenterV timelineRow">
      <picture className="flexCenterV">{img}</picture>
      <aside className="timelineCaption">{children}</aside>
    </section>
  );
};
