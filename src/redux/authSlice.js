import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
        prepareHeaders: (headers, { getState }) => {
        const token = getState().credentials.token
        if (token) {
        headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),
    register: builder.mutation({
      query: (user) => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),
    getCurrentUser: builder.query({
      query: () => `/users/current`,
      providesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useLoginMutation, useGetCurrentUserQuery, useLogoutMutation } = authApi

const initialState = {
  token: null,
  name: null,
  email: null,
  isLoggedIn: false,
  isRefreshing: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {      
      state.token = action.payload.token;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.isLoggedIn = true;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    clearToken: (state) => { 
      state.token = null;
    },
    setRefetchedCredentials: (state, action) => { 
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    clearCredentials: (state) => { 
      state.name = null;
      state.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { setCredentials, setIsLoggedIn, clearToken, setRefetchedCredentials, clearCredentials } = authSlice.actions;