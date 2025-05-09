import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../config/Api_auth";

// axios.defaults.baseURL = `https://66224c7827fcd16fa6c96b50.mockapi.io/`;

//завантаження даних

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await authApi.get(`contacts`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//видалення даних

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const { data } = await authApi.delete(`contacts/${id}`);
            return data.id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//додавання даних

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const { data } = await authApi.post(`contacts`, contact);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);