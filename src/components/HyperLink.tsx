export const HyperLink = ({
  children,
  href,
}: {
  children?: string;
  href?: string;
}) => {
  return (
    <a className="hyperLink" href={href} target="_blank">
      {children}
    </a>
  );
};

export const HyperLinkWithIcon = ({
  children,
  img,
  href,
}: {
  children?: string;
  img?: React.ReactNode;
  href?: string;
}) => {
  return (
    <span className="flexCenterV">
      <picture className="flexCenterV">{img}</picture>
      <a className="hyperLink withIcon" href={href} target="_blank">
        {children}
      </a>
    </span>
  );
};
