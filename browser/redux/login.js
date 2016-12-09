import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SIGN_USER_UP = 'SIGN_USER_UP';

/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser = user => ({ type: SET_CURRENT_USER, user});
const signUserUp = user => ({type: SIGN_USER_UP, user});

/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.user

    case SIGN_USER_UP:
      return action.user

    default:
      return user;
  }

}

/* ------------       DISPATCHERS     ------------------ */

export const fetchUser = (email, password) => dispatch => {
  axios.post('/api/login', {
    email: email,
    password: password
  })
  .then(res => {
   console.log(res.data);
   dispatch(setCurrentUser(res.data))
  });
};

export const signUp = (email, password) => dispatch => {
  axios.post('/api/login/signUp', {
    email: email,
    password: password
  })
  .then(res => {
   console.log(res.data);
   dispatch(signUserUp(res.data));
   dispatch(setCurrentUser(res.data));
  });
}
