import React from "react";
import Layout from "../../HOC/Layout";

const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { user, token } = userInfo;

  return (
    <Layout>
      <div className="container card card-custom my-4">
        <div className="card-body">
          <form>
            <h2 className="fw-bold">Profile</h2>
            <div className="user-profile-pic text-center">
              <img src="https://i.ibb.co/zh64p5L/user-Avater.png" alt="" />{" "}
              <br />
              <input
                className="profile-image-upload-input"
                type="file"
                name="avater"
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
                      type="email"
                      value={user.name}
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
                      value={user.email}
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="01"
                      id="exampleInputNumber"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputAddress"
                    />
                  </div>
                </div>
              </div>

              {/* right side */}

              <div className="col-md-6">
                <div className="col-md-8 mx-auto">
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">
                      Designation
                    </label>
                    <input
                      type="text"
                      value={user.designation}
                      className="form-control"
                      id="exampleInputAddress"
                    />
                  </div>

                  {user?.designation === "teacher" ? (
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
                        placeholder="English, Physics, Math"
                        id="exampleInputTeachSubject"
                      />
                    </div>
                  ) : null}

                  {user?.designation === "student" ? (
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
                        id="exampleInputstdClass"
                      />
                    </div>
                  ) : null}
                  {user?.designation === "teacher" ? (
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputTeachClass"
                        className="form-label"
                      >
                        Your teaching Classes
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        placeholder="6, 7, 8"
                        id="exampleInputTeachClass"
                      />
                    </div>
                  ) : null}
                  {user?.designation === "teacher" ? (
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
                        id="exampleInputCurrentEmploynebt"
                      />
                    </div>
                  ) : null}
                  {user?.designation === "student" ? (
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
                        id="exampleInputstdSchool"
                      />
                    </div>
                  ) : null}
                  {user?.designation === "teacher" ? (
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
  );
};

export default UserProfile;
