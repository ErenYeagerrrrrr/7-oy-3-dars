const initealState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null
}
const authReducer = (state = initealState, action) => {
  if (action.type === "login") {
    localStorage.setItem("token", action.payload);    
    
    return {
      ...state,
      token: action.payload
    };
  }
  return state
}

export default authReducer