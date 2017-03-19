import React, { PropTypes } from 'react';

const Header = ({ heading }) => {
    return ( < header > < h1 > { heading } < /h1>   < /header > );
};

Header.propTypes = {
    heading: PropTypes.string.isRequired
};

export default Header;
