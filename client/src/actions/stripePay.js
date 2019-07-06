import axios from 'axios';


export const fetchUser = () => async dispatch => {
    console.log('TRYING TO CALL FETCH USER');
    const res = await axios.get('/api/current_user');
  console.log(res);
  
    dispatch({ type: 'FETCH_USER', data: res.data });
  };


export const stripePay = (token) =>{
    return dispatch =>{
        console.log('Stripe Action Creator')
        axios.post('/api/stripe', token)
        .then(res=>{
             console.log(res)
            dispatch({type: 'FETCH_USER', data : res.data})})
    }
}