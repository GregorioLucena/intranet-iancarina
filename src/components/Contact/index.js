import React, { useState } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import Badge from "reactstrap/lib/Badge";
import Col from "reactstrap/lib/Col";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import ListGroupItemHeading from "reactstrap/lib/ListGroupItemHeading";
import ListGroupItemText from "reactstrap/lib/ListGroupItemText";
import Row from "reactstrap/lib/Row";
import client1 from "../../assets/images/client/img-1.jpg";

const Contact = ({ contact }) => {
  return (
    <React.Fragment>
      <ListGroupItem className="list">
        {/* <div className="cajon1"> */}
        <Row>
          <Col xl={1} lg={2} md={3} sm={2} xs={2}>
            <Avatar
              src={client1}
              // googleId="118096717852922241760"
              size={50}
              round={true}
              // name={contact.name}
            />
          </Col>
          {/* </div> */}
          {/* <div className="cajon2"> */}
          <Col xl={11} lg={10} md={9} sm={10} xs={10}>
            <ListGroupItemHeading>
              <Row>
                <Col lg={8} md={10} sm={8} xs={8} size={1}>
                  <div className="tittle-list">
                    <Badge pill className="badge-color">
                      {contact.department}
                    </Badge>{" "}
                    / {contact.name}
                  </div>
                </Col>
                <Col lg={4} md={2} sm={4} xs={4}>
                  <div className="tittle-list">
                    <Badge pill color="info">
                      {contact.company}
                    </Badge>
                  </div>
                </Col>
              </Row>
            </ListGroupItemHeading>
            <ListGroupItemText>
              <Row>
                <Col xl={8} lg={12} md={12} sm={12} xs={12}>
                  <div className="content-list">correo: {contact.email}</div>
                </Col>
                <Col xl={4} lg={12} md={12} sm={12} xs={12}>
                  <div className="content-list">
                    Ext: {contact.ext} / Codificado: {contact.encode}
                  </div>
                </Col>
              </Row>
            </ListGroupItemText>
          </Col>
        </Row>

        {/* </div> */}
      </ListGroupItem>
    </React.Fragment>
  );
};

export default Contact;
