import React from "react";

const PublicFooter = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} SendIT Courier Services. All rights reserved.</p>
        </footer>
    );
};

export default PublicFooter;
