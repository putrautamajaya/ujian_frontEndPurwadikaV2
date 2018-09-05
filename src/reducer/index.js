import { combineReducers } from 'redux';
import loginAuthentication from './loginAuthentication';

export default combineReducers(
    {
        userLogin: loginAuthentication
    }
);