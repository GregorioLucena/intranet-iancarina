import React, { useEffect, useState } from "react";
import Ejemplo from "../../components/ImageGallery";
import ImageGallery from "../../components/ImageGallery";
import axios from "axios";
// const URL = "https://jsonplaceholder.typicode.com/photos";
import ParcerHtml from "../../components/ParserHtml";
import Container from "reactstrap/lib/Container";
import { Link, useHistory } from "react-router-dom";
import SectionTitle from "../../components/Common/SectionTitle";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import MyEditor from "../../components/MyEditor";

import footerlogo from "../../assets/images/logo-mary.png";
const imagesFullPhoto = [
  {
    titulo: "¡Mix Deportivo!",
    html:
      '<p><br></p><p style="text-align: center;"><strong>Programa Recreativo Laboral</strong></p><p>El P.R.L. es un conjunto de actividades culturales, deportivas y recreativas, que tienen como propósito lograr la integración entre los trabajadores, mejorar su calidad de vida, prevenir las enfermedades ocupacionales, reducir los accidentes de trabajo, y aumentar su productividad.</p><p>Es fundamental que los trabajadores participen activamente en los programas de recreación ya que además de contar con actividades de esparcimiento, se conseguirá mejorar el ambiente de trabajo y además dar cumplimiento a lo establecido en la ley.</p><p>A continuación se detallan las actividades realizadas en el Centro Deportivo Mary, las cuales tuvieron inicio el día 15 de octubre del presente año.</p><p style="text-align: center;"><strong>Torneo de Dominó</strong></p><p>Con un total de 10 equipos inscritos se dio apertura al Torneo, en donde la modalidad de juego será todos contra todos y el equipo con mayor cantidad de juegos ganados será el campeón. En caso de realizarse un empate se realizará un último juego por el trofeo. En este mismo sentido se detallan los participantes del torneo.</p><ul><li>Jesús Pérez, Wendy Gutiérrez, Héctor Meléndez –<span>&nbsp;</span><strong>Mfjfaje</strong></li><li>Víctor Salas, José Márquez, Omarylitza Herrera –<span>&nbsp;</span><strong>Control de Calidad</strong></li><li>Emigdio González, José Mavarez, Guadalupe Sánchez –<span>&nbsp;</span><strong>Transporte</strong></li><li>José Aldana, Deiby García, Nerio Rodríguez –<span>&nbsp;</span><strong>Los Gordos</strong></li><li>Gil Mendoza, José Guedez, Pedro Guevara –<span>&nbsp;</span><strong>Los Guerreros</strong></li><li>José Hernández, Jesús Morillo, Edwin Urbano –<span>&nbsp;</span><strong>La Crema</strong></li><li>Julio Salas, Alexis Tovar, Stalin Sequera –<span>&nbsp;</span><strong>Suministros</strong></li><li>Miguel Rodríguez, Pedro Rivero –<span>&nbsp;</span><strong>Secadora</strong></li><li>Edixon Valera, Johnny Escudero –<span>&nbsp;</span><strong>RCS</strong></li><li>Nelson Gómez, Ronald Báez –<span>&nbsp;</span><strong>Los Piquines</strong></li></ul><p><a href="http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/10/Calendario-Domin%C3%B3.pdf">Haz clic aquí y visualiza el calendario de dominó.</a></p><p style="text-align: center;"><strong>Torneo de Bolas Criollas</strong></p><p>Este deporte tradicional es uno de los más destacados dentro de las instalaciones con un total de 9 equipos inscritos se realizó un sorteo donde se dividieron en dos grupos, el A de cinco equipos y el B de cuatro equipos. Donde se realizará un todos contra todos y clasificarán los dos primeros equipos de cada grupo y se enfrentarán entre sí. Siendo la semifinal el primero del grupo A contra el segundo del grupo B y el primero del grupo B contra el segundo del grupo A, los ganadores se enfrentarán entre sí por el título del torneo. A continuación los participantes.</p><ul><li>Argenis Brito, Juan Pérez, Ángel Lucena, Francisco Valera, Jean Peña, Juan Escobar –<span>&nbsp;</span><strong>Mfjfaje</strong></li><li>Luis González, Alexis Colmenárez, Alirio Coroba, William Alvarado, Raúl Tua, Omar Escalona, José Falcón –<span>&nbsp;</span><strong>Los Paleros P2</strong></li><li>Yorvin Gómez, Yohander Sánchez, Kelvin Herrera, Nelson Suarez, Rixio Rodríguez, Luis Rodríguez, Ricardo Aya, Henry Lucena –<span>&nbsp;</span><strong>Tornomecanicos</strong></li><li>Yrany Fernández, José Escalona, Darwin Pérez, Alexis Martínez, Stalin Sandoval, Yongry Pérez, Roberto Vargas, Franklin Suarez –<span>&nbsp;</span><strong>Los Terribles</strong></li><li>Edgar Placeres, José Rangel, José Piñero, Carlos Lucena, Ronald Escobar, Oscar Soteldo, Martin Quevedo, Cesar Martínez –<span>&nbsp;</span><strong>Los Aviadores</strong></li><li>Viviana Tirman, Rosali Zabaleta, Jesús Castillo, Yanmarcos Rodríguez, José Niza, Pablo Pulido, Anthony Vargas –<span>&nbsp;</span><strong>Calidad Total</strong></li><li>Yessika Vásquez, Gabriel Timaure, Luis Cedeño, José Oviedo, Jeffery Evies, José Parra –<span>&nbsp;</span><strong>Grupo Elite Mary</strong></li><li>Luis Escobar, Luis Colmenárez, Adolfo Bigotto, José Hernández, Guillermo Piña, Carlos Araujo, Héctor Bracamonte –<span>&nbsp;</span><strong>Crema de Arroz</strong></li><li>Oliver Colmenárez, José Juárez, Daniel Mendoza, Erikson Hernández, Nicolás Moreno, Reyes Sulbaran, Nelson Rodríguez –<span>&nbsp;</span><strong>La Colmena</strong></li></ul><p><a href="http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/10/Calendario-Bolas-Criollas.pdf">Haz clic aquí y visualiza el calendario de bolas criollas.</a></p><p style="text-align: center;"><strong>Torneo de Voleibol de Playa Mixto</strong></p><p>Uno de los torneos con más actividad y frecuencia dentro del campo deportivo, tuvo una gran apertura y receptividad con los trabajadores, con un total de seis equipos inscritos, se dividieron en dos grupos, el A y el B. Donde se realizará un todos contra todos y clasificarán los dos primeros equipos de cada grupo y se enfrentarán entre sí. Siendo la semifinal el primero del grupo A contra el segundo del grupo B y el primero del grupo B contra el segundo del grupo A, los ganadores se enfrentarán entre sí por el título del torneo. A continuación los participantes.</p><ul><li>Milagros González, Miguel Torrealba, Edson Rodríguez, José Alvarado, Francisco Santiago –<span>&nbsp;</span><strong>Mfjfaje</strong></li><li>Osduar Méndez, Wilmelys Majano, Kaiber Colmenárez, Johangel Unda, Juan Hernández –<span>&nbsp;</span><strong>Iancarina Star</strong></li><li>Héctor Ojeda, Ronald Marchan, Denise Arroyo, Neismar Alvarado, Héctor Barrios –<span>&nbsp;</span><strong>Caimaneros de Mary</strong></li><li>Juan González, Asdrúbal Ñeri, Juan Quero, Marlenis Gallardo –<span>&nbsp;</span><strong>Los Turcos</strong></li><li>Eliecer Lucena, Rafael De Armas, Anderson Pineda, Gabriela Jaimes, Giannina Menecola –<span>&nbsp;</span><strong>Los Duros del Transporte</strong></li><li>Luany Gallegos, José Márquez, Luis Ascanio, Víctor Salas, Francisco Roldan –<span>&nbsp;</span><strong>Calidad Teams.</strong></li></ul>',
    images: [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/10/PHOTO-2019-10-18-10-09-41-1024x768.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 2,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/10/PHOTO-2019-10-18-10-09-56-1024x576.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 3,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/10/PHOTO-2019-10-18-10-09-59-1024x768.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 4,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/10/PHOTO-2019-10-18-10-10-03-1024x768.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 5,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/10/PHOTO-2019-10-18-10-10-04_1-1024x768.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
    ],
  },
  {
    titulo: "Resultados Encuesta TI/Aplicaciones",
    html: "",
    images: [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/05/Grafica-Encuesta-1.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
    ],
  },
  {
    titulo: "INGRESOS / RRHH",
    html: "",
    images: [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Anuncio-Organizacional-Ingresos-Enero-2021-parte-I.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 2,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Anuncio-Organizacional-Ingresos-Enero-2021-parte-2.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 3,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Ingresos-Diciembre-2020.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 4,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Imagen2-2.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 5,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Ingresos-Septiembre-2020.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 6,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Imagen08.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 7,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/INGRESOS-DE-JULIO-2-2020.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 8,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Imagen21.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 9,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Ingresos-Mayo.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 10,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Anuncio-Organizacional-Abril-1.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 11,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Anuncio-Organizacional-Abril-4.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 12,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Imagen1-Ingreso.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 13,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/Imagen3-Ingreso.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 14,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2019/03/848.png",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
    ],
  },
  {
    titulo: "Ganadores: Concurso “Hoy es el día de ganar”",
    html: "",
    images: [
      {
        albumId: 1,
        id: 1,
        title: "Ganadores: Concurso “Hoy es el día de ganar”",
        url:
          "http://www.iancarina.com.ve/wordpress/wp-content/uploads/2018/11/Afiche-Ganadores-Mary-4.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
    ],
  },
];

const FullNotice = () => {
  // const [images, setTmages] = useState(imagesFullPhoto.images);
  // const Titulo = imagesFullPhoto.titulo;

  // useEffect(() => {
  //   axios.get(URL).then((res) => setTmages(res.data.slice(0, 20)));
  // }, []);
  const history = useHistory();

  const handleClick = () => {
    console.log("entro");
    history.goBack();
  };
  return (
    <React.Fragment>
      <style>{`
            .sectiontitle{
              font-weight: 700!important;
              text-align: center!important;
              color: #ffffff !important;
            }
            `}</style>
      <section className=" section position-relative" id="client">
        <Container fluid>
          <div className="bg-overlay" />
          <Row className="justify-content-center">
            <Col sm={12} md={4} lg={4} xl={4} xxl={4}>
              <div className="text-center float-md-left">
                <Link onClick={handleClick}>
                  <img
                    src={footerlogo}
                    alt="footerLogo"
                    className="img-fluid "
                    height={32}
                  />
                </Link>
              </div>
            </Col>
            <Col sm={12} md={6} lg={8} xl={8} xxl={8}>
              <div className="text-center title my-5 float-left">
                <h1 className="font-weight-bold text-uppercase text-dark sectiontitle">
                  Noticias Destacadas
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="contentnotice ">
        {imagesFullPhoto.map((image) => (
          <div className="my-2">
            <style>{`
            .contentnotice{
              // background:#F4F6F6;
              //  box-shadow: 1px 1px 3px #999;
            }

            }`}</style>

            <h1>{image.titulo}</h1>
            {/* <MyEditor /> */}
            <ParcerHtml html={image.html} />
            <ImageGallery images={image.images} limit={4} />
            <hr className="mt-5 mb-5"></hr>
          </div>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default FullNotice;
