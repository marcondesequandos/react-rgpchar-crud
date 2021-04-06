const INICIAL_STATE = [
    {
        id : 1,
        nome : "Frank Reeves",
        arquetipo: "Explorador",
        alinhamento: "Caótico e Bom",
        ocupacao: "Artista de Rua/Taverna",
        genero: "Masculino",
        raca: "Humano"
    },
    {
        id : 2 ,
        nome: "Benedict Pikienko Sprecher",
        arquetipo: "Sábio",
        alinhamento: "Neutro",
        ocupacao: "Artista Circense",
        genero: "Masculino",
        raca: "Elfo"
    },
    {
        id : 3 ,
        nome: "Ethan Karthis",
        arquetipo: "Herói",
        alinhamento: "Leal e Bom",
        ocupacao: "Soldado",
        genero: "Masculino",
        raca: "Humano"
    }
]


export default function reducerPersonagem(state = INICIAL_STATE, action)
{
    const {type , payload} = action
    
        switch(type)
        {
            case "ADD_CHAR":
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
    remove : (char)=>({
        payload : char,
        type : "REMOVE_CHAR"
    }),
    edit : (char)=>({
        payload : char,
        type : "EDIT_CHAR"
    }),
}