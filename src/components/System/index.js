import React, { Component } from "react";
import { Link } from "react-router-dom";

import client1 from "../../assets/images/client/img-1.jpg";

const System = ({ services }) => {
  return (
    <React.Fragment>
      {services.map((service, key) => (
        <div className="col-lg-4 col-md-6" key={key}>
          <div className="service-box mt-4">
            {/* <i className={`${service.icon} text-purple h1 service-icon`} /> */}
            <img
              src={client1}
              alt="client"
              className="img-fluid mx-auto d-block rounded-circle user-img"
            />
            <h5 className="text-dark font-weight-medium service-title mb-3 mt-5">
              {service.title}
            </h5>
            <p className="text-muted mb-4 f-15">{service.description}</p>
            <Link to={service.link} className="text-purple">
              <i className="remixicon-arrow-right-fill h4" />
            </Link>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default System;
