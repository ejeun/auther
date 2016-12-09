import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SIGN_USER_UP = 'SIGN_USER_UP';
const LOG_USER_OUT = 'LOG_USER_OUT';

/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser = user => ({ type: SET_CURRENT_USER, user});
const signUserUp = user => ({type: SIGN_USER_UP, user});
const logUserOut = () => ({type: LOG_USER_OUT});

/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.user

    case SIGN_USER_UP:
      return action.user

    case LOG_USER_OUT:
      return {
        email: '',
        password: ''
      } ;

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
   console.log('api login data here', res);
   dispatch(setCurrentUser({email, password}));
  });
};

export const signUp = (email, password) => dispatch => {
  axios.post('/api/login/signUp', {
    email: email,
    password: password
  })
  .then(res => {
   console.log(res.data);
   dispatch(signUserUp({email, password}));
   dispatch(setCurrentUser({email, password}));
  });
}

export const logOut = () => dispatch => {
  axios.get('/api/login/logout', {

  })
  .then(res => {

   dispatch(logUserOut());
  });
}
