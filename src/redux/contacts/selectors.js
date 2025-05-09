import { createSelector } from "@reduxjs/toolkit";

import { selectFilter } from "../filters/slice";
import { selectContacts } from "./contactsSlice";

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