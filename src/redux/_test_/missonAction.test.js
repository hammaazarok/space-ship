import { LoadMessions } from '../missions/missions';

const LOAD = 'space-ship/missions/LOAD_MISSIONS';
it('load missions test', () => {
  const expected = { type: LOAD, value: [{ test: true }] };
  expect(LoadMessions([{ test: true }])).toStrictEqual(expected);
});
