import { db } from '@/firebase/firebaseConfig';
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { collection, addDoc,getDoc, doc, getDocs } from "firebase/firestore"; 

const initialState = {
  users: [],
};
const getAllUsers = createAsyncThunk(
    async () => {
        const users = []
              const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                users.push(doc.data())
                });
        return users;
    }
)
export const userSlice = createSlice({
    name: 'usersSlice',
    initialState:initialState,
    reducers: {
        addUsers: async(state, action) => {
          await addDoc(collection(db, "users"),action.payload );
        },
        getUsers:async (state) => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                 state?.users?.push([...state.users,doc.data])
                console.log(doc.id, " => ", doc.data());
   });

        },
        updateUser: (state, action) => {
            console.log(action.payload);
            const data = current(state).filter((item)=>item.id === action.payload.id)
            console.log(current(state), 'got the state')
            console.log(data,'ads');
        }
    },
    extraReducers: builder => {
        builder.addCase((getAllUsers.fulfilled, (state, action) => {
            console.log(state);
      }));

    }
})


export const { addUsers,getUsers,updateUser,deleteUser } = userSlice.actions;
export default    userSlice.reducer