import React from "react";
import Layout from "../../HOC/Layout";

const Notes = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center fw-bold my-4">
          Notes of different classes and subjects
        </h1>
        <table className="table table-striped my-5">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th>1</th>
              <td>28.09.2022</td>
              <td>Class 10 Final Exam Notes</td>
              <td>
                <button className="btn btn-primary">
                  <a className="download-btn" href="">
                    Download
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>28.09.2022</td>
              <td>Class 10 Final Exam Notes</td>
              <td>
                <button className="btn btn-primary">
                  <a className="download-btn" href="">
                    Download
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>28.09.2022</td>
              <td>Class 10 Final Exam Notes</td>
              <td>
                <button className="btn btn-primary">
                  <a className="download-btn" href="">
                    Download
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>28.09.2022</td>
              <td>Class 10 Final Exam Notes</td>
              <td>
                <button className="btn btn-primary">
                  <a className="download-btn" href="">
                    Download
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>28.09.2022</td>
              <td>Class 10 Final Exam Notes</td>
              <td>
                <button className="btn btn-primary">
                  <a className="download-btn" href="">
                    Download
                  </a>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Notes;
