import React, {Component} from 'react';
import Banner from '../Banner/Banner';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import {BASE_URL} from '../Constants';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            email : "",
            password : "",
            alertType : "",
            message : '',
            alert : '',
            isLoggedIn : false
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
                <Banner bannerName="Login"/>
                <div className="account-section ">
                    <div className="container">
                        <div className="account-box login-page ">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane show active" id="buyer" role="tabpanel" aria-labelledby="buyer-tab">
                                    <div className="form-box text-center">
                                        <div className="login-title d-flex  flex-column align-items-center"><i className="fas fa-user"></i><h2>User Login</h2></div>
                                        {status}
                                        <h3 className="middle-heading02">Login to access your account</h3>
                                        <form onSubmit={this.handleSubmit} method="post">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group text-left inp-user">
                                                        <label>Email</label>
                                                        <input className="form-control" type="text" name="email" placeholder="Enter email address" onChange={this.changeInput} />
                                                        { this.validator.message('email', this.state.email, 'required|email') }
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group text-left inp-password ">
                                                        <label>Password</label>
                                                        <input className="form-control" type="password" name="password" placeholder="Enter password" onChange={this.changeInput} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-4">
                                                    <div className="buttons d-flex justify-content-between align-items-center">
                                                        <button className="btn btn-custom btn-black btn-md">Login</button>
                                                        <Link className="forgot-link" to="">Forgot Password?</Link>
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
                this.setState({
                    confirm_message : ""
                })
                const { email, password } = this.state;
                const login_details = {
                    email, password
                }
                axios.post(BASE_URL+"/login", login_details)
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
                            alertType : 'success',
                            isLoggedIn: true
                        });
                        window.location.href="/profile"
                    }
                    window.scrollTo(0, 0)
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
}

export default Login;