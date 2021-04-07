import {configureStore} from '@reduxjs/toolkit';
import reducerPersonagem from './personagens/index'


export default configureStore({
    reducer: {
    reducerPersonagem
    }
})


