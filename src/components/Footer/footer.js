import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

//Import Images
import footerlogo from "../../assets/images/mary-logo-nuevo.png";

class Footer extends Component {
  state = {
    footerItems: [
      {
        title: "Product",
        links: [
          { linkTitle: "Tranding", link: "/" },
          { linkTitle: "Popular", link: "#" },
          { linkTitle: "Job Opening", link: "#" },
          { linkTitle: "Customers", link: "#" },
          { linkTitle: "Features", link: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { linkTitle: "Works", link: "#" },
          { linkTitle: "Strategy", link: "#" },
          { linkTitle: "Releases", link: "#" },
          { linkTitle: "Press", link: "#" },
          { linkTitle: "Mission", link: "#" },
        ],
      },
      {
        title: "Learn More",
        links: [
          { linkTitle: "Developers", link: "#" },
          { linkTitle: "Support", link: "#" },
          { linkTitle: "Customer Service", link: "#" },
          { linkTitle: "Get Started", link: "#" },
          { linkTitle: "Guide", link: "#" },
        ],
      },
    ],
    socialIcons: [
      { icon: "remixicon-facebook-line", iconLink: "#" },
      { icon: "remixicon-twitter-line", iconLink: "#" },
      { icon: "remixicon-instagram-line", iconLink: "#" },
      { icon: "remixicon-skype-line", iconLink: "#" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* FOOTER START  */}
        <footer className="pt-5 pb-4 position-relative bg-light">
          <Container className="container text-center">
            <Row>
              <Col lg={12}>
                <div className="footer-about-content mt-4">
                  <img
                    src={footerlogo}
                    alt="footerLogo"
                    // className="img-fluid"
                    className="img"
                    height={92}
                  />
                  <p className="mt-4 text-muted f-15">
                    En Alimentos Mary tenemos la firme convicción de que con la
                    perseverancia, el trabajo en equipo, el respeto y la
                    honestidad podemos construir un gran país, desarrollando
                    soluciones alimenticias de calidad, que generen confianza en
                    el consumidor, siendo amables con el medio ambiente y
                    procurando sembrar las bases para las generaciones
                    venideras.
                  </p>
                  <ul className="list-inline footer-icon mt-4">
                    <li className="list-inline-item h4 mr-3">
                      <Link
                        to={{
                          pathname:
                            "https://www.facebook.com/alimentosmary.ve/",
                        }}
                        className="text-purple"
                        target={"_blank"}
                      >
                        <i className="remixicon-facebook-line f-16" />
                      </Link>
                    </li>

                    <li className="list-inline-item h4 mr-3">
                      <Link
                        to={{
                          pathname: "https://twitter.com/AlimentosMaryVe",
                        }}
                        className="text-purple"
                        target={"_blank"}
                      >
                        <i className="remixicon-twitter-line f-16" />
                      </Link>
                    </li>

                    <li className="list-inline-item h4 mr-3">
                      <Link
                        to={{
                          pathname:
                            "https://www.instagram.com/alimentosmary.ve/",
                        }}
                        className="text-purple"
                        target={"_blank"}
                      >
                        <i className="remixicon-instagram-line f-16" />
                      </Link>
                    </li>

                    <li className="list-inline-item h4 mr-3">
                      <Link
                        to={{
                          pathname:
                            "https://www.youtube.com/channel/UCpZk-GROJ8wBF--uZxVG5Mw",
                        }}
                        className="text-purple"
                        target={"_blank"}
                      >
                        <i className="remixicon-youtube-line f-16" />
                      </Link>
                    </li>

                    <li className="list-inline-item h4 mr-3">
                      <Link
                        to={{
                          pathname: "https://www.alimentosmary.com/",
                        }}
                        className="text-purple"
                        target={"_blank"}
                      >
                        <i className="remixicon-google-fill f-16" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* <Col lg={8} className="offset-lg-1">
                <div className="row">
                  {this.state.footerItems.map((item, key) => (
                    <div className="col-md-4" key={key}>
                      <div className="mt-4">
                        <h5 className="text-dark footer-title font-weight-medium mb-4">
                          {item.title}
                        </h5>
                        <ul className="list-unstyled footer-sub-menu">
                          {item.links.map((fLink, key) => (
                            <li className="f-15 mt-3 mb-3" key={key}>
                              <Link to={fLink.link} className="text-muted">
                                {fLink.linkTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Col> */}
            </Row>
            <FooterLinks />
          </Container>
        </footer>

        {/* FOOTER END  */}
      </React.Fragment>
    );
  }
}

export default Footer;
