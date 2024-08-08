type buttonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  children: string;
};

export function Button({ icon, onClick, children }: buttonProps) {
  return (
    <button className="toThinHover noCursor" onClick={onClick}>
      <span className="flexCenterV" style={{ gap: "0.5rem" }}>
        {icon} {children}
      </span>
    </button>
  );
}
