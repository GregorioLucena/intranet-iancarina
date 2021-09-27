import React from "react";
import { Container } from "reactstrap";
//Import Components
import SectionTitle from "../Common/SectionTitle";
//Slider
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Notice from "../Notice";

const NoticeFeatured = () => {
  const Notices = [
    {
      id: 1,
      img: "",
      name: "PERSONAL DE GUARDIA TI",
      technology: "Web Development, USA",
      description:
        "Aeque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur numquam tempora.",
      label: "Nuevo",
    },
    {
      id: 2,
      img: "",
      name: "PREMIOS DICIEMBRE 2020",
      technology: "Web Designer, USA",
      description:
        " Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
      label: "Nuevo",
    },
    {
      id: 3,
      img: "",
      name: "PÓLIZA H.C.M BANESCO SEGUROS 2020-2021",
      technology: "Web Designer, USA",
      description:
        " Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
    },
    {
      id: 4,
      img: "",
      name: "PROMOCIONES / RRHH – ANUNCIOS:",
      technology: "Web Designer, USA",
      description:
        " Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
      label: "Nuevo",
    },
    {
      id: 5,
      img: "",
      name: "INGRESOS / RRHH – ANUNCIOS:",
      technology: "Web Designer, USA",
      description:
        " Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
      label: "Nuevo",
    },
    {
      id: 6,
      img: "",
      name: "POLIZA FUNERARIA",
      technology: "Web Designer, USA",
      description:
        " Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
    },
    {
      id: 7,
      img: "",
      name: "NUEVO CORONAVIRUS COVID-19 / LO QUE DEBEMOS SABER",
      technology: "Web Designer, USA",
      description:
        " Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
    },
    {
      id: 8,
      img: "",
      name: "PREMIOS 1º DE MAYO 2020",
      technology: "Web Designer, USA",
      description:
        " Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
      label: "Nuevo",
    },
  ];

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  };

  return (
    <React.Fragment>
      {/* <!-- TESTIMONIAL START --> */}
      {/* section */}
      <section className=" section position-relative" id="client">
        <Container>
          <SectionTitle
            title="Nuestras Noticias Destacadas"
            description="Estas son las noticias mas importantes de nuestra compañia"
          />
          <div className="row mt-4">
            <OwlCarousel
              className="owl-theme client-images text-center"
              items={2}
              loop={true}
              margin={10}
              nav={false}
              dots={true}
              autoplay={true}
              responsive={responsive}
              autoplayHoverPause={true}
              autoplayTimeout={2500}
            >
              {Notices.map((notice) => (
                <Notice key={notice.id} notice={notice} />
              ))}
            </OwlCarousel>
          </div>
        </Container>
      </section>
      {/* TESTIMONIAL END */}
    </React.Fragment>
  );
};

export default NoticeFeatured;
