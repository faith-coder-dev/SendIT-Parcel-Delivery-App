import React from "react";
import { Link } from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import PublicFooter from "./components/PublicFooter";
import "./Landing.css";

const NotFoundPage = () => {
    return (
        <div className="landing-container info-page">
            <PublicNavbar />
            <section className="cta-section info-main">
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <div className="cta-buttons">
                    <Link to="/" className="btn-primary">Back to Home</Link>
                    <Link to="/signup" className="btn-primary">Create Account</Link>
                </div>
            </section>
            <PublicFooter />
        </div>
    );
};

export default NotFoundPage;
