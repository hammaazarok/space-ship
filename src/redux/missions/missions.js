// Actions
const START = 'space-ship/missions/START_LOADING_MISSIONS';
const LOAD = 'space-ship/missions/LOAD_MISSIONS';
const ADD_REMOVE_MEMBER = 'space-ship/missions/ADDREMOVE_MEMBER';

const initialState = {
  missions: [],
  loading: true,
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
    case ADD_REMOVE_MEMBER:
      return {
        ...state,
        loading: false,
        error: value.error,
        missions: state.missions.map((mission) => {
          const prevValue = mission.isMember;
          if (mission.mission_id !== value) return mission;
          return { ...mission, isMember: !prevValue };
        }),
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

export function addremoveMembertoMission(result) {
  return { type: ADD_REMOVE_MEMBER, value: result };
}
