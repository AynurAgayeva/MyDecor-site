import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import productdata from "../productdata";
import { useCart } from "react-use-cart";


import { GlassMagnifier } from "react-image-magnifiers";

const ProductDetails = ({}) => {
    const { addItem } = useCart();

  // const [state, setState] = useState(1);
  // const [message, setMessage] = useState({ alertColor: "", alertText: "" });
  const [data, setData] = useContext(ProductContext);
  const { url } = useParams();
  const productdetails = productdata.find((p) => p.id == url);
  return (
    <div className="container col-xxl-8 px-4 py-5 mt-5">
      <p className="text-left">
        <a href="/" style={{ textDecoration: "none", color: "#A20401" }}>
          Home
        </a>
        {">"}
        <a href="/product" style={{ textDecoration: "none", color: "#A20401" }}>
          Product
        </a>
      </p>
      <div className="row flex-lg-row-reverse align-items-center g-5 ">
        {/* <p
          style={{ fontWeight: "600" }}
          className={`text-center alert ${message.alertColor}`}
        >
          {message.alertText}
        </p> */}
        <div className="col-10 col-sm-8 col-lg-6">
          <h2 className="fw-bold lh-1 mb-4">{productdetails.title}</h2>
          <div className="top d-flex justify-content-between">
            <div className="stars d-lg-flex d-none">
              <p>
                <span>
                  <i
                    className={
                      productdetails.rate >= 2
                        ? "fa-solid fa-star"
                        : productdetails.rate >= 1.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      productdetails.rate >= 3
                        ? "fa-solid fa-star"
                        : productdetails.rate >= 2.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      productdetails.rate >= 4
                        ? "fa-solid fa-star"
                        : productdetails.rate >= 3.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      productdetails.rate >= 5
                        ? "fa-solid fa-star"
                        : productdetails.rate >= 4.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      productdetails.rate >= 6
                        ? "fa-solid fa-star"
                        : productdetails.rate >= 5.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
              </p>
              <a
                href="/review"
                className=""
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: 500,
                }}
              >
                ({productdetails.review})
              </a>
            </div>
            <p
              className="mb-3"
              style={{ fontSize: "14px", fontWeight: 500 }}
            > {productdetails.status ? (
                <div style={{ color: "green" }}>
                  <i class="fa-solid fa-check"></i> In stock
                </div>
              ) : (
                <div style={{ color: "red" }}>
                  <i class="fa-solid fa-xmark"></i> Out of stock
                </div>
              )
            }</p>
            <div className="iconPro">
              <a
                className="link"
                target={"_blank"}
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fdemo.theme-sky.com%252Fmydecor%252Fshop%252Fzinus-mikihaile-loveseat-sofa-couch-from-korean%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU"
              >
                <i
                  class="fa-brands fa-facebook"
                  style={{
                    color: "blue",
                    marginRight: "5px",
                    fontSize: "18px",
                  }}
                ></i>
              </a>
              <a
                className="link"
                target={"_blank"}
                href="https://twitter.com/intent/tweet?text=https://demo.theme-sky.com/mydecor/shop/zinus-mikihaile-loveseat-sofa-couch-from-korean/"
              >
                <i
                  class="fa-brands fa-twitter"
                  style={{
                    marginRight: "5px",
                    fontSize: "18px",
                  }}
                ></i>
              </a>
              <a
                className="link"
                target={"_blank"}
                href="https://www.pinterest.com/pin/create/button/?url=https://demo.theme-sky.com/mydecor/shop/zinus-mikihaile-loveseat-sofa-couch-from-korean/&media=https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/13.jpg"
              >
                <i
                  class="fa-brands fa-pinterest"
                  style={{
                    color: "#A20401",
                    marginRight: "5px",
                    fontSize: "18px",
                  }}
                ></i>
              </a>
              <a
                className="link"
                target={"_blank"}
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fdemo.theme-sky.com%2Fmydecor%2Fshop%2Fzinus-mikihaile-loveseat-sofa-couch-from-korean%2F%26title%3Dsofa-couch-from-korean"
              >
                <i
                  class="fa-brands fa-linkedin"
                  style={{
                    color: "blue",
                    marginRight: "5px",
                    fontSize: "18px",
                  }}
                ></i>
              </a>
            </div>
          </div>
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

          <button
            className="text-decoration-line-through "
            style={{
              border: "none",
              background: "none",
              fontSize: "30px",
            }}
          >
            ${productdetails.price}
          </button>
          <button
            className=""
            style={{
              color: "#A20401",
              border: "none",
              background: "none",
              fontSize: "30px",
            }}
          >
            ${productdetails.discount}
          </button>

          <div className="wish mt-3 ">
            <span style={{ fontSize: "13px" }}>
              <i class="fa-regular fa-heart me-2"></i>Wishlist{" "}
              <span className="mx-3"></span>
              <i class="fa-solid fa-code-compare me-2"></i>Compare
            </span>
            <button
              className="btn btn-dark ms-5"
              onClick={() => {
                addItem(productdetails);
              }}
            >
              +Add to cart
            </button>
          </div>
          <hr className="dashed" />

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            {/* <Link
              to="/shop"
              className="btn btn-primary btn-lg px-4 mt-5 me-md-2"
            >
              Back
            </Link> */}

            <div className="meta">
              <div className="sku">
                <span style={{ fontWeight: "500" }}>SKU:</span>
                {productdetails.sku}
              </div>
              <div className="cate">
                <span style={{ fontWeight: "500" }}>Categories:</span>
                {productdetails.category}
              </div>
              <div>
                <span style={{ fontWeight: "500" }}>Brands</span>: Brand 03,
                Brand 04, Brand 06
              </div>
            </div>
            <span></span>
          </div>

          <p>{}</p>
        </div>
        <div className=" col-lg-6">
          <GlassMagnifier imageSrc={productdetails.photo} imageAlt="Example" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
