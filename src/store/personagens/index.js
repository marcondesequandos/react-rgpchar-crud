const INICIAL_STATE = []


export default function reducerPersonagem(state = INICIAL_STATE, action)
{
    const {type , payload} = action
    
        switch(type)
        {
            case "ADD_CHAR":
                return [...state , payload]
            case "GET_ALL_CHARS":                
                return [...payload]
            case "GET_CHAR" :
            case "POST_CHAR" :                
            case "EDIT_CHAR":
            case "REMOVE_CHAR":
            default : 
                return state
    
    
        }


}

export const actions = {
    add : (char)=>({
        payload : char,
        type : "ADD_CHAR"
    }),
    postChar : (char)=>({
        payload : char,
        type : "POST_CHAR"
    }),
    getAllChars : (chars)=>({
        payload : chars,
        type : "GET_ALL_CHARS"
    }),
    getChar : (char)=>({
        payload : char,
        type : "GET_CHAR"
    }),
    remove : (char)=>({
        payload : char,
        type : "REMOVE_CHAR"
    }),
    edit : (char)=>({
        payload : char,
        type : "EDIT_CHAR"
    }),
}