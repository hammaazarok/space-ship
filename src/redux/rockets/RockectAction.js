import ActionTypes from './ActionTypes';

const setRockect = (rockects) => ({
  type: ActionTypes.SET_ROCKECTS,
  payload: rockects,
});

export const bookRocket = (id) => ({
  type: ActionTypes.RESERVED_ROCKET,
  payload: id,
});

export default setRockect;
