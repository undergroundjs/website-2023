import React from 'react';
import { Link } from 'gatsby';

const headerStyle = {
    display: "flex",
    padding: "8px 16px",
}

const headingStyle = {
    flex: "0 0 auto",
    fontWeight: 600,
    padding: "8px 16px",
    textDecoration: "none",
}

const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            <Link to="/" style={headingStyle}>UndergroundJS</Link>
        </header>
    );
};

export default Header;