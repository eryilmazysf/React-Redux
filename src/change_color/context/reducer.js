const reducer = (state, action) => {
  switch (action.type) {
    case 'pink':
      state.color = 'pink';
      return {...state};
    case 'red':
      state.color = 'red';
      return {...state};
    case 'yellow':
      state.color = 'yellow';
      return {...state};
    case 'black':
      state.color = 'black';
      return {...state};
    default:
      return state;
  }
};
export {reducer};
