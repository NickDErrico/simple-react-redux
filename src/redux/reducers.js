let initialState = 0

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state;
  }
}