
const nameInitialState = {
  tasks: null
}

export default (state = nameInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
}
