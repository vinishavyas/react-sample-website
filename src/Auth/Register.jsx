import React, {Component} from 'react';
import Banner from '../Banner/Banner';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import {BASE_URL} from '../Constants';

class Register extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            organisation_name : "",
            contact_name : "",
            email : "",
            telephone_number : "",
            password : "",
            confirm_password : "",
            address_1 : "",
            address_2 : "",
            postcode : "",
            city : "",
            country : "",
            alertType : "",
            message : '',
            alert : '',
            confirm_message : ''
        }
    }

    render = () => {
        if (this.state.alert === 1 && this.state.message) {
            var classString = 'alert alert-' + this.state.alertType;
            var status = <div id="status" className={classString} ref="status">
                           {this.state.message}
                         </div>;
        }
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
                                        {status}
                                        <h3 className="middle-heading">Please fill your detail given below</h3>
                                        <form method="post" onSubmit={this.handleSubmit} ref="form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Organisation name</label>
                                                        <input name="organisation_name" className="form-control" type="text" placeholder="Organisation name" onChange={this.changeInput}/>
                                                        { this.validator.message('organisation_name', this.state.organisation_name, 'required|min:5|max:50') }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Contact name</label>
                                                        <input name="contact_name" className="form-control" type="text" placeholder="Enter name" onChange={this.changeInput}/>
                                                        { this.validator.message('contact_name', this.state.contact_name, 'required|max:50') }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Email address</label>
                                                        <input name="email" className="form-control" type="text" placeholder="Enter your address" onChange={this.changeInput}/>
                                                        { this.validator.message('email', this.state.email, 'required|email|max:50') }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Telephone number</label>
                                                        <input name="telephone_number" className="form-control" type="text" placeholder="Enter phone number" onChange={this.changeInput}/>
                                                        { this.validator.message('telephone_number', this.state.telephone_number, 'required|phone') }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input name="password" className="form-control" type="password" placeholder="Password" onChange={this.changeInput}/>
                                                        { this.validator.message('password', this.state.password, 'required|min:8|max:20') }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Re-enter password</label>
                                                        <input name="confirm_password" className="form-control" type="password" placeholder="Re-enter password" onChange={this.changeInput}/>
                                                        { this.validator.message('confirm_password', this.state.confirm_password, 'required') }
                                                        { this.state.confirm_message !== "" ? <div class="srv-validation-message">Password and confirm password must be same.</div> : '' }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Address1</label>
                                                        <input name="address_1" className="form-control" type="text" onChange={this.changeInput} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Address2</label>
                                                        <input name="address_2" className="form-control" type="text" onChange={this.changeInput}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Postcode</label>
                                                        <input name="postcode" className="form-control" type="text" placeholder="Enter Postcode" onChange={this.changeInput} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input name="city" className="form-control" type="text" placeholder="Your city" onChange={this.changeInput} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <select name="country" className="form-control" onChange={this.changeInput}>
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

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.validator.allValid()) {
            this.validator.showMessages();
            this.forceUpdate();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
        } else {
            if(this.state.password !== this.state.confirm_password) {
                this.setState({
                    confirm_message : "1"
                })
            } else {
                this.setState({
                    confirm_message : ""
                })
                const {organisation_name, contact_name, email, telephone_number, password, confirm_password, address_1, address_2, postcode, city, country} = this.state;
                const register_details = {
                    organisation_name, contact_name, email, telephone_number, password, confirm_password, address_1, address_2, postcode, city, country
                }
                axios.post(BASE_URL+"/register", register_details)
                .then((response) => {
                    if(response.data.status === 'error') {
                        this.setState({
                            message : response.data.message,
                            alert : 1,
                            alertType : 'danger'
                        })
                    } else {
                        this.setState({
                            message : response.data.message,
                            alert : 1,
                            alertType : 'success'
                        });
                        this.refs.form.reset();
                    }
                    window.scrollTo(0, 0)
                })
                .catch(err => {
                    console.error(err);
                });
            }
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
}

export default Register;