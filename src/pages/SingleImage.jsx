
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const SingleImage = ({photo, description}) => {

   useEffect(() => {
     AOS.init({
       duration: 1000,
     });
   }, []);

  return (
    <>
      <div
        className="all col-12 col-sm-12 col-md-6 col-lg-3 mt-5"
        data-aos={"fade-down"}
      >
        <div className="card-img">
          <img src={photo} className="card-img-top" alt="..." />
        </div>
        <div className="card-bg"></div>
        <button>{description} </button>
      </div>
    </>
  );
}

export default SingleImage