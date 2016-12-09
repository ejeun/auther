import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';

/* ------------   ACTION CREATORS     ------------------ */
const setCurrentUser = user => ({ type: SET_CURRENT_USER, user});
/* ------------       REDUCER     ------------------ */
export default function reducer (user = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
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
