import _ from 'lodash';

const nameInitialState = {
  ids: null, //array of id
  checkList: {}
}

export default (state = nameInitialState, action) => {
  switch (action.type) {
    case 'CheckItemsInit':
      return { ...state, ids: action.payload.ids}
    case 'CheckItemsCheckId': {
      const checkList = _.clone(state.checkList);
      checkList[action.payload.id] = true;
      return { ...state, checkList}
    }
      
    default:
      return state;
  };
}
