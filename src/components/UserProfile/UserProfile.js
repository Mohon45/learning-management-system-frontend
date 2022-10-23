import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../HOC/Layout";
import avater from "../../Assets/img/avatar.svg";
import { toast } from "react-toastify";
import LoadingOverlay from "../../Shared/LoadingOverlay/LoadingOverlay";

const UserProfile = () => {
  const [userdata, setUserdata] = useState({});
  const [loading, setLoading] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { token } = userInfo;
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  let url = "";
  if (userdata.image) {
    url = userdata.image;
  } else {
    url = avater;
  }

  useEffect(() => {
    axios
      .get(`https://e-tutors.onrender.com/api/v1/etutors/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUserdata(res.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id, token]);

  const onSubmitHandler = (data) => {
    setLoading(true);
    if (data.image) {
      data.image = data.image[0];
    }

    axios
      .patch(
        `https://e-tutors.onrender.com/api/v1/etutors/user/update/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          navigate("/home");
          toast.success("Profile Successfully Updated!");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        toast.error(error);
      });
  };

  return (
    <LoadingOverlay active={loading}>
      <Layout>
        <div className="container card card-custom my-4">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <h2 className="fw-bold">Profile</h2>
              <div className="user-profile-pic text-center">
                <img src={url} alt="" /> <br />
                <input
                  className="profile-image-upload-input"
                  type="file"
                  {...register("image")}
                  id=""
                />
              </div>
              <div className="row mt-4">
                {/* left side */}

                <div className="col-md-6">
                  <div className="col-md-8 mx-auto">
                    <div className="mb-3">
                      <label htmlFor="exampleInputName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        defaultValue={userdata.name}
                        {...register("name")}
                        className="form-control"
                        id="exampleInputName"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        readOnly
                        defaultValue={userdata.email}
                        className="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputNumber"
                        className="form-label"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={userdata.phoneNumber}
                        {...register("phoneNumber", { required: true })}
                        placeholder="01"
                        id="exampleInputNumber"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputAddress"
                        className="form-label"
                      >
                        Address
                      </label>
                      <textarea
                        className="form-control"
                        defaultValue={userdata.address}
                        {...register("address", { required: true })}
                        id="exampleInputAddress"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* right side */}

                <div className="col-md-6">
                  <div className="col-md-8 mx-auto">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputAddress"
                        className="form-label"
                      >
                        Designation
                      </label>
                      <input
                        type="text"
                        readOnly
                        defaultValue={userdata.designation}
                        className="form-control"
                        id="exampleInputAddress"
                      />
                    </div>

                    {userdata?.designation === "teacher" ? (
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputTeachSubject"
                          className="form-label"
                        >
                          Your teaching Subjects
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userdata.teachingSubjects}
                          {...register("teachingSubjects", { required: true })}
                          placeholder="any one subject write small latter"
                          id="exampleInputTeachSubject"
                        />
                      </div>
                    ) : null}

                    {userdata?.designation === "student" ? (
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputstdClass"
                          className="form-label"
                        >
                          Class
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userdata.class}
                          {...register("class", { required: true })}
                          id="exampleInputstdClass"
                        />
                      </div>
                    ) : null}
                    {userdata?.designation === "teacher" ? (
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputTeachClass"
                          className="form-label"
                        >
                          Your teaching Classes
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue={userdata.teachingClass}
                          {...register("teachingClass", { required: true })}
                          placeholder="any one class"
                          id="exampleInputTeachClass"
                        />
                      </div>
                    ) : null}
                    {userdata?.designation === "teacher" ? (
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputCurrentEmploynebt"
                          className="form-label"
                        >
                          Your current employment
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userdata.currentEmployee}
                          {...register("currentEmployee")}
                          id="exampleInputCurrentEmploynebt"
                        />
                      </div>
                    ) : null}
                    {userdata?.designation === "student" ? (
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputstdSchool"
                          className="form-label"
                        >
                          Your School
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userdata.school}
                          {...register("school")}
                          id="exampleInputstdSchool"
                        />
                      </div>
                    ) : null}
                    {userdata?.designation === "teacher" ? (
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputstdSchool"
                          className="form-label"
                        >
                          Educational Qualification
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userdata.educationalQualifications}
                          {...register("educationalQualifications", {
                            required: true,
                          })}
                          id="exampleInputstdSchool"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="text-end me-5 my-4">
                <button className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </LoadingOverlay>
  );
};

export default UserProfile;
