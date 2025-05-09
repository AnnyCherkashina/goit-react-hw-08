import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";
import { selectFilter } from "./filtersSlice";

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, searchStr) => {
        if (contacts !== undefined) {
            return contacts.filter((contact) =>
                contact.name.toLowerCase().includes(searchStr.trim().toLowerCase())
            );
        }
    }
);