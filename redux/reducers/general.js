import { ACTIONS } from './../actions/general'

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.get_data:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}