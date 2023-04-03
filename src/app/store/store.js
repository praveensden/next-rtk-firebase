import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../../features/users/userSlice';
import thunk from 'redux-thunk';


export const store = configureStore({
    reducer: {
        usersReducer: usersReducer
    },
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)

})