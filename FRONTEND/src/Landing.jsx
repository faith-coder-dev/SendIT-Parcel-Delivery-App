import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import PublicFooter from "./components/PublicFooter";
import "./Landing.css";

const heroImages = [
  "https://media.istockphoto.com/id/1456999523/photo/portrait-of-black-man-worker-working-in-large-warehouse-retail-store-industry-factory-rack-of.jpg?s=612x612&w=0&k=20&c=pKO4drQuaHgvgGBfGVPhcxX8RBbJQDUSpV5d8qx9JmA=",
  "https://www.opentext.com/assets/images/products-solutions/solution-industry-category/opentext-image-is-logistics-and-transportation-en.jpg",
  "https://3.bp.blogspot.com/-B57Viipj0a4/U3nk8OXBh7I/AAAAAAAAGk4/NBHq_KcCYMY/s1600/_1-PVDU+(Large).jpg",
  "https://tse3.mm.bing.net/th/id/OIP.CxTg8G5MMcyTCy39TB3ALQHaDt?w=1200&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
];

const HERO_SWITCH_INTERVAL_MS = 6200;
const HERO_TRANSITION_MS = 2000;

const testimonials = [
  {
    name: "Amina N.",
    role: "Small Business Owner",
    quote:
      "SendIT made our same-day deliveries reliable. Customers now receive updates and trust our service more.",
  },
  {
    name: "Brian K.",
    role: "Frequent Sender",
    quote:
      "I can create orders in minutes and track every parcel from pickup to drop-off without calling support.",
  },
  {
    name: "Mercy W.",
    role: "Operations Manager",
    quote:
      "The admin tools and live tracking improved coordination across our drivers and reduced delays significantly.",
  },
];

const Landing = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [isHeroTransitioning, setIsHeroTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((current) => {
        const nextIndex = (current + 1) % heroImages.length;
        setPreviousImageIndex(current);
        setIsHeroTransitioning(true);
        return nextIndex;
      });
    }, HERO_SWITCH_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isHeroTransitioning) return;
    const timeout = setTimeout(() => {
      setIsHeroTransitioning(false);
    }, HERO_TRANSITION_MS);

    return () => clearTimeout(timeout);
  }, [isHeroTransitioning]);

  return (
    <div className="landing-container">
      <PublicNavbar />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-background-stack" aria-hidden="true">
          <div
            className={`hero-background hero-background-base${isHeroTransitioning ? " fade-out" : ""}`}
            style={{ backgroundImage: `url(${heroImages[previousImageIndex]})` }}
          />
          <div
            className={`hero-background hero-background-top${isHeroTransitioning ? " fade-in" : " visible"}`}
            style={{ backgroundImage: `url(${heroImages[activeImageIndex]})` }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>SendIT</h1>
          <p>
            Fast, reliable, and secure courier delivery — from pickup to doorstep.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">Login</Link>
            <Link to="/signup" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <h2>What is SendIT?</h2>
        <p>
          SendIT is a modern courier service that allows users to create parcel
          delivery orders, track them in real-time, and receive notifications as
          their parcels move through the delivery pipeline.
        </p>
        <p>
          Whether you are sending documents, packages, or heavy items, SendIT
          ensures fast, transparent, and secure deliveries across cities.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2>Core Features</h2>
        <p className="features-subtitle">
          Everything you need for seamless parcel delivery.
        </p>

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

      {/* MVP HIGHLIGHT */}
      <section className="mvp-section">
        <h2>What You Can Do with SendIT</h2>
        <div className="mvp-grid">
          <div className="mvp-card">Create an account and log in</div>
          <div className="mvp-card">Create a parcel delivery order</div>
          <div className="mvp-card">View order details and routes</div>
          <div className="mvp-card">Admins update order status & location</div>
          <div className="mvp-card">Live map with pickup & destination</div>
          <div className="mvp-card">Email notifications on status updates</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2>What customers say</h2>
        <p className="testimonials-subtitle">
          Trusted by individuals, businesses, and operations teams.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="pricing-section">
        <h2>Simple & Transparent Pricing</h2>
        <div className="pricing-cards-container">
          <div className="pricing-card">
            <p>Economy</p>
            <h3>KES 150</h3>
            <p>+ Distance (per km)</p>
            <p>+ Weight & Size Factors</p>
            <p className="pricing-note">
              Budget-friendly option for small items.
            </p>
            <Link to="/signup" className="btn-primary">Choose Plan</Link>
          </div>

          <div className="pricing-card">
            <p>Standard</p>
            <h3>KES 300</h3>
            <p>+ Distance (per km)</p>
            <p>+ Weight & Size Factors</p>
            <p className="pricing-note">
              Most popular for everyday deliveries.
            </p>
            <Link to="/signup" className="btn-primary">Start Sending Now</Link>
          </div>

          <div className="pricing-card">
            <p>Premium</p>
            <h3>KES 500</h3>
            <p>+ Distance (per km)</p>
            <p>+ Weight & Size Factors</p>
            <p className="pricing-note">
              Priority handling and faster delivery.
            </p>
            <Link to="/signup" className="btn-primary">Choose Plan</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Send Your First Parcel?</h2>
        <p>
          Join SendIT today and experience fast, reliable, and transparent
          courier delivery.
        </p>
        <div className="cta-buttons">
          <Link to="/signup" className="btn-primary">Create Account</Link>
          <Link to="/login" className="btn-primary">Login</Link>
        </div>
      </section>

      {/* FOOTER */}
      <PublicFooter />
    </div>
  );
};

export default Landing;
