import React, { useState, useRef } from "react";
import ContactForm from "../../templates/ContactForm/ContactForm";
import { Grid, Box } from "@mui/material";
import Sliders from "../../templates/Sliders/Sliders";
import Services from "../../templates/Services/services";
import PriceList from "../../templates/Pricing/priceList";
import AllInOneAC from "../../templates/AllInOne/AllInOneAC";
import FloatButton from "../../templates/FloatButton/FloatButton";
import "./dashboardStyles.css";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRefToCharges = useRef(null);
  const navRefToContact = useRef(null);
  const navRefToExplore = useRef(null);
  const navRefToScrollTop = useRef(null);

  const scrollToSection = (elementsRef: any) => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: elementsRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  const NavBar = () => {
    return (
      <nav>
        <div className="nav_left">
          <div>
            <img src={require("../../assest/logos/cLogo.png")} alt="logo" />
          </div>
        </div>

        <div>
          <ul id="navbar" className={isMenuOpen ? "#navbar" : "hide"}>
            <li>
              <div onClick={() => scrollToSection(navRefToCharges)}>
                <i className="fa fa-inr" />
                Service Charges
              </div>
            </li>
            <li>
              <div onClick={() => scrollToSection(navRefToContact)}>
                <i className="fa fa-phone" />
                Contact Us
              </div>
            </li>
            <li>
              <div onClick={() => scrollToSection(navRefToExplore)}>
                <i className="fa fa-search" />
                Explore
              </div>
            </li>
          </ul>
        </div>

        <div id="mobile">
          <i
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}
          />
        </div>
      </nav>
    );
  };

  return (
    <div ref={navRefToScrollTop}>
      <NavBar />
      <h2 style={{ color: "#001c35" }}>Invest in future</h2>
      <h3>Welcome to robotic solutions</h3>
      <Box sx={{ flexGrow: 1, margin: 2 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2 }}>
          <Grid id="slider_com" item xs={12} md={12}>
            <Sliders />
          </Grid>
          {/* Other Parts */}
          <Grid id="AllInOne_com" item xs={12} md={6}>
            {/* <h1 style={{ textAlign: "center" }}>Services</h1> */}
            <AllInOneAC />
          </Grid>
          {/* Other Parts */}
          <Grid ref={navRefToExplore} id="service_com" item xs={12} md={6}>
            {/* <h1 style={{ textAlign: "center" }}>Services</h1> */}
            <Services />
          </Grid>
          {/* PriceList */}
          <Grid ref={navRefToCharges} id="price_com" item xs={12} md={6}>
            <PriceList />
          </Grid>
          {/* Contact Form */}
          <Grid ref={navRefToContact} id="form_com" item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
      <Footer />
      <FloatButton onClicks={() => scrollToSection(navRefToScrollTop)} />
    </div>
  );
};
export default Dashboard;
