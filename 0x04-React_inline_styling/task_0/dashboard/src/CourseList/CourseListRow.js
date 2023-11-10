import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#f5f5f5ab'
  },
  color2: {
    backgroundColor: '#deb5b545'
  }
})

function CourseListRow({
    isHeader = false,
    textFirstCell,
    textSecondCell = null
  }) {
    return (
      <tr className={`${css(styles.color)}`}>
        {isHeader ? (
          textSecondCell === null ? (
            <th colSpan={2} className={`${css(styles.color2)}`}>{textFirstCell}</th>
          ) : (
            <>
              <th className={`${css(styles.color2)}`}>{textFirstCell}</th>
              <th className={`${css(styles.color2)}`}>{textSecondCell}</th>
            </>
          )
        ) : (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        )}
      </tr>
    );
  }

  CourseListRow.propTypes = {
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

  export default CourseListRow;
