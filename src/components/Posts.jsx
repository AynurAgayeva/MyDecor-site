import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Posts = () => {

     useEffect(() => {
       AOS.init({
         duration: 1000,
       });
     }, []);
  return (
    <div>
      <div className="container blogpost">
        <div className="contact-text d-flex align-items-center justify-content-center mt-5 mb-3 ">
          <h2 className="text-center animate__animated animate__fadeInRightBig">
            Most Popular Blog Posts
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark border-0 "
              data-aos={"fade-down"}
              style={{
                backgroundImage:
                  'url("https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/05/1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
                  Find your Perfect Outdoor Chair for Spring
                </h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark border-0 "
              data-aos={"fade-up"}
              style={{
                backgroundImage:
                  'url("https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/05/3.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4  lh-1 fw-bold">
                  Find your Perfect Outdoor Chair for Spring
                </h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark border-0 "
              data-aos={"fade-down"}
              style={{
                backgroundImage:
                  'url("https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/03/6.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4  lh-1 fw-bold">
                  Find your Perfect Outdoor Chair for Spring
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts