import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Shop = () => {
     useEffect(() => {
       AOS.init({
         duration: 1000,
       });
     }, []);

  return (
    <div>
      <div class="  shop  row align-items-md-stretch ">
        <div className="contact-text d-flex align-items-center justify-content-center mt-2 mb-3 ">
          <h2 className="text-center animate__animated animate__fadeInRightBig">
            Shop
          </h2>
        </div>
        <p className="text-center">
          <a href="/" style={{ textDecoration: "none", color: "gray" }}>
            Home
          </a>
          {">"} Shop
        </p>
        <div class="col-md-6">
          <div class="h-100 p-5  rounded-3" data-aos={"zoom-out-down"}>
            <img
              src={"https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/mg-shop-1.jpg"}
              width={"100%"}
              alt=""
            ></img>
            <p className="mt-3">
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class=" p-5  rounded-3"data-aos={"zoom-out-right"}>
            <img
              src={"https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/mg-shop-2.jpg"}
              width={"100%"}
              alt=""
            ></img>
            <p className="mt-3">
              Or, keep it light and add a border for some added definition to
              the boundaries of your content. Be sure to look under the hood at
              the source HTML here as we've adjusted the alignment and sizing of
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop