import React from "react";

const TeacherSearchAndShow = () => {
  return (
    <div className="my-3">
      <div
        class="card find-techers-card"
        style={{ width: "80%", height: "45vh", margin: "auto" }}
      >
        <div class="card-body">
          <form>
            <div className="d-flex justify-content-around mt-5">
              <div class="mb-3 class-name-input">
                <label for="exampleInputDesignation" class="form-label">
                  Class
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="exampleInputDesignation"
                >
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                  <option value="9">Nine</option>
                  <option value="10">Ten</option>
                  <option value="more">More then</option>
                </select>
              </div>

              <div class="mb-3 class-name-input">
                <label for="exampleInputName" class="form-label">
                  Subject
                </label>
                <input type="text" class="form-control" id="exampleInputName" />
              </div>
            </div>
            <div className="text-end me-5 pe-5 mt-3">
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>

      <div className="my-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <a href="/home">
              <div class="card find-techers-show-card h-100">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="/home">
              <div class="card find-techers-show-card h-100">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="/home">
              <div class="card find-techers-show-card h-100">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSearchAndShow;
