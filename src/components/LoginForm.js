import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Form, Row, Col } from "antd";
import 'antd/dist/antd.css';
import '../assets/styles/vendor/fontawesome-free/css/all.min.css';
import '../assets/styles/sb-admin-2.css';
import '../assets/styles/LoginForm.css';
import  Dashboard from '../components/Dashboard';
export default class LoginForm extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state  = {
    //         email:"",
    //         password:""
    //     }
    //     this.handleClick =this.handleRedirect.bind(this);
    // }
    // handleRedirect(event){
    //     //console.log("Sandhya");
    //     this.props.history.push('/dashboard');

    // }

    render() {
        return (
            <div className="justify-content-center">
                <Row>
                    <Col span={20} offset={2}>
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <Row>
                                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4"><a href="index.html">IdenTv</a> VideoTagging!</h1>
                                            </div>
                                            <Form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" onClick={(event) => this.handleClick(event)} className="btn btn-success btn-login">Login</button>
                                                </div>
                                            </Form>
                                        </div>
                                    </Col>
                                    <Col span={12} className="d-none d-lg-block bg-login-image">
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}