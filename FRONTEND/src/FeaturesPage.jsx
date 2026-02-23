import React from "react";
import PublicNavbar from "./components/PublicNavbar";
import PublicFooter from "./components/PublicFooter";
import "./Landing.css";

const FeaturesPage = () => {
    return (
        <div className="landing-container info-page">
            <PublicNavbar />

            <section className="features-section info-main">
                <h2>Core Features</h2>
                <p className="features-subtitle">Everything you need for seamless parcel delivery.</p>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Create Orders</h3>
                        <p>Place delivery orders easily with item details and destinations.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Real-Time Tracking</h3>
                        <p>Track your parcel live on a map from pickup to delivery.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Order Management</h3>
                        <p>View, cancel, or update your delivery orders anytime.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Admin Control</h3>
                        <p>Admins can update order status and present parcel locations.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Smart Pricing</h3>
                        <p>Automatic price calculation based on distance, weight, and size.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Email Notifications</h3>
                        <p>Receive real-time email updates when your parcel status changes.</p>
                    </div>
                </div>
            </section>
            <PublicFooter />
        </div>
    );
};

export default FeaturesPage;
