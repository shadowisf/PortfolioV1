type buttonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  children: string;
  href?: string;
};

export function Button({ icon, onClick, children, href }: buttonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="button toThinHover"
      onClick={onClick}
    >
      <span className="flexCenterV" style={{ gap: "0.5rem" }}>
        {icon} {children}
      </span>
    </a>
  );
}
