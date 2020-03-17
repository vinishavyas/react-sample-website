import React, { Component } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constants";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postings: [],
      postingsCount: 0
    };
  }

  render = () => {
    return (
      <React.Fragment>
        <Banner bannerName="Search Results" />
        <div className="listing-section">
          <div className="container">
            <div className="listing-box d-flex flex-wrap pt-5 pb-5 mb-4">
              <div className="listing-lt">
                <div className="sidebar-bx mb-4">
                  <div className="custom-search-bar">
                    <div className="custom-input-bx position-relative">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search here..."
                      />
                      <button className="abso-icon">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sidebar-bx mb-4">
                  <h3>filter by budget</h3>
                  <div className="in-bx">
                    <div className="row">
                      <div className="col">
                        <div className="input-bx mb-4">
                          <label>Min</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="£"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="input-bx mb-4">
                          <label>Max</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="£"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="button">
                          <button className="btn btn-custom btn-black btn-md">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-bx mb-4">
                  <div className="hd2">
                    <div className="custom-control custom-checkbox d-flex">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customControlInline9"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customControlInline9"
                      >
                        View open jobs only
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-rt">
                <h3 className="middle-heading lg-gr">Search Results</h3>
                <div className="top-search-bar d-flex align-items-center justify-content-between flex-wrap">
                  <div className="custom-input-bx select position-relative">
                    <select className="form-control">
                      <option>Sort by: Highest Budget</option>
                    </select>
                  </div>
                  <p className="total-result">
                    Total {this.state.postingsCount} result found...
                  </p>
                </div>
                <div className="listing">
                  <div className="row">
                    {this.state.postings.map((item, index) => {
                      return (
                        <div className="col-lg-6" key={index}>
                          <div className="list-box">
                            <h3>{item.title}</h3>
                            <ul>
                              <li>Category: {item.service_id}</li>
                              <li>Budget: {item.budget}</li>
                              <li>Service Location: {item.service_area}</li>
                            </ul>
                            <div className="button mt-3">
                              <button className="btn btn-custom btn-black btn-md">
                                view details
                              </button>
                            </div>
                            <span className="icon-abso yellow-color">
                              {item.bid_status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <nav
                    className="pagination-bx d-flex justify-content-center pt-4"
                    aria-label="Page navigation example"
                  >
                    <ul className="pagination">
                      <li className="page-item">
                        <Link
                          className="page-link d-flex align-items-center justify-content-center"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">
                            <i className="fas fa-angle-left"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link d-flex align-items-center justify-content-center"
                          to="#"
                        >
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link
                          className="page-link d-flex align-items-center justify-content-center"
                          to="#"
                        >
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link d-flex align-items-center justify-content-center"
                          to="#"
                        >
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link d-flex align-items-center justify-content-center"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">
                            <i className="fas fa-angle-right"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  componentDidMount() {
    axios
      .post(BASE_URL + "/listings")
      .then(response => {
        if (response.data.status === "success") {
          this.setState({
            postings: response.data.data.items,
            postingsCount : response.data.data.items.length
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default Listing;
