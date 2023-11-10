import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({
    isHeader = false,
    textFirstCell,
    textSecondCell = null
  }) {
    const rowStyle = {
      backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    };

    return (
      <tr style={rowStyle}>
        {isHeader ? (
          textSecondCell === null ? (
            <th colSpan={2}>{textFirstCell}</th>
          ) : (
            <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
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
