import { configActionType } from './action'

const configInitialState = {
  baseApiUrl: null,
}

export default function reducer(state = configInitialState, action) {
  switch (action.type) {
    case configActionType.SET_CONFIG:
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
}
