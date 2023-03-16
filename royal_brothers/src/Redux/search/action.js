import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "./actionType"
import axios from 'axios'


const url = 'https://royalbrothersapi.onrender.com/banglore'

export const getData = ()=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    axios.get(`${url}`)
    .then((res)=> {
        dispatch({
            type:GET_DATA_SUCCESS,
            payload:res.data
        })
        console.log(res);
    })
    .catch((e)=> dispatch({type:GET_DATA_FAILURE}))
    
}

