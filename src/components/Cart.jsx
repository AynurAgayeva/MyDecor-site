import React from "react";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const notify = () =>
    toast.success("Product successfully removed", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
          });
  const { items, updateItemQuantity, removeItem, isEmpty, emptyCart } =
    useCart();

  return isEmpty ? (
    <div className="text-center">
      <h1 className="text-center mt-5">Cart</h1>

      <img
        height={300}
        src={"https://thumbs.gfycat.com/SpottedBriskDuckbillplatypus-max-1mb.gif"}
        alt=""
      />
      <p style={{ color: "black" }}>YOUR CART IS CURRENTLY EMPTY.</p>
      <Link to="/product">
        <Button variant="outline-secondary">
          <b>RETURN TO SHOP</b>
        </Button>
      </Link>
    </div>
  ) : (
    <div className="container">
      <h1 className="text-center my-5">Cart</h1>
      <Table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>

            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, c) => {
            console.log(item);
            console.log(item.quantity);
            return (
              <tr key={item.id}>
                <td>
                  <img src={item.photo} width={100} alt="" className="me-3" />
                  {item.title}
                </td>
                <td>${+item.price}</td>
                <td>
                  <Button
                    variant="outline-dark"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline-dark"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </td>
                <td>${+item.price * +item.quantity}</td>

                <td>
                  <Button
                    variant=""
                    onClick={() => {
                      notify(removeItem(item.id));
                    }}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </Button>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
                </td>
              </tr>
            );
          })}

          <Button
            className="mt-5"
            variant="secondary"
            onClick={() => {
              emptyCart();
            }}
          >
            <i class="fa-solid fa-trash-can"></i> Empty Cart
          </Button>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
