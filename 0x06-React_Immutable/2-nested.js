/* eslint-disable linebreak-style */
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const newObject = fromJS(object);
  return newObject.getIn(array);
}
