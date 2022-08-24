import ActionTypes from './ActionTypes';

const initialState = [];
const rockectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKECTS:
      return payload;
    case ActionTypes.RESERVED_ROCKET:
      return state.map((rockect) => {
        if (rockect.id !== payload) {
          return rockect;
        }
        return { ...rockect, reserved: !rockect.reserved };
      });

    default: return state;
  }
};
export default rockectReducer;
