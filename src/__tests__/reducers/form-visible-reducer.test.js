import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(undefined, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(formVisibleReducer(undefined, { type: 'TOGGLE_FORM' })).toEqual(true);
  });

});