type QuoteCardProps = {
  children: string;
  who: string;
  where: string;
  img: React.ReactNode;
};

export function QuoteCard({ children, who, where, img }: QuoteCardProps) {
  return (
    <section className="container vhalf quoteCard">
      <picture className="flexCenterH">{img}</picture>

      <br id="hs" />

      <aside className="gridCenterV textCenter">
        <p style={{fontSize: "25px"}}>
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
}
