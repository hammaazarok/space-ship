// Actions
const START = 'space-ship/missions/START_LOADING_MISSIONS';
const LOAD = 'space-ship/missions/LOAD_MISSIONS';
const ADD_MEMBER = 'space-ship/missions/ADD_MEMBER';
const REMOVE_MEMBER = 'space-ship/missions/REMOVE_MEMBER';

const initialState = {
  missions: [{
    mission_id: 0, mission_name: 'appolo', description: 'fisrt trip landed on the moon', isMember: false,
  }],
  loading: false,
  error: null,
};
  // Reducer
export default function missionsReducer(state = initialState, action = {}) {
  const { value } = action;
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD:
      return {
        ...state,
        loading: false,
        error: value.error,
        missions: value,
      };
    case ADD_MEMBER:
      return {
        ...state,
        loading: false,
        error: value.error,
        items: [...state.items, value],
      };

    case REMOVE_MEMBER:
      return {
        ...state,
        loading: false,
        error: value.error,
        items: [...state.items, value],
      };

    default:
      return state;
  }
}

// Action Creators

export function startLoadingMessions(result) {
  return { type: START, value: result };
}

export function LoadMessions(result) {
  return { type: LOAD, value: result };
}

export function addMembertoMission(result) {
  return { type: ADD_MEMBER, value: result };
}

export function removeMembertoMission(result) {
  return { type: REMOVE_MEMBER, value: result };
}
