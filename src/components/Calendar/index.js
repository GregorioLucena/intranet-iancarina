import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import esLocale from "@fullcalendar/core/locales/es";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { Animated } from "react-animated-css";

import Badge from "reactstrap/lib/Badge";

import ModalEnployeeInfo from "../Modal/employeeInfo";

const DemoApp = () => {
  const [modal, setModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleEventClick = (arg) => {
    setDataModal({
      name: arg.event._def.title,
      company: arg.event._def.extendedProps.company,
      position: arg.event._def.extendedProps.position,
      department: arg.event._def.extendedProps.department,
      email: arg.event._def.extendedProps.email,
      ext: arg.event._def.extendedProps.ext,
      label: arg.event._def.extendedProps.label,
    });

    toggle();
  };

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <FullCalendar
        locales={[esLocale]}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        weekends={false}
        height={500}
        events={[
          {
            title: "Yris Lameda",
            company: "Iancarina",
            date: "2021-04-01",
            label: "Nuevo",
            position: "Analista de Sistemas",
            department: "Tecnologia de la Informacion",
            email: "ylameda@mary-iancarina.com",
            ext: "124",
          },
          {
            title: "Roberto Olmos",
            company: "Iancarina",
            date: "2021-04-01",
            label: "Nuevo",
            position: "Analista de Sistemas",
            department: "Tecnologia de la Informacion",
            email: "rolmos@mary-iancarina.com",
            ext: "139",
          },
          {
            title: "Daniel Gudiño",
            company: "Ianca",
            date: "2021-04-01",
            label: "",
            position: "Programador",
            department: "Tecnologia de la Informacion",
            email: "dgudino@mary-iancarina.com",
            ext: "129",
          },
          {
            title: "Gregorio Lucena",
            company: "Corisa",
            date: "2021-04-21",
            label: "Nuevo",
            position: "Programador",
            department: "Tecnologia de la Informacion",
            email: "glucena@mary-iancarina.com",
            ext: "129",
          },
          {
            title: "Nestor Infante",
            company: "Iancarina",
            date: "2021-04-30",
            label: "",
            position: "Programador",
            department: "Tecnologia de la Informacion",
            email: "ninfante@mary-iancarina.com",
            ext: "129",
          },
        ]}
        eventColor="#ce3b3b"
        editable
        eventClick={handleEventClick}
      />

      <ModalEnployeeInfo modal={modal} toggle={toggle} dataModal={dataModal} />
      {/* <div>
        <Modal isOpen={modal} toggle={toggle}>
          <Animated animationIn="tada" animationOut="fadeOut" isVisible={true}>
            <div className="item">
              <div className="testi-content bg-white text-center m-3 pricing-box active">
                {dataModal.label && (
                  <div className="ribbon">
                    <p className="mb-0 f-12 font-weight-medium text-white">
                      {dataModal.label}
                    </p>
                  </div>
                )}
                <img
                  src={client1}
                  alt="client"
                  className="img-fluid mx-auto d-block rounded-circle user-img"
                />
                <h5 className="text-dark mt-4 f-18 mb-0">
                  <Badge pill color="info">
                    {dataModal.company}
                  </Badge>
                </h5>
                <h5 className="text-dark mt-4 f-18 mb-0">{dataModal.name}</h5>
                <p className="text-muted f-16">{dataModal.department}</p>
                <p className="text-muted f-16">{dataModal.position}</p>
                <p className="text-muted f-15 mt-3 mb-0">
                  Correo: {dataModal.email} / Ext: {dataModal.ext}
                </p>
              </div>
            </div>
          </Animated>
        </Modal>
      </div> */}
    </>
  );
};

export default DemoApp;
