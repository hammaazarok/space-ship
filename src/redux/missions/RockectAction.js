import ActionTypes from './ActionTypes';

const setRockect = (rockects) => ({
  type: ActionTypes.SET_ROCKECTS,
  payload: rockects,
});
export default setRockect;
