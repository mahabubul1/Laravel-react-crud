import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { SmartToaster, toast } from "react-smart-toaster";

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            email: "",
            customers: []
        };
        this.changeFormFiled = this.changeFormFiled.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.dataShowById = this.dataShowById.bind(this);
        this.addSave = this.addSave.bind(this);
    }

    // lifecycle mehtod
    componentDidMount() {
        this.getAll();
        this.modalHide();
    }

    getAll() {
        Axios.get("/api/customer")
            .then(response => {
                this.setState({
                    customers: response.data.customers
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    changeFormFiled(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    formSubmit(e) {
        e.preventDefault();

        if (this.state.id != "") {
            Axios.put("/api/customer/" + this.state.id, {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email
            })
                .then(res => {
                    if (res.data.success == true) {
                        toast.success(`${res.data.message}`);
                        this.getAll();
                        this.modalHide();
                    } else {
                        res.data.errors.map(error => {
                            toast.error(`${error}`);
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            Axios.post("/api/customer", {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email
            })
                .then(res => {
                    if (res.data.success == true) {
                        toast.success(`${res.data.message}`);
                        this.getAll();
                        this.modalHide();
                    } else {
                        res.data.errors.map(error => {
                            toast.error(`${error}`);
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            this.setState({
                id: "",
                name: "",
                phone: "",
                email: ""
            });
        }
    }
    addSave() {
        this.setState({
            id: "",
            name: "",
            phone: "",
            email: ""
        });
    }

    modalHide() {
        $(".modal").modal("hide");
    }

    dataShowById(id) {
        Axios.get("/api/customer/" + id + "/" + "edit")
            .then(res => {
                this.setState({
                    id: res.data.customer.id,
                    name: res.data.customer.name,
                    phone: res.data.customer.phone,
                    email: res.data.customer.email
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    updateForm(id) {
        this.dataShowById(id);
    }
    deleteData(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it"
        }).then(result => {
            if (result.value) {
                Axios.delete("/api/customer/" + id)
                    .then(res => {
                        this.getAll();
                        Swal.fire(
                            "Deleted!",
                            "Your imaginary file has been deleted.",
                            "success"
                        );
                    })
                    .catch(error => {
                        console.log(error);
                    });

                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    "Cancelled",
                    "Your imaginary file is safe :)",
                    "error"
                );
            }
        });
    }
    render() {
        return (
            <>
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row bg-title">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <h4 className="page-title">Basic Table</h4>
                            </div>
                            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="#">Dashboard</a>/
                                    </li>
                                    <li className="active">Basic Table</li>
                                </ol>
                            </div>
                            {/* /.col-lg-12 */}
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="white-box">
                                    <div>
                                        {/* Button to Open the Modal */}
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            data-toggle="modal"
                                            data-target="#myModal"
                                            onClick={this.addSave}
                                            style={{ marginBottom: "10px" }}
                                        >
                                            Add
                                        </button>
                                        {/* The Modal */}
                                        <div
                                            className="modal fade in"
                                            id="myModal"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">
                                                            Add
                                                        </h4>
                                                        <button
                                                            type="button"
                                                            className="close"
                                                            data-dismiss="modal"
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                    {/* Modal body */}
                                                    <div className="modal-body">
                                                        <form
                                                            className="form-horizontal"
                                                            onSubmit={
                                                                this.formSubmit
                                                            }
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
                                                                                this
                                                                                    .changeFormFiled
                                                                            }
                                                                            value={
                                                                                this
                                                                                    .state
                                                                                    .name
                                                                            }
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
                                                                                this
                                                                                    .changeFormFiled
                                                                            }
                                                                            value={
                                                                                this
                                                                                    .state
                                                                                    .phone
                                                                            }
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
                                                                                this
                                                                                    .changeFormFiled
                                                                            }
                                                                            value={
                                                                                this
                                                                                    .state
                                                                                    .email
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="card-body">
                                                                <div className="form-group mb-0 text-right">
                                                                    <button
                                                                        type="submit"
                                                                        className="btn btn-info waves-effect waves-light custom-btn "
                                                                    >
                                                                        Save
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-danger"
                                                                        data-dismiss="modal"
                                                                    >
                                                                        Close
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <table
                                            className="table"
                                            id="customerTable"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.customers !== null
                                                    ? this.state.customers.map(
                                                          (customer, index) => (
                                                              <tr key={index}>
                                                                  <td>
                                                                      {index +
                                                                          1}
                                                                  </td>
                                                                  <td>
                                                                      {
                                                                          customer.name
                                                                      }
                                                                  </td>
                                                                  <td>
                                                                      {
                                                                          customer.phone
                                                                      }
                                                                  </td>
                                                                  <td>
                                                                      {
                                                                          customer.email
                                                                      }
                                                                  </td>
                                                                  <td>
                                                                      <button
                                                                          type="button"
                                                                          data-toggle="modal"
                                                                          data-target="#myModal"
                                                                          onClick={this.updateForm.bind(
                                                                              this,
                                                                              customer.id
                                                                          )}
                                                                          className="btn btn-primary custom-btn"
                                                                          data-key={
                                                                              customer.id
                                                                          }
                                                                      >
                                                                          <i
                                                                              className="fa fa-pencil"
                                                                              aria-hidden="true"
                                                                          ></i>
                                                                      </button>

                                                                      <button
                                                                          className="btn btn-danger"
                                                                          onClick={this.deleteData.bind(
                                                                              this,
                                                                              customer.id
                                                                          )}
                                                                      >
                                                                          <i
                                                                              className="fa fa-trash"
                                                                              aria-hidden="true"
                                                                          ></i>
                                                                      </button>
                                                                  </td>
                                                              </tr>
                                                          )
                                                      )
                                                    : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                    <footer className="footer text-center">
                        2017 © Ample Admin brought to you by wrappixel.com
                    </footer>
                </div>
            </>
        );
    }
}

export default Table;
