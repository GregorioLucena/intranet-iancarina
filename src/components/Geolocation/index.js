import React from "react";
import { Row, Col, Container, Badge } from "reactstrap";
import SectionTitle from "../Common/SectionTitle";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Animated } from "react-animated-css";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
const markerIcon = new L.Icon({
  iconUrl: require("../../assets/images/marker.png"),
  iconSize: [25, 25],
  // iconAnchor: [0, 46],
  // popupAnchor: [3, -46],
});

const CompanyCoordinates = [
  {
    name: "Mary Iancarina",
    direction:
      "Km 185 Parque Industrial los llanos, Carretera Edo., Vía a Guanare, Araure, Portuguesa",
    latitud: 9.5271323,
    longitud: -69.2503888,
  },
  {
    name: "INALSA",
    direction: "carrera 3 con calle nº 2, parcelas nº 30,31,32, 4",
    latitud: 10.0896568,
    longitud: -69.3744293,
  },
  {
    name: "IANCA",
    direction:
      "Zona Industrial Carretera 'B' Via a la la Colonia Villa Bruzual, Portuguesa",
    latitud: 9.3173033,
    longitud: -69.1232889,
  },
  {
    name: "Industrias Amapola",
    direction: "2000 Calle Principal de Paso Real, Charallave 1210, Miranda",
    latitud: 10.21494,
    longitud: -66.8739525,
  },
  {
    name: "Centro Empresarial Premiun",
    direction: "Avenida Orinoco, 447, Urb, Caracas 1080, Miranda",
    latitud: 10.4816792,
    longitud: -66.8658151,
  },
];

const position = [6.713192, -66.2296957];
const styleMap = { width: "100%", height: "120vh" };

const Listcontact = (props) => {
  return (
    <section className="sectionlist">
      <Container fluid={true}>
        <SectionTitle
          title="Localización"
          description="Aquí encontrará la ubicación de nuestras empresas"
        />

        <Row>
          <Col>
            <MapContainer
              center={position}
              zoom={7}
              scrollWheelZoom={false}
              style={styleMap}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {CompanyCoordinates.map((coordinate) => (
                <Marker
                  position={[coordinate.latitud, coordinate.longitud]}
                  icon={markerIcon}
                >
                  <Popup>
                    <Animated
                      animationIn="tada"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <h6>
                        <Badge color="danger">{coordinate.name}</Badge>
                      </h6>
                      <br /> {coordinate.direction}
                    </Animated>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Listcontact;
