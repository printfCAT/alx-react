/* eslint-disable linebreak-style */
import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const belowSeventy = seq.filter(([key, value]) => [key === 'score', value < 70]);

  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  belowSeventy.forEach((student) => {
    const firstName = student.find(([key]) => key === 'firstName');
    const lastName = student.find(([key]) => key === 'lastName');
    if (firstName && lastName) {
      const capitalFirst = capitalizeFirstLetter(firstName[1]);
      const capitalLast = capitalizeFirstLetter(lastName[1]);
      console.log(`${capitalFirst} ${capitalLast}`);
    }
  });
}

const grades = {
  1: {
    score: 55,
    firstName: 'guillaume',
    lastName: 'salva',
  },
};

printBestStudents(grades);
