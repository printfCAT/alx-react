/* eslint-disable linebreak-style */
import Map from 'immutable';

export default function accessImmutableObject(object, array) {
  const newObject = Map(object);
  return newObject.getIn(array);
}
