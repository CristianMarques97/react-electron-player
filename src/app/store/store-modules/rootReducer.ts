import { combineReducers } from 'redux';
import StoresReducer from './stores/StoresReducer';

export default combineReducers({
    stores: StoresReducer
});

export interface ActionProps {
    type: String,
    payload: any
}