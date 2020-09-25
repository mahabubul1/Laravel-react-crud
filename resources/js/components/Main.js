import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./layouts/partials/Navbar";
import Sidebar from "./layouts/partials/Sidebar";
import AppContent from "./layouts/AppContent";
import { BrowserRouter } from "react-router-dom";
export class Main extends Component {
    render() {
        return (
            <div id="wrapper">
                <BrowserRouter>
                    <Navbar />
                    <Sidebar />
                    <AppContent />
                </BrowserRouter>
            </div>
        );
    }
}

export default Main;
if (document.getElementById("root-element")) {
    ReactDOM.render(<Main />, document.getElementById("root-element"));
}
