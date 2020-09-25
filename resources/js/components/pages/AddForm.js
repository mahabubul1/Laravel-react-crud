import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { SmartToaster, toast } from "react-smart-toaster";

export class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: ""
        };

        this.changeFormFiled = this.changeFormFiled.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    changeFormFiled(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    formSubmit(e) {
        e.preventDefault();
        Axios.post("/api/customer", {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
        })
            .then(res => {
                toast.success(`${res.data.message}`);
                this.props.history.push("/customer-all");
            })
            .catch(error => {
                console.log(error);
            });
        this.setState({
            name: "",
            phone: "",
            email: ""
        });
    }

    render() {
        return (
            <>
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row bg-title">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <h4 className="page-title">Add Form</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="white-box">
                                    <form
                                        className="form-horizontal"
                                        onSubmit={this.formSubmit}
                                    >
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label
                                                    htmlFor="fname"
                                                    className="col-sm-3 text-right control-label col-form-label"
                                                >
                                                    Name
                                                </label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Name Here"
                                                        autoComplete="off"
                                                        name="name"
                                                        onChange={
                                                            this.changeFormFiled
                                                        }
                                                        value={this.state.name}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label
                                                    htmlFor="phone"
                                                    className="col-sm-3 text-right control-label col-form-label"
                                                >
                                                    Phone
                                                </label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phone"
                                                        placeholder="Phone Here"
                                                        name="phone"
                                                        onChange={
                                                            this.changeFormFiled
                                                        }
                                                        value={this.state.phone}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label
                                                    htmlFor="email1"
                                                    className="col-sm-3 text-right control-label col-form-label"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email1"
                                                        placeholder="Email Here"
                                                        name="email"
                                                        onChange={
                                                            this.changeFormFiled
                                                        }
                                                        value={this.state.email}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <div className="form-group mb-0 text-right">
                                                <Link to="/customer-all">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary waves-effect waves-light custom-btn"
                                                    >
                                                        Back
                                                    </button>
                                                </Link>
                                                <button
                                                    type="submit"
                                                    className="btn btn-info waves-effect waves-light custom-btn "
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark waves-effect waves-light"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                    <footer className="footer text-center">
                        {" "}
                        2017 © Ample Admin brought to you by wrappixel.com
                    </footer>
                </div>
            </>
        );
    }
}

export default AddForm;
