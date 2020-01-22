export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_FORM':
    return !state;
  default:
    return state;
  }
};