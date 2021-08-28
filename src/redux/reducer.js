const user = {
  list: [],
  detail: null,
  title: '',
  nextPage: ''
};

const data = {
    user,
}

const reducer = (state = data, action) => {
    switch (action.type) {
     case  'SET_USER':
        return {
          ...state, // not needed here, but I add this since your production state will likely have more than just one key
          user: action.input
        };

      default:
        return state
   }
};
export default reducer;