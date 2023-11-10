import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    main: {
        width: '95%',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '360px',
        border: '2px solid lightgray',
        borderCollapse: 'collapse',
    },
})

function CourseList({ listCourses }) {
    return (
        <><table className={css(styles.main)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 && (
                <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                )}
                {listCourses.map((course) => (
                <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                ))}
                <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
            </tbody>
        </table>
        </>
    );
}

CourseList.defaultProps = {
    listCourses: [],
  };
  
  CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };

export default CourseList;
