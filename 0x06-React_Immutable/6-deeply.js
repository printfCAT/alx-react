/* eslint-disable linebreak-style */
import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const newPage1 = Map(page1);
  const newPage2 = Map(page2);
  return newPage1.mergeDeep(newPage2);
}
