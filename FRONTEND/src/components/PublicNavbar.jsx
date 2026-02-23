import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/who-are-you", label: "Who Are You" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
];

const PublicNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="landing-navbar">
            <div className="landing-navbar-inner">
                <Link to="/" className="brand-logo">SendIT</Link>

                <button
                    type="button"
                    className="landing-menu-toggle"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="public-main-navigation"
                    onClick={toggleMenu}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav
                    id="public-main-navigation"
                    className={`landing-nav-links${isMobileMenuOpen ? " open" : ""}`}
                    aria-label="Main navigation"
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default PublicNavbar;
