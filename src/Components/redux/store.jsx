import { createStore, combineReducers } from 'redux';
import { DrawerReducer } from './drawerReducer';

const reducer = combineReducers({
    drawerReducer: DrawerReducer, 
})

const store = createStore(reducer)

export default store