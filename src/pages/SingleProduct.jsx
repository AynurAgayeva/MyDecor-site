import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import {Link } from "react-router-dom";
  import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";



const SingleProduct = ({ photo, title, discount, price, id, alldata}) => {
  const { addItem } = useCart();
   const { addWishlistItem } = useWishlist();

  const [data, setData] = useContext(ProductContext);
 useEffect(() => {
  
   AOS.init({
     duration: 1000,
   });
 }, []);



  return (
    <>
      <div className="daily mb-5 col-12 col-sm-12 col-md-6 col-lg-3">
        <div
          className="  card card-single"
          data-aos={"flip-left"}
          style={{ border: "none" }}
        >
          <Link to={`/product/${id}`}>
            <img src={photo} className="card-img-top" alt="..." />
          </Link>
        </div>
        <button
          className="mt-3"
          style={{
            border: "none",
            backgroundColor: "#e5e5e5",
            padding: "3px 8px",
          }}
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal${id}`}
        >
          Quick View
        </button>
        <div
          className="modal fade"
          id={`exampleModal${id}`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img
                  src={photo}
                  alt=""
                  width={"100%"}
                  style={{ cursor: "zoom-in" }}
                />
              </div>
              <div className="container d-flex justify-content-between align-items-center">
                <div className="products">
                  <h5 className="mt-2 mb-3">Product Details</h5>
                  <ul>
                    <li
                      style={{
                        fontWeight: "500",
                        color: "#707070",
                        fontSize: "15px",
                        marginBottom: "7px",
                      }}
                    >
                      Seating Capacity: 2
                    </li>
                    <li
                      style={{
                        fontWeight: "500",
                        color: "#707070",
                        fontSize: "15px",
                        marginBottom: "7px",
                      }}
                    >
                      Weight Capacity: 550 lb.
                    </li>
                    <li
                      style={{
                        fontWeight: "500",
                        color: "#707070",
                        fontSize: "15px",
                        marginBottom: "7px",
                      }}
                    >
                      Adult Assembly Required: Yes
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <button
                    className="text-decoration-line-through "
                    style={{
                      border: "none",
                      background: "none",
                      fontSize: "20px",
                    }}
                  >
                    ${price}
                  </button>
                  <button
                    className=""
                    style={{
                      color: "#A20401",
                      border: "none",
                      background: "none",
                      fontSize: "20px",
                    }}
                  >
                    ${discount}
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    addItem(alldata);
                  }}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-bg-two">
          <button>Quick view</button>
        </div>
        <div className="card-bag"></div>
        <h6 className="">{title}</h6>
        <button className="price me-3  text-decoration-line-through">
          ${price}
        </button>
        <button className="discount ">${discount}</button>
        <hr />

        <div className="end d-flex justify-content-between">
          <button
            className="btn btn-outline"
            onClick={() => {
              addItem(alldata);
            }}
          >
            +Add to cart
          </button>
          <span>
            <button
            className="b-0"
              onClick={() => {
                addWishlistItem(alldata);
              }} style={{background:"none",border:"none"}}
            >
              
              <i class="fa-regular fa-heart me-3"></i>
            </button>
            <i class="fa-solid fa-code-compare"></i>
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SingleProduct;
