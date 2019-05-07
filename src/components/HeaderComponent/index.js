import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({ title }) => (
  <header>
    <span>{title}</span>
  </header>
);

HeaderComponent.propTypes = {
  title: PropTypes.string,
};

HeaderComponent.defaultProps = {
  title: 'RocketBook',
};

export default HeaderComponent;
