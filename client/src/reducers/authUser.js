const User = (state={surveys:[], surveyPosted:[]}, action)=>{
    switch(action.type){
        case 'FETCH_USER' : 
        console.log(action);
        return {
            ...state,
           user : action.data
        }


        case 'FETCH_SURVEYS' :
            console.log(action.data);
            return {
                ...state,
               surveys : action.data
            }

            case 'POST_SURVEYS' :
                console.log(action.data);
                return {
                    ...state,
                   surveyPosted : [...state.surveyPosted, action.data]
                }

        default :
        return state;
    }
}

export default User;