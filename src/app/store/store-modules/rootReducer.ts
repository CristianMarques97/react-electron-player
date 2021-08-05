import { combineReducers } from 'redux';
import AuthReducer from './auth/AuthReducer';

export default combineReducers({
    auth: AuthReducer
});

export interface ActionProps {
    type: String,
    payload: any
}