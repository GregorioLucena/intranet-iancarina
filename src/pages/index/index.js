import React, { Component, useEffect, useState } from "react";
import NavbarPage from "../../components/Navbar/Navbar_Page";
import ListSystem from "../../components/ListSystem";
import BusinessGroup from "../../components/BusinessGroup";
import ListNoticeFeatured from "../../components/ListNoticeFeatured";
import Footer from "../../components/Footer/footer";
import NoticeCarrousel from "../../components/NoticeCarrousel";
import Listcontact from "../../components/ListContact";
import FormLogin from "../../components/FormLogin";
import AppLayout from "../../components/AppLayout";
import Geolocation from "../../components/Geolocation";

import { Animated } from "react-animated-css";

const Index = () => {
  const [pos, setPos] = useState(document.documentElement.scrollTop);
  const [imglight, setImglight] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [visibleNoticeFeature, setVisibleNoticeFeature] = useState(false);
  const [visibleListContact, setVisibleListContact] = useState(false);
  const [visibleListSystem, setVisibleListSystem] = useState(false);
  const [visibleBusinessGroup, setVisibleBusinessGroup] = useState(false);

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
    console.log(scrollup);
    scrollup > 300 && setVisibleNoticeFeature(true);
    scrollup > 1000 && setVisibleListContact(true);
    scrollup > 2000 && setVisibleListSystem(true);
    scrollup > 3000 && setVisibleBusinessGroup(true);
  };

  return (
    <React.Fragment>
      <NavbarPage navclass={navClass} imglight={imglight} />
      <NoticeCarrousel />
      {/* <FormLogin /> */}
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={visibleNoticeFeature}
      >
        <ListNoticeFeatured />
      </Animated>

      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        isVisible={visibleListContact}
      >
        <Listcontact />
      </Animated>

      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        isVisible={visibleListSystem}
      >
        <ListSystem />
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={visibleBusinessGroup}
      >
        <BusinessGroup />
      </Animated>
      <Geolocation /> 
      <Footer />
    </React.Fragment>
  );
};

export default Index;
