export const init = (ids) => {
  return {
    type: 'CheckItemsInit',
    payload: { ids }
  }
};

export const checkId = (id) => {
  return {
    type: 'CheckItemsCheckId',
    payload: { id }
  }
}