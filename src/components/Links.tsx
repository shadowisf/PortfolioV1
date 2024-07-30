type hyperLinkProps = {
  children?: string;
  img?: React.ReactNode;
  href?: string;
  alt?: boolean;
};

type pageLinkProps = {
  children?: string;
  img?: React.ReactNode;
  alt?: boolean;
  onClick?: () => void;
};

export const HyperLinkWithIcon = ({
  children,
  img,
  href,
  alt,
}: hyperLinkProps) => {
  return (
    <span className="flexCenterV">
      <picture className="flexCenterV">{img}</picture>
      <a
        style={
          alt
            ? { marginLeft: "0.5rem", padding: "7px 0px 7px 0px" }
            : { marginLeft: "0.5rem" }
        }
        className="toThinHover link noCursor"
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </span>
  );
};

export const PageLinkWithIcon = ({
  children,
  img,
  alt,
  onClick,
}: pageLinkProps) => {
  return (
    <span className="flexCenterV">
      <picture className="flexCenterV">{img}</picture>
      <a
        style={
          alt
            ? { marginLeft: "0.5rem", padding: "7px 0px 7px 0px" }
            : { marginLeft: "0.5rem" }
        }
        className="toThinHover link noCursor"
        onClick={onClick}
      >
        {children}
      </a>
    </span>
  );
};
