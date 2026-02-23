import React from "react";
import { Link } from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import PublicFooter from "./components/PublicFooter";
import "./Landing.css";

const ContactPage = () => {
    return (
        <div className="landing-container info-page">
            <PublicNavbar />

            <section className="cta-section info-main">
                <h2>Ready to Send Your First Parcel?</h2>
                <p>Join SendIT today and experience fast, reliable, and transparent courier delivery.</p>
                <div className="cta-buttons">
                    <Link to="/signup" className="btn-primary">Create Account</Link>
                    <Link to="/login" className="btn-primary">Login</Link>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default ContactPage;
