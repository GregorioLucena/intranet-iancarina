import React, { Component } from "react";
import {
  Container,
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./scrollSpy";

//Import Stickey Header
import StickyHeader from "react-sticky-header";

import logolight from "../../assets/images/mary-logo-nuevo.png";
import logodark from "../../assets/images/mary-logo-nuevo.png";

class NavbarPage extends Component {
  prevScrollpos = 0;

  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Inicio" },
        { id: 2, idnm: "client", navheading: "Noticias" },
        { id: 3, idnm: "agend", navheading: "Agenda Corporativa" },
        { id: 4, idnm: "service", navheading: "Sistemas" },
        { id: 4, idnm: "we", navheading: "Nosotros" },

        // { id: 4, idnm: "client", navheading: "Clients" },
        // { id: 5, idnm: "pricing", navheading: "Pricing" },
      ],
      isOpen: false,
      topPos: "0",
      isOpenMenu: false,
      navCenterClass: "",
    };
    this.toggleLine = this.toggleLine.bind(this);

    this.handleScrollMenu = this.handleScrollMenu.bind(this);
  }

  handleScrollMenu = async () => {
    let currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      await this.setState({ topPos: "0" });
    } else {
      await this.setState({ topPos: "-420px" });
    }
    this.prevScrollpos = currentScrollPos;

    if (window.innerWidth <= 768) {
      await this.setState({ navCenterClass: "" });
    } else {
      await this.setState({
        navCenterClass: "navbar-nav mx-auto navbar-center",
      });
    }
  };

  componentDidMount() {
    this.prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", this.handleScrollMenu);
    if (window.innerWidth <= 768) {
      this.setState({ navCenterClass: "" });
    } else {
      this.setState({ navCenterClass: "navbar-nav mx-auto navbar-center" });
    }
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  andleClic = () => {
    console.log("entro");
  };

  toggle = async () => {
    await this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.state.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <StickyHeader
          header={
            <Navbar
              className={`navbar navbar-expand-lg fixed-top navbar-custom ${
                this.props.isStickyNav === true
                  ? `sticky sticky-light`
                  : ` navbar-light`
              }`}
              id="navbar"
              style={{ top: this.state.topPos }}
            >
              <Container>
                <NavbarBrand href="/">
                  <img
                    src={this.props.imglight ? logolight : logodark}
                    alt=""
                    className="logo-light position-fixed my-1"
                    height={73}
                  />
                </NavbarBrand>

                <NavbarToggler
                  className="navbar-toggler"
                  type="button"
                  aria-label="Toggle navigation"
                  onClick={this.toggle}
                >
                  <i className="remixicon-menu-fill" />
                </NavbarToggler>
                <Collapse
                  id="navbarCollapse"
                  isOpen={this.state.isOpenMenu}
                  navbar
                >
                  <ScrollspyNav
                    scrollTargetIds={targetId}
                    scrollDuration="150"
                    headerBackground="false"
                    activeNavClass="active"
                    navCenterClass={this.state.navCenterClass}
                  >
                    <Nav
                      navbar
                      className="navbar-nav mx-auto navbar-center"
                      id="mySidenav"
                    >
                      {this.state.navItems.map((item, key) => (
                        <NavItem
                          key={key}
                          className={
                            item.navheading === "Home"
                              ? "nav-item active"
                              : "nav-item"
                          }
                        >
                          <NavLink href={"#" + item.idnm} className="nav-link">
                            {" "}
                            {item.navheading}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </ScrollspyNav>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        to={{
                          pathname:
                            "https://www.facebook.com/alimentosmary.ve/",
                        }}
                        className="nav-link"
                        target={"_blank"}
                      >
                        <i className="remixicon-facebook-line f-16" />
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to={{
                          pathname: "https://twitter.com/AlimentosMaryVe",
                        }}
                        className="nav-link"
                        target={"_blank"}
                      >
                        <i className="remixicon-twitter-line f-16" />
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link
                        to={{
                          pathname:
                            "https://www.instagram.com/alimentosmary.ve/",
                        }}
                        className="nav-link"
                        target={"_blank"}
                      >
                        <i className="remixicon-instagram-line f-16" />
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link
                        to={{
                          pathname:
                            "https://www.youtube.com/channel/UCpZk-GROJ8wBF--uZxVG5Mw",
                        }}
                        className="nav-link"
                        target={"_blank"}
                      >
                        <i className="remixicon-youtube-line f-16" />
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link
                        to={{
                          pathname: "https://www.alimentosmary.com/",
                        }}
                        className="nav-link"
                        target={"_blank"}
                      >
                        <i className="remixicon-google-fill f-16" />
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="" onClick={this.andleClic} className="nav-link">
                        Login
                      </Link>
                    </li>
                  </ul>
                </Collapse>
              </Container>
            </Navbar>
          }
          stickyOffset={-100}
        ></StickyHeader>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
