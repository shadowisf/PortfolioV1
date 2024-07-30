type timelineProps = {
  children?: React.ReactNode;
  img?: React.ReactNode;
};

export const TimelineRow = ({ children, img }: timelineProps) => {
  return (
    <section style={{marginLeft: "2rem"}} className="flexCenterV">
      <picture className="flexCenterV">{img}</picture>
      <aside className="timelineCaption">{children}</aside>
    </section>
  );
};
