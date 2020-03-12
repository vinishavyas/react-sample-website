import React, {Component} from 'react';
import {icon1, icon2, icon3, icon4, icon5, icon6, icon7, img1, img2} from './Images';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner full-wdth">
                    <div className="container">
                        <div className="search-block-outer">
                        <h1>Connecting Business with Universities<br/>
                            to solve each others needs</h1>
                        <div className="srch-form clearfix">
                            <div className="inpt1">
                            <input type="text" placeholder="Title" className="form-control" />
                            </div>
                            <div className="inpt2">
                            <select className="form-control">
                                <option>Select Category</option>
                            </select>
                            </div>
                            <button type="submit" className="srch-btn"><i className="fas fa-search"></i></button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="home-sec1">
                    <div className="container">
                        <div className="how-it-sec text-center">
                        <h2>How it Works</h2>
                        <p>Businesses want to grow; University students, staff members and student bodies have skills that can help them and gain valuable work experience in the process. Here at Unisource we provide the platform on which to address both these wants by bringing businesses and universities together.
                            Growing off the opportunities and skills that each can offer the other.</p>
                        <h3>Looking for a service <span>(businesses)</span></h3>
                        <div className="row">
                            <div className="col-md-3">
                            <div className="work-process d-flex align-items-center">
                                <div className="icn-box"><img src={icon1} alt="" /></div>
                                <div className="hd">Make a post<br/>
                                requesting<br/>
                                a service</div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="work-process d-flex align-items-center">
                                <div className="icn-box"><img src={icon2} alt="" /></div>
                                <div className="hd">Receive<br/>
                                proposals</div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="work-process d-flex align-items-center">
                                <div className="icn-box"><img src={icon3} alt="" /></div>
                                <div className="hd">Select<br/>
                                a proposal</div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="work-process d-flex align-items-center">
                                <div className="icn-box"><img src={icon4} alt="" /></div>
                                <div className="hd">Connect with<br/>
                                the proposer<br/>
                                and begin</div>
                            </div>
                            </div>
                        </div>
                        <h3>Looking for projects <span>(university staff, students & student bodies)</span></h3>
                        <div className="row">
                            <div className="col-md-3">
                            <div className="work-process d-flex align-items-center">
                                <div className="icn-box"><img src={icon5} alt="" /></div>
                                <div className="hd">Search through <br/>
                                service requests</div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="work-process d-flex align-items-center">
                                <div className="icn-box"><img src={icon6} alt="" /></div>
                                <div className="hd">Select a request
                                that matches<br/>
                                your skills</div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="work-process d-flex align-items-center">
                                <div className="icn-box"><img src={icon7} alt="" /></div>
                                <div className="hd">Send in a<br/>
                                proposal</div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="work-process d-flex align-items-center">
                                <div className="icn-box"><img src={icon4} alt="" /></div>
                                <div className="hd">If chosen,<br/>
                                connect with<br/>
                                the requester<br/>
                                and begin</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="home-sec2">
                    <div className="container">
                        <h2 className="text-center">A few key points</h2>
                        <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="img-block"><img src={img1} alt="" /></div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-block">
                            <h3>Flexibility</h3>
                            <p>A business can accept one or multiple proposals for the same request.</p>
                            </div>
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="info-block text-right">
                            <h3>Confidentiality</h3>
                            <p>Contact details of both parties are revealed when a proposal is accepted.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-block"><img src={img2} alt="" /></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="home-sec3">
                    <div className="container">
                        <h2 className="text-center">The benefits</h2>
                        <ul className="benefits clearfix">
                        <li><strong>A COST FREE SERVICE</strong></li>
                        <li>No commission, project fees negotiated directly between
                            requester and provider. </li>
                        <li>Businesses can:
                            <ul>
                            <li>Have access to cost effective resources.</li>
                            <li>Quickly source talented individuals.</li>
                            <li>Explore multiple solutions to their needs before investing.</li>
                            <li>Be flexible in selecting business solutions.</li>
                            </ul>
                        </li>
                        <li>Academics can:
                            <ul>
                            <li>Put their knowledge into practice on a broader scale.</li>
                            <li>Obtain work experience in a manner that works around their schedules.</li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default Home;