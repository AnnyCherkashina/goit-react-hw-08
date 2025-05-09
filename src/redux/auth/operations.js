import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi, clearToken, setToken } from "../../config/Api_auth";

export const registerThunk = createAsyncThunk(
    `auth/register`,
    async (credentials, thunkAPI) => {
        try {
            const { data } = await authApi.post(`users/signup`, credentials);
            setToken(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            const { data } = await authApi.post(`users/login`, credentials);
            setToken(data.token);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async (_, thunkApi) => {
        try {
            await authApi.post("users/logout");
            clearToken();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const refreshThunk = createAsyncThunk(
    "auth/refresh",
    async (_, thunkApi) => {
        const savedToken = thunkApi.getState().auth.token;
        if (!savedToken) {
            return thunkApi.rejectWithValue("Unable to fetch user");
        }
        setToken(savedToken);
        try {
            const { data } = await authApi.get(`users/current`);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);