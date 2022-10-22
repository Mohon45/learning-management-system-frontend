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
  }, [id, token]);
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
            <h4 className="fw-bold">Send a message to the teacher</h4>
            <form>
              <div className="conversation-text my-3 p-5">
                <p>this features upcomming</p>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="message text here"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fa-solid fa-circle-right message-send-icon fa-2x"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersDetails;
