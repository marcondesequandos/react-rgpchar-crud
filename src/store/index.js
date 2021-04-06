import {createStore , combineReducers} from 'redux';

import reducerPersonagem from './personagens/index'

const reducer = combineReducers({
    reducerPersonagem
})


export default createStore(reducer)