const CustomCursor = () => {
  const cursorStyle = {
    cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='40' viewBox='0 -960 960 960' width='40'%3E%3Cpath d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' fill='%23var(--text-color)' /%3E%3C/svg%3E"), auto`
  };

  return (
    <div style={cursorStyle}>
      TEST
    </div>
  );
};

export default CustomCursor;
