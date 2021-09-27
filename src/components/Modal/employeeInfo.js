import React, { useState } from "react";
import { Animated } from "react-animated-css";
import Badge from "reactstrap/lib/Badge";
import Modal from "reactstrap/lib/Modal";

import client1 from "../../assets/images/client/img-1.jpg";

const ModalEnployeeInfo = (props) => {
  return (
    // <></>
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <Animated animationIn="tada" animationOut="fadeOut" isVisible={true}>
          <div className="item">
            {/* <Link to="/notice" target={""}> */}
            <div className="testi-content bg-white text-center m-3 pricing-box active">
              {props.dataModal.label && (
                <div className="ribbon">
                  <p className="mb-0 f-12 font-weight-medium text-white">
                    {props.dataModal.label}
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
                  {props.dataModal.company}
                </Badge>
              </h5>
              <h5 className="text-dark mt-4 f-18 mb-0">
                {props.dataModal.name}
              </h5>
              <p className="text-muted f-16">{props.dataModal.department}</p>
              <p className="text-muted f-16">{props.dataModal.position}</p>
              <p className="text-muted f-15 mt-3 mb-0">
                Correo: {props.dataModal.email} / Ext: {props.dataModal.ext}
              </p>
            </div>
            {/* </Link> */}
          </div>
        </Animated>
      </Modal>
    </div>
  );
};

export default ModalEnployeeInfo;
