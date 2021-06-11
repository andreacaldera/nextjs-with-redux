export const configActionType = {
  SET_CONFIG: 'SET_CONFIG',
}

export const setConfig = (payload) => (dispatch) => {
  return dispatch({ type: configActionType.SET_CONFIG, payload })
}
