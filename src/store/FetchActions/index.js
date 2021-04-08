import api from '../../services/api'
import {actions} from '../personagens'


export const getAllChars = ()=> {
    return (dispatch)=>{
        api.get('/personagens')
        .then((res)=> dispatch(actions.getAllChars(res.data)))
        .catch(console.log)

    }
}
// export const getChar = (char)=> {
//     return (dispatch)=>{
//         api.get('/personagens'+char.id, char)
//         .then((res)=> dispatch(actions.getChar(res.data)))
//         .catch(console.log)

//     }
// }


export const insertChar = (char)=> {
    return (dispatch)=>{
        api.post('/personagens' , char)
        .then((res)=> dispatch(actions.add(res.data)))
        .catch(console.log)
    }
}

export const changeChar = (char)=>
{
    return (dispatch) =>
      {
        api.put('/personagens/'+char.id , char)
        .then((res) =>{ dispatch(actions.edit(res.data))})
        .catch(console.log)                
      }
}


export const deleteChar = (char)=>
{
    return (dispatch) =>
      {
        api.delete('/personagens/'+char)
        .then((res) =>{ dispatch(actions.remove(res.data))})
        .catch(console.log)
        window.location.reload(false)
                 
      }
}