import axios from 'axios';

export const submitSurvey =(fields)=> async dispatch=>{
 try{ console.log('CALLING SUBMIT SURVEY ACTION')
  const res = await axios.post('/api/surveys', fields);
  console.log(res.data);
  dispatch({type : 'POST_SURVEYS', data : res.data}); }
  catch(err){console.log(err.response.data)}

  
}


export const fetchSurveys =()=> async dispatch=>{
  const res = await axios.get('/api/surveys');
  dispatch({type : 'FETCH_SURVEYS', data : res.data});
}

export const fetchUser = () => async dispatch => {
    console.log('TRYING TO CALL FETCH USER');
    const res = await axios.get('/api/current_user');
  console.log(res);
  
    dispatch({ type: 'FETCH_USER', data: res.data });
  };


export const stripePay = (token, amount) =>{
  const pay = {
    token,
    amount
  }
    return dispatch =>{
        console.log('Stripe Action Creator')
        axios.post('/api/stripe', pay)
        .then(res=>{
             console.log(res)
            dispatch({type: 'FETCH_USER', data : res.data})})
    }
}