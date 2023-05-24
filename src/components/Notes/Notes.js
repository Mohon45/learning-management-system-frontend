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
              <td>16.05.2023</td>
              <td>SSC english paragraph suggestion 2023</td>
              <td>
                <div className="">
                  <button className="btn btn-primary me-3">
                    <a
                      className="download-btn"
                      href="/pdf/ssc english paragraph suggestion 2023.pdf"
                      download
                    >
                      Download
                    </a>
                  </button>
                  <button className="btn btn-primary note-vie-btn">
                    <a
                      className="download-btn"
                      href="https://drive.google.com/file/d/1JcSqxnD5p0oq3g1o2VIXyG3KbEFq6y-c/view?usp=sharing"
                      target="blank"
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
              <td>23.05.2023</td>
              <td>Bangla 2nd paper-suggetion</td>
              <td>
                <button className="btn btn-primary me-3">
                  <a
                    className="download-btn"
                    href="/pdf/Bangla 2nd paper-suggetion.pdf"
                    download
                  >
                    Download
                  </a>
                </button>
                <button className="btn btn-primary note-vie-btn">
                  <a
                    className="download-btn"
                    href="https://drive.google.com/file/d/1zdh662LnOSssM1fT9y_SStL_Q73YFYnC/view?usp=sharing"
                    target="blank"
                    download
                  >
                    View
                  </a>
                </button>
              </td>
            </tr>

            <tr>
              <th>4</th>
              <td>23.05.2023</td>
              <td>Physics-suggetion</td>
              <td>
                <button className="btn btn-primary me-3">
                  <a
                    className="download-btn"
                    href="/pdf/Physics-suggetion.pdf"
                    download
                  >
                    Download
                  </a>
                </button>
                <button className="btn btn-primary note-vie-btn">
                  <a
                    className="download-btn"
                    href="https://drive.google.com/file/d/1B-GVb-5QtHuo6GlaBgSlPdre8eHeyvKc/view?usp=sharing"
                    target="blank"
                  >
                    View
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>23.05.2023</td>
              <td>SSC 2023 bangla 1st paper question</td>
              <td>
                <button className="btn btn-primary me-3">
                  <a
                    className="download-btn"
                    href="/pdf/ssc 2023 bangla 1st paper question pattern.pdf"
                    target="blank"
                    download
                  >
                    Download
                  </a>
                </button>
                <button className="btn btn-primary note-vie-btn">
                  <a
                    className="download-btn"
                    href="https://drive.google.com/file/d/1tydQ1-eJP8fjXo6ZJkV-nlYe7Nu3n3j_/view?usp=sharing"
                    target="blank"
                  >
                    View
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>23.05.2023</td>
              <td>SSC 2023 chemistry mcq suggestion</td>
              <td>
                <button className="btn btn-primary me-3">
                  <a
                    className="download-btn"
                    href="/pdf/ssc 2023 chemistry mcq suggestion.pdf"
                    target="blank"
                    download
                  >
                    Download
                  </a>
                </button>
                <button className="btn btn-primary note-vie-btn">
                  <a
                    className="download-btn"
                    href="https://drive.google.com/file/d/1LbCXUkJZl-298SCrRkafet481ZjYjbQe/view?usp=sharing"
                    target="blank"
                  >
                    View
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>23.05.2023</td>
              <td>SSC biology suggestion 2023</td>
              <td>
                <button className="btn btn-primary me-3">
                  <a
                    className="download-btn"
                    href="/pdf/ssc biology suggestion 2023.pdf"
                    target="blank"
                    download
                  >
                    Download
                  </a>
                </button>
                <button className="btn btn-primary note-vie-btn">
                  <a
                    className="download-btn"
                    href="https://drive.google.com/file/d/1FWKcDa0e7ksxTT2jt2jfkKx9EKiOt27K/view?usp=sharing"
                    target="blank"
                  >
                    View
                  </a>
                </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>23.05.2023</td>
              <td>SSC chemistry suggestion 2023</td>
              <td>
                <button className="btn btn-primary me-3">
                  <a
                    className="download-btn"
                    href="/pdf/ssc chemistry suggestion 2023.pdf"
                    target="blank"
                    download
                  >
                    Download
                  </a>
                </button>
                <button className="btn btn-primary note-vie-btn">
                  <a
                    className="download-btn"
                    href="https://drive.google.com/file/d/1d6yrmrSGd1M9eBKMSq21c5hEsTUXnLc5/view?usp=sharing"
                    target="blank"
                    download
                  >
                    View
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
