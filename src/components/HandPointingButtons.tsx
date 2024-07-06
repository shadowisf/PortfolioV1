import IllustrationHandPointingH from "../assets/IllustrationHandPointingH";
import IllustrationHandPointingV from "../assets/IllustrationHandPointingV";

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
    <section id={id} className="container vhalf noCursor flexCenterV">
      <picture className="flexCenterH">
        <IllustrationHandPointingH width="400" />
      </picture>
      <a
        className="button scaleHover smallHeader handPointingButtonBottomMargin"
        onClick={onClick}
      >
        {children}
      </a>
    </section>
  );
};

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
    <section id={id} className="container vhalf noCursor flexCenterV">
      <a
        className="button scaleHover smallHeader handPointingButtonBottomMargin"
        onClick={onClick}
      >
        {children}
      </a>
      <picture className="flexCenterH mirrorLeft">
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
      <picture className="flexRightH handPointingMarginRight">
        <IllustrationHandPointingV height="300" />
      </picture>
      <br />
      <aside className="flexRightH">
        <a
          className="button smallHeader scaleHover handPointingButtonRightMargin"
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
          className="button smallHeader scaleHover handPointingButtonLeftMargin"
          onClick={onClick}
        >
          {children}
        </a>
      </aside>
      <br />
      <picture className="flexRightH handPointingMarginLeft mirrorUp">
        <IllustrationHandPointingV height="300" />
      </picture>
      <br />
    </section>
  );
};
