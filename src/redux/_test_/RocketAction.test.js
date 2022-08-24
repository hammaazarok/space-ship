import ActionTypes from '../rockets/ActionTypes';
import setRockect from '../rockets/RockectAction';

it('set rocket test', () => {
  const expected = {
    type: ActionTypes.SET_ROCKECTS,
    payload: { test: 1 },
  };
  expect(setRockect({ test: 1 })).toStrictEqual(expected);
});
