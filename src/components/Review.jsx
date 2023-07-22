import React from 'react'

const Review = () => {
  return (
    <div className="mt-5">
      <main className="container  mt-5">
        <h2
          style={{
            color: "#FFb600",
          }}
          className="text-center  product pt-5 mt-5 animate__animated animate__fadeInLeft"
        >
          Review(2)
        </h2>

        <div className="row mb-2  mt-5">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  <img
                    src="https://secure.gravatar.com/avatar/8f17385b32442dbd2d9cbd101b38f42f?s=60&d=mm&r=g"
                    alt=""
                  />
                </strong>
                <h4 className="mb-0">Marry</h4>
                <div className="mb-1 text-muted">– December 14, 2023</div>
                <p className="card-text mb-auto">
                  There was a small mistake in the order. In return I got the
                  correct order and I could keep the wrong one for myself.
                </p>
                <a href="#" className="stretched-link"></a>
              </div>
              {/* <div className="col-auto d-none d-lg-block">
          <img src="" alt="" />
        </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  <img
                    src="https://secure.gravatar.com/avatar/f458ff8b61e871611d3de680ec718a03?s=60&d=mm&r=g"
                    alt=""
                  />
                </strong>

                <h4 className="mb-0">John Park</h4>
                <div className="mb-1 text-muted">– January 21, 2023</div>
                <p className="card-text mb-auto">
                  Everything is perfect. I would recommend!I ordered on Friday
                  evening and on Monday at 12:30 the was with me. I have never
                  encountered
                </p>
              </div>
              {/* <div className="col-auto d-none d-lg-block">
          <img src="" alt="" />
        </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Review