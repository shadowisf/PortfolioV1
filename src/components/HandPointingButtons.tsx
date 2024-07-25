import IllustrationHandPointingH from "../assets/IllustrationHandPointing";

type handPointingProps = {
  width?: string;
  children?: string;
  id?: string;
  onClick?: () => void;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
};

export function HandPointingRight({
  marginBottom,
  marginLeft,
  width,
  children,
  id,
  onClick,
}: handPointingProps) {
  return (
    <section id={id} className="container vhalf noCursor handPointing">
      <picture className="flexCenterH">
        <IllustrationHandPointingH width={width} />
      </picture>
      <a
        style={{ marginBottom: marginBottom, marginLeft: marginLeft }}
        className="flickerTextHover button toThinHover smallHeader"
        onClick={onClick}
      >
        {children}
      </a>
    </section>
  );
}

export function HandPointingLeft({
  marginBottom,
  marginRight,
  width,
  children,
  id,
  onClick,
}: handPointingProps) {
  return (
    <section id={id} className="container vhalf noCursor handPointing">
      <a
        style={{ marginBottom: marginBottom, marginRight: marginRight }}
        className="flickerTextHover button toThinHover smallHeader"
        onClick={onClick}
      >
        {children}
      </a>
      <picture style={{ transform: "rotateY(180deg)" }} className="flexCenterH">
        <IllustrationHandPointingH width={width} />
      </picture>
    </section>
  );
}
