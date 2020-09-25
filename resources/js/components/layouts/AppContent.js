import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Table from "../pages/Table";
import AddForm from "../pages/AddForm";
import EditForm from "../pages/EditForm";
export class AppContent extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/customer-all" component={Table} />
                <Route path="/add" component={AddForm} />
                <Route path="/edit:id" component={EditForm} />
            </Switch>
        );
    }
}

export default AppContent;
