import React from "react";

const TeachersDetails = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bold mt-3">Teacher Details</h1>
      <div className="row my-5">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-5 details-img">
              <img
                src="https://bdtutors.com/pofiles/71611832_4420_unnamed.jpg.jpg"
                alt=""
              />
            </div>
            <div className="col-md-7 details-description">
              <h5>
                <span className="details-desc-tile">Name:</span> &nbsp; Md.
                Habla Khan
              </h5>
              <h5>
                <span className="details-desc-tile">Title:</span> &nbsp; Md.
                Habla Khan
              </h5>
              <h5>
                <span className="details-desc-tile">Qualification:</span> &nbsp;
                Studying BSS in Television,Film and Photography at University of
                Dhaka.
              </h5>
              <h5>
                <span className="details-desc-tile">Teaching Subjects:</span>{" "}
                &nbsp; Math, Physics, Biggan
              </h5>
              <h5>
                <span className="details-desc-tile">Teaching Clases:</span>{" "}
                &nbsp; Six, Seven, Eight, Nine, Ten
              </h5>
              <h5>
                <span className="details-desc-tile">Phone Number:</span> &nbsp;
                01782638193
              </h5>
              <h5>
                <span className="details-desc-tile">Email:</span> &nbsp;
                hablukhan@gmail.com
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 details-right-side">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputname" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputname" className="form-label">
                Your Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Details Information:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeachersDetails;
