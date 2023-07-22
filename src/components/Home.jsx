import { NavLink, Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";

const Home = () => {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  return (
    <div className="home mb-5">
      <nav className="navbar pb-3 pt-4 mb-5 navbar-expand-lg  bg-body-tertiary">
        <div className="container-fluid  mx-lg-5 px-lg-5">
          <a className="navbar-brand" href="/">
            <img
              src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/themes/mydecor/images/logo.png"
              width={"150px"}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse mx-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/">
                  Homepages
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link  dropdown-toggle " to="/shop">
                  Shop
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/product">
                  Product
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu border-0 mt-3">
                  <li>
                    <a className="dropdown-item" href="/">
                      Blog Fullwidth
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Blog Sidebar
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Blog Masonry
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Blog Detail
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu border-0 mt-3">
                  <div className="menu-all d-flex p-3">
                    <div className="left">
                      <li>
                        <a className="dropdown-item" href="/">
                          Typography
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          About Us
                        </a>
                      </li>
                      <li></li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Coming Soon
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="/">
                          FAQ
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="/">
                          Shipping & Returns
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="/">
                          404 Page
                        </a>
                      </li>
                    </div>
                    <div className="right">
                      <li>
                        <a className="dropdown-item" href="/">
                          Blog Standard
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Blog Fullwidth
                        </a>
                      </li>
                      <li></li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Blog Masonry
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Blog Detail
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Portfolio Detail
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link dropdown-toggle "
                  to="/contact"
                  role="button"
                  aria-expanded="false"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-lg-5 ps-lg-5 mb-2 mb-lg-0">
              <a href="/product" className="link mb-lg-0 mb-2">
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </a>

              <button
                className="link nav-item dropdown d-lg-block d-none "
                style={{ background: "#fff" }}
                href="/"
              >
                <a
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-regular fa-user" style={{ color: "black" }}></i>
                </a>
                <ul className="dropdown-menu cover-bg border-0 mt-4 p-4 px-5 py-4 w-auto">
                  <div className="cover text-left">
                    <h5 className="mb-3">LOGIN</h5>
                    <form className="">
                      <label>Username or Email Address</label>
                      <input type="text" />
                      <label>Password</label>
                      <input type="password" />
                      <div className="end">
                        <Link className="input-link" to="/loginform">
                          <button className="btn btn-dark mt-4">LOG IN</button>
                        </Link>

                        <div className="check ms-5">
                          <input type="checkbox" />
                          <label className="ms-1">Remember me</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </ul>
              </button>
              <button
                className="link nav-item dropdown dropdown-center d-lg-block d-none "
                style={{ background: "#fff" }}
                href="/"
              >
                <a href="/loginform" role="button">
                  <i
                    class="fa-solid fa-bag-shopping"
                    style={{ color: "black" }}
                  ></i>
                  <span class="count-number">{totalItems}</span>
                </a>
              </button>
              <a className="link  d-lg-block d-none " href="/wishlist">
                <i class="fa-regular fa-heart"></i>
                <span class="count-number">{totalWishlistItems}</span>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
