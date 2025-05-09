import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./operations";

const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const initialState = {
    contacts: initialContacts,
    isLoading: false,
    isError: null,
};

const slice = createSlice({
    name: "contacts",
    initialState,
    selectors: {
        selectContacts: (state) => state.contacts,
        selectIsLoading: (state) => state.isLoading,
        selectIsError: (state) => state.isError,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = payload;
            })
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            })

            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.contacts = state.contacts.filter((item) => item.id !== payload);
                state.isLoading = false;
            })

            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.contacts.push(payload);
                state.isLoading = false;
            });
    },
});

export const contactsReducer = slice.reducer;
export const { isLoading, isError } = slice.actions;
export const { selectContacts, selectIsLoading, selectIsError } =
    slice.selectors;