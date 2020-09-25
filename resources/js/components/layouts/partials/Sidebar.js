import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
    render() {
        return (
            <div>
                {/* Left Sidebar - style you can find in sidebar.scss  */}
                {/* ============================================================== */}
                <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav slimscrollsidebar">
                        <div className="sidebar-head">
                            <h3>
                                <span className="fa-fw open-close">
                                    <i className="ti-close ti-menu" />
                                </span>
                                <span className="hide-menu">Navigation</span>
                            </h3>
                        </div>
                        <ul className="nav" id="side-menu">
                            <li style={{ padding: "70px 0 0" }}>
                                <Link to="/dashboard" className="waves-effect">
                                    <i
                                        className="fa fa-clock-o fa-fw"
                                        aria-hidden="true"
                                    />
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/customer-all"
                                    className="waves-effect"
                                >
                                    <i
                                        className="fa fa-table fa-fw"
                                        aria-hidden="true"
                                    />
                                    Customer Manage
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* End Left Sidebar */}
            </div>
        );
    }
}

export default Sidebar;
