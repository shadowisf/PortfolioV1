import { useState, useEffect } from "react";
import Index from "../pages/Index";
import {
  generateADACompliantColors,
  keyControls,
} from "../components/ColorUtils";

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    generateADACompliantColors();
    keyControls();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <section className="loadingScreen">
      <span className="largeHeader typedLoading"></span>
    </section>
  ) : (
    <Index />
  );
};

export default LoadingScreen;
