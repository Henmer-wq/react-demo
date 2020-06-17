import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/buttons.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
// import "./assets/css/card.css";
import "./assets/css/pe-icon-7-stroke.css";

import { pdfjs } from 'react-pdf';

import AdminLayout from "layouts/Admin.jsx";

import { Provider } from "react-redux";
import configureStore from "./store";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/upload" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
