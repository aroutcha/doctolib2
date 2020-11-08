import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import FormPracticien from './FormPraticien';
import CalandarRdv from './CalandarRdv';
import Login from './Login';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                  <Menu></Menu>
                    <switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/addPraticiens" component={FormPracticien}></Route>
                        <Route path="/CalandarRdv/:id" Component={CalandarRdv}></Route>
                        <Route path="/Login" exact component={Login}></Route>
                        <Route path="/Login/:url" component={Login}></Route>
                    </switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default Navigation;