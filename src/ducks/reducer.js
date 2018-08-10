let initialState = {
  username: "",
  profile: "",
  userId: 0
}

const GET_USERNAME = 'GET_USERNAME'
const GET_PROFILE = 'GET_PROFILE'
const GET_USERID = 'GET_USERID'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    case GET_USERID: 
      return {
        ...state,
        userId: action.payload
      }
    default:
      return state
  }
}

export function getUsername(username) {
  return {
    type: GET_USERNAME,
    payload: username
  }
}

export function getProfile(profile){
  return {
    type: GET_PROFILE,
    payload: profile
  }
}

export function getUserid(id){
  return {
    type: GET_USERID,
    payload: id
  }
}
