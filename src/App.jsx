import React, { Component } from "react";
import "./App.css";
import Signup from "./views/Signup";
// import Login from "./views/Login";
// import Header from "./components/Layout/Header";
// import SideNav from "./components/Layout/SideNav";
// import Footer from "./components/Layout/Footer";
// import Mapbox from "./views/Mapbox";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        {/* <Header />
        <div className="content">
          <SideNav />
          <Mapbox />
        </div>
        <Footer /> */}
        {/* <Login /> */}
        <Signup />
      </div>
    );
  }
}