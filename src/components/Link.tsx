type hyperLinkProps = {
  children?: React.ReactNode;
  img?: React.ReactNode;
  href?: string;
  alt?: boolean;
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
