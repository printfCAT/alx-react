import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    body: {
        marginBottom: '40px',
        width: '100%',
    }
})

class BodySectionWithMarginBottom extends Component {
    render() {
        return(
            <div className={css(styles.body)}>
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
