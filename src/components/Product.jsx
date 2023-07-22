import React, { useState, useRef, useContext } from 'react';

import productdata from '../productdata'
import SingleProduct from '../pages/SingleProduct';
import { ProductContext } from '../context/ProductContext';



const Product = () => {


  const [products, setProducts] =useContext(ProductContext)  
  const [data, setData] = useState(products);
  const [value, setValue] = useState("");
  const inputRef = useRef();



  //  useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
   //  }, [data]);
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("data"));
  //   if (data) {
  //     setData(data);
  //   }
  // }, []);

  const filterResult = (catItem) => {
    const result = productdata.filter((fdata) => {
      return fdata.category === catItem;
    });
    setData(result);
  };

  return (
    
    <div>
      
      <h2 className="text-center product pt-5  mb-4 animate__animated animate__fadeInLeft">
        Daily Flash Sale!
      </h2>
      <p className="text-center">
        <a href="/" style={{ textDecoration: "none", color: "gray" }}>
          Home
        </a>
        {">"} Product
      </p>
      <div className="container ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setValue(inputRef.current.value);
          }}
        >
          <div className="input-group  my-5 ">
            <input
              type="text"
              className="form-control"
              ref={inputRef}
              placeholder="Search product"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </form>

        <div className="buttons" style={{ textAlign: "center" }}>
          <button
            className="mx-3 mb-5"
            style={{
              border: "1px solid gray",
              background: "#A20401",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "14px",
              padding: "5px 10px",
            }}
            onClick={() => {
              filterResult("Table");
            }}
          >
            Table
          </button>
          <button
            style={{
              border: "1px solid gray",
              background: "#eee",
              borderRadius: "5px",
              fontSize: "14px",
              padding: "5px 10px",
            }}
            onClick={() => {
              filterResult("Sofa");
            }}
          >
            Sofa
          </button>
          <button
            className="mx-3"
            style={{
              border: "1px solid gray",
              background: "#A20401",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "14px",
              padding: "5px 10px",
            }}
            onClick={() => {
              filterResult("Organization");
            }}
          >
            Organization
          </button>
        </div>

        <div className="row">
          {data.length == 0 ? (
            <h1 className="text-center">Loading...</h1>
          ) : (
            data
              .filter((p) => p.title.toLocaleLowerCase().includes(value))
              .map((item) => (
                <SingleProduct
                  key={item.id}
                  photo={item.photo}
                  category={item.category}
                  title={item.title}
                  discount={item.discount}
                  price={item.price}
                  cart={item.cart}
                  rate={item.rate}
                  id={item.id}
                  alldata={item}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}


export default Product