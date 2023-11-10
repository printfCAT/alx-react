import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  thColspan2: {
    textAlign: 'center',
  },
  th: {
    textAlign: 'left',
    borderTop: '2px solid lightgray',
    borderBottom: '2px solid lightgray',
  },
  td: {
    textAlign: 'left',
  },
});

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null
}) {
  let rowStyles;
  let thStyles;

  if (isHeader) {
    rowStyles = css(styles.headerRow);
    thStyles = textSecondCell === null ? css(styles.thColspan2) : css(styles.th);
  } else {
    rowStyles = css(styles.defaultRow);
    thStyles = css(styles.td);
  }

  return (
    <tr className={rowStyles}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={thStyles}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={thStyles}>{textFirstCell}</th>
            <th className={thStyles}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

  CourseListRow.propTypes = {
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

  export default CourseListRow;
