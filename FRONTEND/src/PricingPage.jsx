import React from "react";
import { Link } from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import PublicFooter from "./components/PublicFooter";
import "./Landing.css";

const PricingPage = () => {
    return (
        <div className="landing-container info-page">
            <PublicNavbar />

            <section className="pricing-section info-main">
                <h2>Simple & Transparent Pricing</h2>
                <div className="pricing-cards-container">
                    <div className="pricing-card">
                        <p>Economy</p>
                        <h3>KES 150</h3>
                        <p>+ Distance (per km)</p>
                        <p>+ Weight & Size Factors</p>
                        <p className="pricing-note">Budget-friendly option for small items.</p>
                        <Link to="/signup" className="btn-primary">Choose Plan</Link>
                    </div>

                    <div className="pricing-card">
                        <p>Standard</p>
                        <h3>KES 300</h3>
                        <p>+ Distance (per km)</p>
                        <p>+ Weight & Size Factors</p>
                        <p className="pricing-note">Most popular for everyday deliveries.</p>
                        <Link to="/signup" className="btn-primary">Start Sending Now</Link>
                    </div>

                    <div className="pricing-card">
                        <p>Premium</p>
                        <h3>KES 500</h3>
                        <p>+ Distance (per km)</p>
                        <p>+ Weight & Size Factors</p>
                        <p className="pricing-note">Priority handling and faster delivery.</p>
                        <Link to="/signup" className="btn-primary">Choose Plan</Link>
                    </div>
                </div>
            </section>
            <PublicFooter />
        </div>
    );
};

export default PricingPage;
