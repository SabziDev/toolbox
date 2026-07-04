import { useOutlet } from "react-router";

import AnimatedOutlet from "../components/AnimatedOutlet/AnimatedOutlet";
import LayoutBase from "../components/LayoutBase";
import useCurrentPageStatus from "../hooks/useCurrentPageStatus";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const MainLayout = () => {
  const outlet = useOutlet();

  const { isPage404, isHideLayout } = useCurrentPageStatus();

  return (
    <>
      <LayoutBase />

      {!isHideLayout && <Header />}

      <main id="main-root">
        {isPage404 ? (
          outlet
        ) : (
          // TODO Sections mt
          <div className="*:mt-SIZE container">
            <AnimatedOutlet>{outlet}</AnimatedOutlet>
          </div>
        )}
      </main>

      {!isHideLayout && <Footer />}
    </>
  );
};

export default MainLayout;
