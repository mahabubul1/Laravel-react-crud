import React, { Component } from "react";

export class Dashboard extends Component {
    render() {
        return (
            <>
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Page Content */}
                {/* ============================================================== */}
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row bg-title">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <h4 className="page-title">Dashboard</h4>{" "}
                            </div>
                            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="#">Dashboard</a>
                                    </li>
                                </ol>
                            </div>
                            {/* /.col-lg-12 */}
                        </div>
                        {/* /.row */}
                        {/* ============================================================== */}
                        {/* Different data widgets */}
                        {/* ============================================================== */}
                        {/* .row */}
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">Total Visit</h3>
                                    <ul className="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash" />
                                        </li>
                                        <li className="text-right">
                                            <i className="ti-arrow-up text-success" />{" "}
                                            <span className="counter text-success">
                                                659
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">
                                        Total Page Views
                                    </h3>
                                    <ul className="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash2" />
                                        </li>
                                        <li className="text-right">
                                            <i className="ti-arrow-up text-purple" />{" "}
                                            <span className="counter text-purple">
                                                869
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">
                                        Unique Visitor
                                    </h3>
                                    <ul className="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash3" />
                                        </li>
                                        <li className="text-right">
                                            <i className="ti-arrow-up text-info" />{" "}
                                            <span className="counter text-info">
                                                911
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*/.row */}
                        {/* ============================================================== */}
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <div className="white-box">
                                    <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
                                        <select className="form-control pull-right row b-none">
                                            <option>March 2017</option>
                                            <option>April 2017</option>
                                            <option>May 2017</option>
                                            <option>June 2017</option>
                                            <option>July 2017</option>
                                        </select>
                                    </div>
                                    <h3 className="box-title">Recent sales</h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>NAME</th>
                                                    <th>STATUS</th>
                                                    <th>DATE</th>
                                                    <th>PRICE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td className="txt-oflo">
                                                        Elite admin
                                                    </td>
                                                    <td>SALE</td>
                                                    <td className="txt-oflo">
                                                        April 18, 2017
                                                    </td>
                                                    <td>
                                                        <span className="text-success">
                                                            $24
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td className="txt-oflo">
                                                        Real Homes WP Theme
                                                    </td>
                                                    <td>EXTENDED</td>
                                                    <td className="txt-oflo">
                                                        April 19, 2017
                                                    </td>
                                                    <td>
                                                        <span className="text-info">
                                                            $1250
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td className="txt-oflo">
                                                        Ample Admin
                                                    </td>
                                                    <td>EXTENDED</td>
                                                    <td className="txt-oflo">
                                                        April 19, 2017
                                                    </td>
                                                    <td>
                                                        <span className="text-info">
                                                            $1250
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td className="txt-oflo">
                                                        Medical Pro WP Theme
                                                    </td>
                                                    <td>TAX</td>
                                                    <td className="txt-oflo">
                                                        April 20, 2017
                                                    </td>
                                                    <td>
                                                        <span className="text-danger">
                                                            -$24
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td className="txt-oflo">
                                                        Hosting press html
                                                    </td>
                                                    <td>SALE</td>
                                                    <td className="txt-oflo">
                                                        April 21, 2017
                                                    </td>
                                                    <td>
                                                        <span className="text-success">
                                                            $24
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td className="txt-oflo">
                                                        Digital Agency PSD
                                                    </td>
                                                    <td>SALE</td>
                                                    <td className="txt-oflo">
                                                        April 23, 2017
                                                    </td>
                                                    <td>
                                                        <span className="text-danger">
                                                            -$14
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td className="txt-oflo">
                                                        Helping Hands WP Theme
                                                    </td>
                                                    <td>MEMBER</td>
                                                    <td className="txt-oflo">
                                                        April 22, 2017
                                                    </td>
                                                    <td>
                                                        <span className="text-success">
                                                            $64
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================================== */}
                        {/* chat-listing & recent comments */}
                        {/* ============================================================== */}
                    </div>
                    {/* /.container-fluid */}
                    <footer className="footer text-center">
                        {" "}
                        2017 © Ample Admin brought to you by wrappixel.com{" "}
                    </footer>
                </div>
                {/* ============================================================== */}
                {/* End Page Content */}
                {/* ============================================================== */}
            </>
        );
    }
}

export default Dashboard;
