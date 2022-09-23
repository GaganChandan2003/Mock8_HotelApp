import axios from "axios";
import { UPLOAD_S ,UPLOAD_E,UPLOAD_R,GET_S,GET_R,GET_E,DELETE_E,DELETE_R,DELETE_S,FILTER_R,FILTER_S,FILTER_E,SORT} from "./action.type";
export const postApi=(data)=>(dispatch)=>
{
    dispatch({type:UPLOAD_R})
    return axios.post('https://hoteldatamock8.herokuapp.com/rooms',data)
    .then((r)=>{dispatch({type:UPLOAD_S})})
    .catch((err)=>{dispatch({type:UPLOAD_E})})
}

export const getApi=()=>(dispatch)=>
{
    dispatch({type:GET_R})
    axios.get('https://hoteldatamock8.herokuapp.com/rooms')
    .then((res)=>{dispatch({type:GET_S,payload:res.data})})
    .catch((err)=>{dispatch({type:GET_E})})
}

export const deleteApi=(id)=>(dispatch)=>
{
    dispatch({type:DELETE_R})
    return axios.delete(`https://hoteldatamock8.herokuapp.com/rooms/${id}`)
    .then((res)=>{dispatch({type:DELETE_S,payload:res.data})})
    .catch((err)=>{dispatch({type:DELETE_E})})
}

export const filterApi=(filter)=>(dispatch)=>
{
    dispatch({type:FILTER_R})
    axios.get(`https://hoteldatamock8.herokuapp.com/rooms?category=${filter}`)
    .then((res)=>{dispatch({type:FILTER_S,payload:res.data})})
    .catch((err)=>{dispatch({type:FILTER_E})})
}

export const sortApi=(sort)=>(dispatch)=>
{
    dispatch({type:SORT,payload:sort})
}