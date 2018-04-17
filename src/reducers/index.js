let defaultState={
    toilet: []
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="FETCH_TOILETS"){
        return{
            ...state,
            toilet:action.toilet
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;