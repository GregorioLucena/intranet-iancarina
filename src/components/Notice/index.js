import React from "react";
import { Link } from "react-router-dom";

import client1 from "../../assets/images/client/img-1.jpg";

const Notice = ({ notice }) => {
  return (
    <div className="item">
      <Link to="/notice" target={""}>
        <div className="testi-content bg-white text-center m-3 pricing-box active">
          {notice.label && (
            <div className="ribbon">
              <p className="mb-0 f-12 font-weight-medium text-white">
                {notice.label}
              </p>
            </div>
          )}
          <img
            src={client1}
            alt="client"
            className="img-fluid mx-auto d-block rounded-circle user-img"
          />
          <h5 className="text-dark mt-4 f-18 mb-0">{notice.name}</h5>
          <p className="text-muted f-14">{notice.technology}</p>
          <i className="remixicon-double-quotes-r h4 testi-icon" />
          <p className="text-muted f-15 mt-3 mb-0">{notice.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Notice;
