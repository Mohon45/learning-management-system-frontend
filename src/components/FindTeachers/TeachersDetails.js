import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TeachersDetails = () => {
  const [items, setItems] = useState({});
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { token } = userInfo;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/etutors/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="text-center fw-bold mt-3">Teacher Details</h1>
      <div className="row my-5">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-5 details-img">
              <img src={items.image} alt="" />
            </div>
            <div className="col-md-7 details-description">
              <h5>
                <span className="details-desc-tile">Name:</span> &nbsp;{" "}
                {items.name}
              </h5>
              <h5>
                <span className="details-desc-tile">Qualification:</span> &nbsp;
                {items.educationalQualifications}
              </h5>
              <h5>
                <span className="details-desc-tile">Teaching Subject:</span>{" "}
                &nbsp; {items.teachingSubjects}
              </h5>
              <h5>
                <span className="details-desc-tile">Teaching Class:</span>{" "}
                &nbsp; {items.teachingClass}
              </h5>
              <h5>
                <span className="details-desc-tile">Phone Number:</span> &nbsp;
                {items.phoneNumber}
              </h5>
              <h5>
                <span className="details-desc-tile">Email:</span> &nbsp;
                {items.email}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 details-right-side">
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersDetails;
