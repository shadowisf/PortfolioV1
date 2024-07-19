import { useState, useEffect } from "react";
import Index from "../pages/Index";
import { generateADACompliantColors } from "../components/ColorUtils";

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    generateADACompliantColors();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <section className="loadingScreen textCenter">
      <span className="largeHeader typedLoading"></span>
    </section>
  ) : (
    <Index />
  );
};

export default LoadingScreen;
