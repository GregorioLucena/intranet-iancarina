import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" height="100%" url={url} playing={true} />
);

const NoticeCarrousel = () => {
  return (
    <section className="section  " id="home">
      <div>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          interval={5000}
          transitionTime={700}
          showArrows={true}
          autoPlay
          dynamicHeight={true}
        >
          <div>
            <img
              src="https://www.alimentosmary.com/wp-content/uploads/2020/07/CoverWebMary-Familia.jpg"
              // style={{ height: "780px" }}
            />
          </div>
          <div>
            <img
              src="http://www.iancarina.com.ve/Intranet/mary/images/slider/BANNER%20INTRANET_CHARMY%20MOKA_Mesa%20de%20trabajo%201%20copy%202.png"
              // style={{ height: "780px" }}
            />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img
              src="http://www.iancarina.com.ve/Intranet/mary/images/slider/BANNER%20INTRANET_CHARMY%20MOKA_Mesa%20de%20trabajo%201.png"
              // style={{ height: "780px" }}
            />
            {/* <p className="legend">Legend 3</p> */}
          </div>

          {/* <YoutubeSlide
            url=""
            muted
            playing={true}
            //   key={v._id ? v._id : v.id}
          /> */}
        </Carousel>
        {/* <FormLogin /> */}
      </div>
    </section>
  );
};

export default NoticeCarrousel;
