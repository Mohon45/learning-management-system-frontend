import React from "react";
import Layout from "../../HOC/Layout";

const UserProfile = () => {
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
                  <div class="mb-3">
                    <label for="exampleInputName" class="form-label">
                      Name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputName"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputNumber" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="Number"
                      class="form-control"
                      id="exampleInputNumber"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputAddress" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputAddress"
                    />
                  </div>
                </div>
              </div>

              {/* right side */}

              <div className="col-md-6">
                <div className="col-md-8 mx-auto">
                  <div class="mb-3">
                    <label for="exampleInputDesignation" class="form-label">
                      Designation
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      id="exampleInputDesignation"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputTeachSubject" class="form-label">
                      Your teaching Subjects
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputTeachSubject"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputstdClass" class="form-label">
                      Class
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputstdClass"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputTeachClass" class="form-label">
                      Your teaching Subjects
                    </label>
                    <input
                      type="test"
                      class="form-control"
                      id="exampleInputTeachClass"
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputCurrentEmploynebt"
                      class="form-label"
                    >
                      Your current employment
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputCurrentEmploynebt"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputstdSchool" class="form-label">
                      Your School
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputstdSchool"
                    />
                  </div>
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
