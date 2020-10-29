function reducer(state, action) {
  //useSelector ve UseDispatch ile baglantilidir
  // state storedan gelir
  switch (action.type) {
    case 'INCREASE_COUNTER':
      state.counter = state.counter + 1;

      return {...state};

    case 'DECREASE_COUNTER':
      state.counter = state.counter - 1;
      return {...state}; //to update

    case 'SET_USERNAME':
      state.userName = action.payload.newUserName;
      return {...state};

    default:
      return state;
  }
}

export {reducer};
// tum functionlar burada tanimlanir
//stordaki state guncelemeleri burda yapilir
