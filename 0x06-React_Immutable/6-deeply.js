/* eslint-disable linebreak-style */
import { fromJS } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const newPage1 = fromJS(page1);
  const newPage2 = fromJS(page2);
  return newPage1.mergeDeep(newPage2);
}
