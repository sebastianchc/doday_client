import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import Sidebar from "layouts/Sidebar/Sidebar";
import { useState } from "react";
import useTime from "services/useTime";
import { ChildrenProps } from "utils/types/props/types";

interface LayoutProps extends ChildrenProps {}

const Layout = ({ children }: LayoutProps) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);
  const { time } = useTime("hours");

  return (
    <section className="layout">
      <Header
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
        time={time}
      />
      <main
        className={`main main--${time} ${sideBarIsOpen ? "main--size" : ""}`}
      >
        {sideBarIsOpen ? <Sidebar time={time} /> : null}
        {children}
      </main>
      <Footer time={time} />
    </section>
  );
};

export default Layout;
