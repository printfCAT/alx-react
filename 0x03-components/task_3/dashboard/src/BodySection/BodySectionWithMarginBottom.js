import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
    render() {
        return(
            <div className='dodySectionWithMargin'>
                <BodySection {...this.props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.defaultProps = {
    title: '',
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
}

export default BodySectionWithMarginBottom;
