import React from "react";
import { Link } from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import PublicFooter from "./components/PublicFooter";
import "./Landing.css";

const WhoAreYouPage = () => {
    return (
        <div className="landing-container info-page">
            <PublicNavbar />

            <section className="role-section info-main">
                <h2>Who are you?</h2>
                <p>Select your role to get the best experience.</p>
                <div className="role-cards">
                    <Link to="/login" className="role-card">
                        <h3>User</h3>
                        <p>Send parcels, track deliveries, and manage your orders.</p>
                    </Link>
                    <Link to="/login" className="role-card">
                        <h3>Driver</h3>
                        <p>Deliver parcels, update locations, and manage assignments.</p>
                    </Link>
                    <Link to="/login" className="role-card">
                        <h3>Admin</h3>
                        <p>Manage orders, update statuses, and oversee operations.</p>
                    </Link>
                </div>
            </section>
            <PublicFooter />
        </div>
    );
};

export default WhoAreYouPage;
