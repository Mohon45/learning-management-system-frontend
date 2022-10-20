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
              <td>16.10.2022</td>
              <td>SSC english paragraph suggestion 2023</td>
              <td>
                <div className="">
                  <button className="btn btn-primary">
                    <a
                      className="download-btn"
                      href="/pdf/ssc english paragraph suggestion 2023.pdf"
                      download
                    >
                      Download
                    </a>
                  </button>
                  <button className="btn btn-primary ms-5">
                    <a
                      className="download-btn"
                      href="/pdf/ssc english paragraph suggestion 2023.pdf"
                      download
                    >
                      View
                    </a>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>16.10.2022</td>
              <td>Bangla 2nd paper-suggetion</td>
              <td>
                <button className="btn btn-primary">
                  <a
                    className="download-btn"
                    href="/pdf/Bangla 2nd paper-suggetion.pdf"
                    download
                  >
                    Download
                  </a>
                </button>
              </td>
            </tr>

            <tr>
              <th>4</th>
              <td>17.10.2022</td>
              <td>Physics-suggetion</td>
              <td>
                <button className="btn btn-primary">
                  <a
                    className="download-btn"
                    href="/pdf/Physics-suggetion.pdf"
                    download
                  >
                    Download
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>17.10.2022</td>
              <td>SSC 2023 bangla 1st paper question</td>
              <td>
                <button className="btn btn-primary">
                  <a
                    className="download-btn"
                    href="/pdf/ssc 2023 bangla 1st paper question pattern.pdf"
                    download
                  >
                    Download
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>17.10.2022</td>
              <td>SSC 2023 chemistry mcq suggestion</td>
              <td>
                <button className="btn btn-primary">
                  <a
                    className="download-btn"
                    href="/pdf/ssc 2023 chemistry mcq suggestion.pdf"
                    download
                  >
                    Download
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>19.10.2022</td>
              <td>SSC biology suggestion 2023</td>
              <td>
                <button className="btn btn-primary">
                  <a
                    className="download-btn"
                    href="/pdf/ssc biology suggestion 2023.pdf"
                    download
                  >
                    Download
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>19.10.2022</td>
              <td>SSC chemistry suggestion 2023</td>
              <td>
                <button className="btn btn-primary">
                  <a
                    className="download-btn"
                    href="/pdf/ssc chemistry suggestion 2023.pdf"
                    download
                  >
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
