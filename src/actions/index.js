import axios from "axios";

export function loadToilets(){
    return(dispatch)=>{
        return axios.get("https://toilets.freska.io/toilets").then((response)=>{
            dispatch(fetchToilets(response.data));
        })
    }
}

export function fetchToilets(toilet){
    return{
        type:"FETCH_TOILETS",
        toilet:toilet
    }
}