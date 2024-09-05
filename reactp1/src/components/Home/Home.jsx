import React from "react";
import Navbar from "../navbar/Navbar";
import hero1 from "../../assets/imgs/slide1.png";
import hero2 from "../../assets/imgs/slide2.jpg";
import hero3 from "../../assets/imgs/slide3.jpg";
import Footer from "../footer/Footer";
import Offers from "./Offers";
import Partners from "../partners/Partners";
import HomeBlogs from "../blog/HomeBlogs";

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner h-75">
            <div
              className="carousel-item active"
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <img
                src={hero1}
                class="d-block w-100 object-fit-cover"
                style={{ height: "80vh" }}
                alt="heroImg"
              />
            </div>
            <div className="carousel-item">
              <img
                src={hero2}
                class="d-block w-100 object-fit-cover"
                style={{ height: "80vh" }}
                alt="heroImg"
              />
            </div>
            <div className="carousel-item">
              <img
                src={hero3}
                class="d-block w-100 object-fit-cover"
                style={{ height: "80vh" }}
                alt="heroImg"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <HomeBlogs />
      <Offers />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
