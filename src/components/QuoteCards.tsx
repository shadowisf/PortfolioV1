export const QuoteCard = ({
  children,
  who,
  where,
  img,
}: {
  children?: string | undefined;
  who?: string | undefined;
  where?: string | undefined;
  img?: React.ReactNode | undefined;
}) => {
  return (
    <section className="container vhalf quoteCard">
      <picture className="flexCenterH">{img}</picture>

      <br id="hs" />

      <aside className="gridCenterV textCenter">
        <p className="quoteFont">
          <span className="mediumHeader flexLeftH">“</span>
          {children}
          <span className="mediumHeader flexRightH">„</span>
        </p>

        <span>
          <b>{who}</b> <br /> ({where})
        </span>
      </aside>
    </section>
  );
};
