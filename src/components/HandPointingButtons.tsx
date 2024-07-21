import IllustrationHandPointingH from "../assets/IllustrationHandPointingH";
import IllustrationHandPointingV from "../assets/IllustrationHandPointingV";

export const HandPointingRight = ({
  children,
  id,
  onClick,
}: {
  children?: string;
  id?: string;
  onClick?: () => void;
}) => {
  return (
    <section id={id} className="container vhalf noCursor handPointing">
      <picture className="flexCenterH">
        <IllustrationHandPointingH width="400" />
      </picture>
      <a
        style={{ marginBottom: "150px", marginRight: "auto" }}
        className="button scaleHover smallHeader"
        onClick={onClick}
      >
        {children}
      </a>
    </section>
  );
};

export const HandPointingLeft = ({
  children,
  id,
  onClick,
}: {
  children?: string;
  id?: string;
  onClick?: () => void;
}) => {
  return (
    <section id={id} className="container vhalf noCursor handPointing">
      <a
        style={{ marginBottom: "150px", marginLeft: "auto" }}
        className="button scaleHover smallHeader"
        onClick={onClick}
      >
        {children}
      </a>
      <picture style={{ transform: "rotateY(180deg)" }} className="flexCenterH">
        <IllustrationHandPointingH width="400" />
      </picture>
    </section>
  );
};

export const HandPointingDown = ({
  children,
  id,
  onClick,
}: {
  children?: string;
  id?: string;
  onClick?: () => void;
}) => {
  return (
    <section id={id} className="container">
      <picture style={{ marginRight: "60px" }} className="flexRightH">
        <IllustrationHandPointingV height="300" />
      </picture>
      <br />
      <aside className="flexRightH">
        <a
          style={{ marginRight: "10px" }}
          className="button smallHeader scaleHover"
          onClick={onClick}
        >
          {children}
        </a>
      </aside>
    </section>
  );
};

export const HandPointingUp = ({
  children,
  id,
  onClick,
}: {
  children?: string;
  id?: string;
  onClick?: () => void;
}) => {
  return (
    <section id={id} className="container">
      <aside className="flexLeftH">
        <a
          style={{ marginLeft: "10px" }}
          className="button smallHeader scaleHover"
          onClick={onClick}
        >
          {children}
        </a>
      </aside>
      <br />
      <picture
        style={{ marginLeft: "25px", transform: "rotate(180deg)" }}
        className="flexRightH"
      >
        <IllustrationHandPointingV height="300" />
      </picture>
      <br />
    </section>
  );
};
