import React, { useState } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";
import System from "../System";
const Systems = () => {
  const [estado, setEstado] = useState({
    services: [
      {
        title: "Adempiere Iancarina",
        icon: "pe-7s-exapnd2",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur consequuntu.",
        link: "#",
        img: "../../assets/images/logo-adempiere.png",
      },
      {
        title: "Adempiere Inalsa",
        icon: "pe-7s-world",
        description:
          "These cases are perfectly simple and easy to distinguish that is a free hour.",
        link: "#",
        img: "../../assets/images/logo-adempiere.png",
      },
      {
        title: "Adempiere Ianca",
        icon: "pe-7s-diamond",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit consectetur adipisci.",
        link: "#",
        img: "../../assets/images/logo-adempiere.png",
      },
      {
        title: "Adempiere Corisa",
        icon: "pe-7s-paint-bucket",
        description:
          "At vero eos et accusamus iusto odio dignissimos qui blanditiis voluptatum.",
        link: "#",
        img: "../../assets/images/logo-adempiere.png",
      },
      {
        title: "SICMARY",
        icon: "pe-7s-rocket",
        description:
          "Et harum quidem rerum facilis est et expedita distinctio libero tempore soluta.",
        link: "#",
        img: "../.../assets/images/logo-adempiere.png",
      },
      {
        title: "Owncloud",
        icon: "pe-7s-graph1",
        description:
          "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.",
        link: "#",
        img: "../../assets/images/logo-adempiere.png",
      },
    ],
    services1: [
      {
        title: "Digital Design",
        icon: "pe-7s-paint-bucket",
        description:
          "At vero eos et accusamus iusto odio dignissimos qui blanditiis voluptatum.",
        link: "#",
      },
      {
        title: "Solutions Business",
        icon: "pe-7s-rocket",
        description:
          "Et harum quidem rerum facilis est et expedita distinctio libero tempore soluta.",
        link: "#",
      },
      {
        title: "Dynamic Growth",
        icon: "pe-7s-graph1",
        description:
          "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.",
        link: "#",
      },
    ],
  });
  return (
    <React.Fragment>
      {/* SERVICE START  */}
      <section id="service" className="section position-relative">
        <Container>
          <SectionTitle
            title="Sistemas"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
          />
          <Row>
            <System services={estado.services} />
          </Row>
        </Container>
      </section>

      {/* SERVICE END  */}
    </React.Fragment>
  );
};

export default Systems;
