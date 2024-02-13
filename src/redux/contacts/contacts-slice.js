import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  items: [],
  isLoading: false,
  error: null
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchContactsLoading: (state) => {
      state.isLoading = true;
    },
    fetchContactsSuccess: (state, {payload}) => {
      state.isLoading = false
      state.items = payload
    },
    fetchContactsError: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
    addContact: {
      reducer: (state, { payload }) => {
         state.push(payload)
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data
          }
        }
      }
    },
    deleteContact: (state, { payload }) => state.filter(item => item.id !== payload),

  }
})

export const { addContact, deleteContact,fetchContactsLoading,fetchContactsSuccess,fetchContactsError } = contactsSlice.actions;

export default contactsSlice.reducer;
