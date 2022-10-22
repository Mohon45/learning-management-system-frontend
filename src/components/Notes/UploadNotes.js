import React from "react";
import Layout from "../../HOC/Layout";

const UploadNotes = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center fw-bold my-4">
          Upload Notes for specific Subjects
        </h1>
        <div className="row upload-notes-form my-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputname" className="form-label">
                  Note Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputfile" className="form-label">
                  Select a Notes
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="exampleInputfile"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </Layout>
  );
};

export default UploadNotes;
