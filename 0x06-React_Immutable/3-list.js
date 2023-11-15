/* eslint-disable linebreak-style */
import { fromJS } from 'immutable';

export function getListObject(array) {
  return fromJS(array);
}

export function addElementToList(list, element) {
  const newList = fromJS(list);
  return newList.concat(element);
}
