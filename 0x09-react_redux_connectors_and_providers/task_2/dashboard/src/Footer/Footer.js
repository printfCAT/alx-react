import { getFullYear, getFooterCopy } from '../utils/utils.js';
import React from 'react';
import './Footer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

function Footer(user) {
  return (
  <footer className="Footer">
    <p>
      <i>Copyright {getFullYear()} - {getFooterCopy()}</i>
    </p>
    {user && <a href='#'>Contact us</a>}
  </footer>
  );
};

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(Footer);
