export const HyperLink = ({
  children,
  href,
}: {
  children?: string;
  href?: string;
}) => {
  return (
    <a className="hyperLink noCursor" href={href} target="_blank">
      {children}
    </a>
  );
};

export const HyperLinkWithIcon = ({
  children,
  img,
  href,
  alt,
}: {
  children?: string;
  img?: React.ReactNode;
  href?: string;
  alt?: boolean;
}) => {
  return (
    <span className="flexCenterV">
      <picture className="flexCenterV">{img}</picture>
      <a
        style={
          alt
            ? { marginLeft: "0.5rem", padding: "7px 0px 7px 0px" }
            : { marginLeft: "0.5rem" }
        }
        className="toThinHover hyperLink noCursor"
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </span>
  );
};
