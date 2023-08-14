import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/user', data);
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  });

  
 export const getUsers = createAsyncThunk('getUsers', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/jobs');
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  });