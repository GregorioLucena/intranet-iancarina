import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import NavbarPage from "../Navbar/Navbar_Page";

const AppLayout = ({ children }) => {
  const [pos, setPos] = useState(document.documentElement.scrollTop);
  const [imglight, setImglight] = useState(false);
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  });

  // componentDidMount() {
  //   window.addEventListener("scroll", this.scrollNavigation, true);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.scrollNavigation, true);
  // }

  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;

    if (scrollup > pos) {
      setNavClass("darkheader");
      setImglight(false);
    } else if (window.innerWidth <= 768) {
      setNavClass("darkheader");
      setImglight(false);
    } else {
      setNavClass("");
      setImglight(false);
    }
  };

  return <>{children}</>;
};

export default AppLayout;
