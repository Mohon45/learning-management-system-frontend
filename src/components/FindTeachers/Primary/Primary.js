import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingOverlay from "../../../Shared/LoadingOverlay/LoadingOverlay";

const Primary = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { token } = userInfo;

  const onSearchHandler = (data) => {
    setLoading(true);
    const { teachingClass, teachingSubjects } = data;
    const subject = teachingSubjects.toLowerCase();

    axios
      .get(
        `https://e-tutors.onrender.com/api/v1/etutors/teachers?teachingSubjects=${subject}&teachingclassName=${teachingClass}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.data.length === 0) {
          toast.error("Teachers Not Found in this Search Result!");
        }
        setLoading(false);
        setRows(res.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error("Something Went Wrong! try again letter!");
      });
  };

  return (
    <LoadingOverlay active={loading}>
      <div className="my-3">
        {rows?.length === 0 ? (
          <div>
            <h1 className="text-center fw-bold my-3">
              Find a Teacher for Specific Subject
            </h1>
            <div
              className="card find-techers-card"
              style={{ width: "80%", height: "45vh", margin: "auto" }}
            >
              <div className="card-body">
                <form onSubmit={handleSubmit(onSearchHandler)}>
                  <div className="teachers-search-box d-flex justify-content-around mt-5">
                    <div className="mb-3 class-name-input">
                      <label
                        htmlFor="exampleInputDesignation"
                        className="form-label"
                      >
                        Class
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="exampleInputDesignation"
                        {...register("teachingClass", { required: true })}
                      >
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                      </select>
                    </div>

                    <div className="mb-3 class-name-input">
                      <label htmlFor="exampleInputName" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        {...register("teachingSubjects", { required: true })}
                        className="form-control"
                        placeholder="any one subject"
                        id="exampleInputName"
                      />
                    </div>
                  </div>
                  <div className="text-end me-5 pe-5 mt-3">
                    <button className="btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-5 text-center">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {rows.map((item, index) => (
                <div className="col" key={index}>
                  <Link to={`/find-teachers/level/teacher-details/${item._id}`}>
                    <div className="card find-techers-show-card h-100">
                      <img
                        src={item.image}
                        className="card-img-top mt-2"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{item.name}</h5>
                        <p>Online Teacher in {item.teachingSubjects} Subject</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </LoadingOverlay>
  );
};

export default Primary;
