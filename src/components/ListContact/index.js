import React, { useState } from "react";
// import Avatar from "react-avatar";
import {
  ListGroup,
  // ListGroupItem,
  // ListGroupItemHeading,
  // ListGroupItemText,
} from "reactstrap";
import Badge from "reactstrap/lib/Badge";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import FullCalendar from "../Calendar";
import SectionTitle from "../Common/SectionTitle";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
// import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
// import { eventTupleToStore } from "@fullcalendar/core";
import Contact from "../Contact";
import CompPagination from "../Pagination";
import { conditionallyUpdateScrollbar } from "reactstrap/lib/utils";
import Pagination from "reactstrap/lib/Pagination";
import PaginationItem from "reactstrap/lib/PaginationItem";
import PaginationLink from "reactstrap/lib/PaginationLink";
import ModalEnployeeInfo from "../Modal/employeeInfo";

let prev = 0;
let next = 0;
let last = 0;
let first = 0;
const Listcontact = (props) => {
  const todos = [
    {
      id: 1,
      name: "Gregorio Lucena",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "glucena@mary-iancarina.com",
      ext: "129",
      encode: "7501",
      label: "Nuevo",
    },
    {
      id: 2,
      name: "Nestor Infante",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "ninfante@mary-iancarina.com",
      ext: "129",
      encode: "7502",
    },
    {
      id: 3,
      name: "Daniel Gudiño",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Inalsa",
      email: "dgudino@mary-iancarina.com",
      ext: "129",
      encode: "7503",
    },
    {
      id: 4,
      name: "Roberto Olmos",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Corisa",
      email: "rolmos@mary-iancarina.com",
      ext: "139",
      encode: "7504",
      label: "Nuevo",
    },
    {
      id: 5,
      name: "Gregorio Lucena2",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "glucena@mary-iancarina.com",
      ext: "129",
      encode: "7505",
      label: "Nuevo",
    },
    {
      id: 6,
      name: "Nestor Infante2",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "ninfante@mary-iancarina.com",
      ext: "129",
      encode: "7606",
    },
    {
      id: 7,
      name: "Daniel Gudiño2",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Inalsa",
      email: "dgudino@mary-iancarina.com",
      ext: "129",
      encode: "7507",
    },
    {
      id: 8,
      name: "Roberto Olmos2",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Corisa",
      email: "rolmos@mary-iancarina.com",
      ext: "139",
      encode: "7508",
    },
    {
      id: 9,
      name: "Gregorio Lucena3",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "glucena@mary-iancarina.com",
      ext: "129",
      encode: "7509",
    },
    {
      id: 10,
      name: "Nestor Infante3",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "ninfante@mary-iancarina.com",
      ext: "129",
      encode: "7540",
    },
    {
      id: 11,
      name: "Daniel Gudiño3",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Inalsa",
      email: "dgudino@mary-iancarina.com",
      ext: "129",
      encode: "7541",
    },
    {
      id: 12,
      name: "Roberto Olmos3",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Corisa",
      email: "rolmos@mary-iancarina.com",
      ext: "139",
      encode: "7542",
    },
    {
      id: 13,
      name: "Gregorio Lucena4",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "glucena@mary-iancarina.com",
      ext: "129",
      encode: "7543",
    },
    {
      id: 14,
      name: "Nestor Infante4",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "ninfante@mary-iancarina.com",
      ext: "129",
      encode: "7544",
    },
    {
      id: 15,
      name: "Daniel Gudiño4",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Inalsa",
      email: "dgudino@mary-iancarina.com",
      ext: "129",
      encode: "7545",
    },
    {
      id: 16,
      name: "Roberto Olmos4",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Corisa",
      email: "rolmos@mary-iancarina.com",
      ext: "139",
      encode: "7546",
    },
    {
      id: 17,
      name: "Gregorio Lucena5",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "glucena@mary-iancarina.com",
      ext: "129",
      encode: "7547",
    },
    {
      id: 18,
      name: "Nestor Infante5",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Iancarina",
      email: "ninfante@mary-iancarina.com",
      ext: "129",
      encode: "129",
    },
    {
      id: 19,
      name: "Daniel Gudiño5",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Inalsa",
      email: "dgudino@mary-iancarina.com",
      ext: "129",
      encode: "129",
    },
    {
      id: 20,
      name: "Roberto Olmos5",
      department: "Informatica",
      position: "Analista de Sistemas",
      company: "Corisa",
      email: "rolmos@mary-iancarina.com",
      ext: "139",
      encode: "7550",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(4);

  // Logic for displaying current todos
  let indexOfLastTodo = currentPage * todosPerPage;
  let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  let currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  prev = currentPage > 0 ? currentPage - 1 : 0;
  last = Math.ceil(todos.length / todosPerPage);
  next = last === currentPage ? currentPage : currentPage + 1;

  // Logic for displaying page numbers
  let pageNumbers = [];
  for (let i = 1; i <= last; i++) {
    pageNumbers.push(i);
  }

  const [stateContact, setStateContact] = useState(currentTodos);

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
    indexOfLastTodo = event.target.id * todosPerPage;
    indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    setStateContact(currentTodos);
  };

  const handleLastClick = (event) => {
    event.preventDefault();
    setCurrentPage(last);
    indexOfLastTodo = last * todosPerPage;
    indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    setStateContact(currentTodos);
  };

  const handleFirstClick = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    indexOfLastTodo = 1 * todosPerPage;
    indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    setStateContact(currentTodos);
  };

  // search

  const findMatches = (Search, ListContact) => {
    return ListContact.filter((place) => {
      const regex = new RegExp(Search, "gi");
      return (
        place.name.match(regex) ||
        place.department.match(regex) ||
        place.company.match(regex) ||
        place.email.match(regex) ||
        place.ext.match(regex) ||
        place.encode.match(regex)
      );
    });
  };

  const findMatcheslist = (e) => {
    let search = e.target.value;
    setStateContact(findMatches(search, todos).slice(0, 4));
  };

  // modal
  const [modal, setModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleContactClick = (contact) => {
    console.log("entroooo");
    setDataModal({
      name: contact.name,
      company: contact.company,
      position: contact.position,
      department: contact.department,
      email: contact.email,
      ext: contact.ext,
      label: contact.label,
    });

    toggle();
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <section id="agend" className="sectionlist">
      <Container fluid={true}>
        <SectionTitle
          title="Agenda Corporativa"
          description="Aquí encontrará la agenda telefonica y los cumpleañeros del mes"
        />
        <style>{`
        .agend{
          height: 300px;
          background-color: powderblue;

        }
      .tittle-list{
        font-size: 16px;
      }
      .content-list{
        font-size: 14px;
      }
      .badge-color{
        background-color:#A30000;
      }
       .sectionlist{
        background:#F4F6F6;
        padding: 20px 0 20px 0;
       }
       .list:hover{
         background:#F5B7B1;
         cursor:pointer;
       }
       .inputSearch{
        padding-bottom: 1%;
       }
       .fc-scroller {
        overflow-y: hidden !important;
     }
   
      `}</style>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form className="inputSearch">
              <FormGroup>
                <Input
                  type="text"
                  name="email"
                  id=""
                  placeholder="Buscar"
                  onChange={findMatcheslist}
                />
              </FormGroup>
            </Form>
            <ListGroup flush>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  {stateContact.map((contact) => (
                    <div onClick={() => handleContactClick(contact)}>
                      <Contact key={contact.id} contact={contact} />
                    </div>
                  ))}
                  <Pagination>
                    <PaginationItem>
                      {prev === 0 ? (
                        <PaginationLink first disabled></PaginationLink>
                      ) : (
                        <PaginationLink
                          first
                          onClick={handleFirstClick}
                          id={prev}
                          href={prev}
                        ></PaginationLink>
                      )}
                    </PaginationItem>
                    <PaginationItem>
                      {prev === 0 ? (
                        <PaginationLink previous disabled></PaginationLink>
                      ) : (
                        <PaginationLink
                          previous
                          onClick={handleClick}
                          id={prev}
                          href={prev}
                        ></PaginationLink>
                      )}
                    </PaginationItem>
                    {pageNumbers.map((number, i) => (
                      <Pagination key={i}>
                        <PaginationItem
                          active={
                            pageNumbers[currentPage - 1] === number
                              ? true
                              : false
                          }
                        >
                          <PaginationLink
                            onClick={handleClick}
                            href={number}
                            key={number}
                            id={number}
                          >
                            {number}
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    ))}

                    <PaginationItem>
                      {currentPage === last ? (
                        <PaginationLink next disabled></PaginationLink>
                      ) : (
                        <PaginationLink
                          next
                          onClick={handleClick}
                          id={pageNumbers[currentPage]}
                          href={pageNumbers[currentPage]}
                        ></PaginationLink>
                      )}
                    </PaginationItem>

                    <PaginationItem>
                      {currentPage === last ? (
                        <PaginationLink last disabled></PaginationLink>
                      ) : (
                        <PaginationLink
                          last
                          onClick={handleLastClick}
                          id={pageNumbers[currentPage]}
                          href={pageNumbers[currentPage]}
                        ></PaginationLink>
                      )}
                    </PaginationItem>
                  </Pagination>
                </Col>
              </Row>
            </ListGroup>
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <FullCalendar />
          </Col>
        </Row>

        <ModalEnployeeInfo
          modal={modal}
          toggle={toggle}
          dataModal={dataModal}
        />
      </Container>
    </section>
  );
};

export default Listcontact;
