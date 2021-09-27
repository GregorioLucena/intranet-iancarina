import React, { Component, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Col from "reactstrap/lib/Col";

const BusinessGroup = () => {
  const [startCount, setStartCount] = useState(false);

  const handleScroll = async () => {
    if (window.scrollY > 1500) {
      await setStartCount(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <React.Fragment>
      <section id="we" className="section position-relative">
        <div className="bg-overlay" />

        <style>{`
            .sectiontitle{
              font-weight: 700!important;
              text-align: center!important;
              color: #ffffff !important;
            }
            .containerEx3 {
            //  height: 200px;
            //  padding-bottom: 100px;
            //  margin: 0 auto;
              //  position: relative;
              // background:red;
              }
              // .container {
              //   width: 300px;
              //   margin: 0 auto;
              //   }
              .ex2 img{
                height: 180;
                width: 180;
                margin: 15px 0;
                -webkit-transition: all 0.3s ease;
                -moz-transition: all 0.3s ease;
                -ms-transition: all 0.3s ease;
                transition: all 0.3s ease;
                }
                // .ex2 img:hover {
                // height: 200px;
                // width: 200px;
                // margin-left: -10px;
                // }
            // .img{
            //   padding-bottom: 20px !important;
            // }
            // .contenedor:hover .img {-webkit-transform:scale(1.3);transform:scale(1.3);}
            // .contenedor {overflow:hidden;}
            `}</style>
        <Container className="containerEx3">
          <Row className="justify-content-center">
            <Col>
              <div className="text-center title mb-4">
                <h5 className="font-weight-bold text-uppercase text-dark sectiontitle">
                  Grupo Empresarial
                </h5>
                <p className="text-muted sectiontitle">
                  Cinco empresas, que a su vez componen unidades de negocios son
                  nuestras bases estrategicas para el desarrollo de productos y
                  que se complementan con una estructura comercial sostenida en
                  5 sucursales ubicadas estratégicamente a nivel nacional lo que
                  permite cubrir todo el territorio nacional.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="ex2">
            <Col>
              <a href="https://www.alimentosmary.com/corisa/" target="_bland">
                <img
                  className="img"
                  src="https://www.alimentosmary.com/wp-content/uploads/2017/08/corisaCIR-280x280.png"
                  width="180"
                  height="180"
                  alt="Corisa"
                  title="Corisa"
                />
              </a>
            </Col>
            <Col className="contenedor">
              <a
                href="https://www.alimentosmary.com/industrias-amapola/"
                target="_bland"
              >
                <img
                  className="img"
                  src="https://www.alimentosmary.com/wp-content/uploads/2017/08/amapola-CIR-280x280.png"
                  width="180"
                  height="180"
                  alt="Amapola"
                  title="Amapola"
                />
              </a>
            </Col>
            <Col className="contenedor">
              <a href="https://www.alimentosmary.com/ianca/" target="_bland">
                <img
                  className="img"
                  src="https://www.alimentosmary.com/wp-content/uploads/2017/08/iancaCIR-280x280.png"
                  width="180"
                  height="180"
                  alt="Ianca"
                  title="Ianca"
                />
              </a>
            </Col>
            <Col className="contenedor">
              <a
                href="https://www.alimentosmary.com/iancarina/"
                target="_bland"
              >
                <img
                  className="img"
                  src="https://www.alimentosmary.com/wp-content/uploads/2017/08/maryCIR-280x280.png"
                  width="180"
                  height="180"
                  alt="Mary Iancarina"
                  title="Mary Iancarina"
                />
              </a>
            </Col>
            <Col className="contenedor">
              <a href="https://www.alimentosmary.com/inalsa/" target="_bland">
                <img
                  className="img"
                  src="https://www.alimentosmary.com/wp-content/uploads/2017/08/inalsaCIR-280x280.png"
                  width="180"
                  height="180"
                  alt="Inalsa"
                  title="Inalsa"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BusinessGroup;
