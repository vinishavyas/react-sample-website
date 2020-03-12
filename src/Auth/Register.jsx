import React, {Component} from 'react';
import Banner from '../Banner/Banner';

class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner bannerName="Create Account"/>
                <div className="account-section">
                    <div className="container">
                        <div className="account-box pt-5 pb-5 mb-4">
                            <div className="d-flex justify-content-center">
                                <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center justify-content-center active" id="buyer-tab" data-toggle="pill" href="#buyer" role="tab" aria-controls="buyer" aria-selected="true">Buyer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center justify-content-center" id="supplier-tab" data-toggle="pill" href="#supplier" role="tab" aria-controls="supplier" aria-selected="false">Supplier</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane show active" id="buyer" role="tabpanel" aria-labelledby="buyer-tab">
                                    <div className="form-box">
                                        <h3 className="middle-heading">Please fill your detail given below</h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Organisation name</label>
                                                        <input className="form-control" type="text" placeholder="Organisation name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Contact name</label>
                                                        <input className="form-control" type="text" placeholder="Enter name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Email address</label>
                                                        <input className="form-control" type="text" placeholder="Enter your address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Telephone number</label>
                                                        <input className="form-control" type="text" placeholder="Enter phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input className="form-control" type="password" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Re-enter password</label>
                                                        <input className="form-control" type="password" placeholder="Re-enter password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Address1</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Address2</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Postcode</label>
                                                        <input className="form-control" type="text" placeholder="Enter Postcode" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input className="form-control" type="text" placeholder="Your city" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <select className="form-control">
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="buttons d-flex justify-content-end">
                                                        <button className="btn btn-custom btn-black btn-md">Register</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane" id="supplier" role="tabpanel" aria-labelledby="supplier-tab">
                                    <div className="form-box">
                                        <h3 className="middle-heading">Supplier Detail Goes Here</h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Organisation name</label>
                                                        <input className="form-control" type="text" placeholder="Organisation name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Contact name</label>
                                                        <input className="form-control" type="text" placeholder="Enter name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Email address</label>
                                                        <input className="form-control" type="text" placeholder="Enter your address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Telephone number</label>
                                                        <input className="form-control" type="text" placeholder="Enter phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input className="form-control" type="password" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Re-enter password</label>
                                                        <input className="form-control" type="password" placeholder="Re-enter password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Address1</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Address2</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Postcode</label>
                                                        <input className="form-control" type="text" placeholder="Enter Postcode" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input className="form-control" type="text" placeholder="Your city" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <select className="form-control">
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="buttons d-flex justify-content-end">
                                                        <button className="btn btn-custom btn-black btn-md">Register</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;