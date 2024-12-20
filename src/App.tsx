import { useState, useEffect } from "react";
import { Header, Hero, Tokens } from "./components";
import { SpinnerLoader } from "./components/SpinnerLoader";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {isLoading && <SpinnerLoader />}
      <div className="main_container">
        <Header />
        <Hero />
        <Tokens />
        <img
          src="/bg.png"
          alt="Background"
          className="absolute hidden xl:block w-full h-full top-0 z-[-1]"
        />
      </div>
    </>
  );
};
