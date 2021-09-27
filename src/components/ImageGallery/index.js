import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Col,
  Row,
  Container,
  Card,
  CardImgOverlay,
  CardImg,
  Button,
} from "reactstrap";

import ImageCarousel from "../ImageNoticeCarousel";

const ImageGallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [images, setImages] = useState(props.images);
  const limit = props.limit;
  const [imagesToShow, setImagesToShow] = useState(
    props.hasOwnProperty("limit") ? limit : 6
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // for toggling the modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // used to set the current index of the carousel
  const showModalImage = (imageId) => {
    toggleModal();
    setCurrentIndex(imageId);
  };

  const tempImagesArray = props.images.slice(0, imagesToShow); //temporary array
  const hasMore =
    props.images.length !== 0 ? props.images.length - imagesToShow : 0;

  return (
    <Container>
      <Row>
        <Col md={{ size: 10, offset: 1 }} className="thumbnail-gallery">
          <Row>
            {tempImagesArray.map((image, index) => (
              <Col
                md="3"
                className="my-5"
                key={index}
                onClick={() => showModalImage(index)}
              >
                <Card className="image-card">
                  <CardImg src={image.url} />
                  {hasMore !== 0 && index === imagesToShow - 1 ? (
                    <CardImgOverlay className="overlay">
                      <h2 className="mb-0">{hasMore}</h2>
                      <small> More </small>
                    </CardImgOverlay>
                  ) : null}
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Modal className="modal-lg" isOpen={isModalOpen} toggle={toggleModal}>
        {/* <ModalHeader>Image Gallery</ModalHeader> */}
        <ModalBody>
          <Row>
            <Col md="12">
              <ImageCarousel
                images={props.images}
                currentIndex={currentIndex}
              />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default ImageGallery;
