/* eslint-disable linebreak-style */
import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const result = Seq(grades)
    .filter(({ score }) => score >= 70)
    .map(({ firstName, lastName, ...rest }) => ({
      ...rest,
      firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
    }))
    .toObject();

  console.log(result);
}

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
};

printBestStudents(grades);
