import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SmartToaster, toast } from "react-smart-toaster";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <SmartToaster
                    store={toast}
                    lightBackground={true}
                    position={"top_right"}
                />
                ;
                {/* ============================================================== */}
                {/* Topbar header - style you can find in pages.scss */}
                {/* ============================================================== */}
                <nav className="navbar navbar-default navbar-static-top m-b-0">
                    <div className="navbar-header">
                        <div className="top-left-part">
                            {/* Logo */}
                            <Link className="logo" to="/dashboard">
                                {/* Logo icon image, you can use font-icon also */}
                                <b>
                                    {/*This is dark logo icon*/}
                                    <img
                                        src="assets/admin/plugins/images/admin-logo.png"
                                        alt="home"
                                        className="dark-logo"
                                    />
                                    {/*This is light logo icon*/}
                                    <img
                                        src="assets/admin/plugins/images/admin-logo-dark.png"
                                        alt="home"
                                        className="light-logo"
                                    />
                                </b>
                                {/* Logo text image you can use text also */}
                                <span className="hidden-xs">
                                    {/*This is dark logo text*/}
                                    <img
                                        src="assets/admin/plugins/images/admin-text.png"
                                        alt="home"
                                        className="dark-logo"
                                    />
                                    {/*This is light logo text*/}
                                    <img
                                        src="assets/admin/plugins/images/admin-text-dark.png"
                                        alt="home"
                                        className="light-logo"
                                    />
                                </span>
                            </Link>
                        </div>

                        <ul className="nav navbar-top-links navbar-right pull-right">
                            <li>
                                <a
                                    className="nav-toggler open-close waves-effect waves-light hidden-md hidden-lg"
                                    href="#"
                                >
                                    <i className="fa fa-bars" />
                                </a>
                            </li>
                            <li>
                                <form
                                    role="search"
                                    className="app-search hidden-sm hidden-xs m-r-10"
                                >
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="form-control"
                                    />
                                    <a href="#">
                                        <i className="fa fa-search" />
                                    </a>
                                </form>
                            </li>
                            <li>
                                <a className="profile-pic" href="#">
                                    <img
                                        src="assets/admin/plugins/images/users/varun.jpg"
                                        alt="user-img"
                                        width={36}
                                        className="img-circle"
                                    />
                                    <b className="hidden-xs">Steave</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
