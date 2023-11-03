import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from '../App';
import Welcome from '../pages/welcome';
import InputPhoneNumber from '../pages/input-phone';
import InputOtp from '../pages/input-otp';
import AboutMePage from '../pages/about_me';

import history from '../routes/history';

export default class AppRoute extends Component {
    render() {
        return (
            <Router history={history}>
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route path="/input-phone" element={<InputPhoneNumber />} />
                    <Route path="/input-otp" element={<InputOtp/>} />
                    <Route path="/homepage" element={<App />} />
                    <Route path="/about" element={<AboutMePage />} />
                    {/* <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Routes>
            </Router>
        )
    }
}