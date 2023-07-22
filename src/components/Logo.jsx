import React from 'react'

const Logo = () => {
  return (
    <>
      <div className="logo container mt-5">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-3  ">
            <div className="card" style={{ border: "none" }}>
              <img
                className="center "
                src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/feature-1.png"
                alt=""
                width={"60px"}
                height={"55px"}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Amazing Value Every Day
                </h5>
                <p
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "15px" }}
                >
                  Items prices that fit your budget.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={{ border: "none" }}>
              <img
                style={{ margin: "0 auto" }}
                src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/feature-2.png"
                alt=""
                width={"60px"}
                height={"55px"}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Free Shipping Over $35*
                </h5>
                <p
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "15px" }}
                >
                  Popular delivery on 1 - 2 days
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={{ border: "none" }}>
              <img
                style={{ margin: "0 auto" }}
                src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/feature-3.png"
                alt=""
                width={"60px"}
                height={"55px"}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Expert Customer Service
                </h5>
                <p
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "15px" }}
                >
                  Our team on seven days a week.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div
              className="card"
              style={{ border: "none", position: "relative" }}
            >
              <img
                style={{ margin: "0 auto" }}
                src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/feature-4.png"
                alt=""
                width={"60px"}
                height={"55px"}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Unbeatable Selection
                </h5>
                <p
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "15px" }}
                >
                  All things home, all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logo