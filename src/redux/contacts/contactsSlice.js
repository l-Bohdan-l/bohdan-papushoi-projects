import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './operations'
// import { nanoid } from 'nanoid';

// import {    
//     persistReducer
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
const initialState = {
    contactsList: [],
    isLoading: false,
    error: null,
}


// async thunk
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
    reducers: {},
    extraReducers: {
        [fetchContacts.pending](state, action) {
            state.isLoading = true
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.contactsList = action.payload
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        [addContact.pending](state, action) {
            state.isLoading = true
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.contactsList = [...state.contactsList, action.payload]
        },
        [addContact.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        [deleteContact.pending](state, action) {
            state.isLoading = true
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload.id)
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})



// redux + persist
// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//       addContact: {
//           reducer(state, action) {
//               console.log('action', action.payload)
//             state.unshift(action.payload)
//           },
//           prepare(name, number) { 
//               return {
//                   payload: {
//                       id: nanoid(),
//                       name,
//                       number,                        
//                   },
//               }
//           },
//       },
//       deleteContact: (state, action) => {
//           console.log('action del', action.payload)  
//           return state.filter(contact => contact.id !== action.payload);
//       },
//     //   filterContacts: (state, action) => { 
//     //       console.log('action filter contacta', action.payload)  
//     //     //   return state.filter(contact => contact.name.toLowerCase().includes(action.payload))
//     //   },
//   },
// })
// const persistConfig = {
//   key: 'root',
//   storage,
// }

// export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

// Action creators are generated for each case reducer function
// export const {
//     // addContact,
//     // deleteContact
// } = contactsSlice.actions
