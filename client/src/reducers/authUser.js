const User = (state={}, action)=>{
    switch(action.type){
        case 'FETCH_USER' : 
        console.log(action);
        return action.data;

        default :
        return state;
    }
}

export default User;