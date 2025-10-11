import { authService } from '@/services/auth.service'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import store from 'store'

const initialState = {
  isUserLoggedIn: store.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY}`) ? true : false,
  loggedInUser: {},
  loading: false,
}

export const setLoggedInUser = createAsyncThunk('setLoggedInUser', async () => {
  return await authService.getMe()
})

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    setAuthToken: (state, action) => {
      store.set(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY}` || '', action.payload)
      state.isUserLoggedIn = true
      window.location.replace('/home')
    },

    destroyAuthSession: (state) => {
      store.clearAll()
      state.isUserLoggedIn = false
      state.loggedInUser = {}
      window.location.replace('/login')
    },

    setMobileNumber: (state, action) => {
      store.set('mobileNumber', action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLoggedInUser.fulfilled, (state, action) => {
      state.loggedInUser = action.payload
    })
  }
})

export const { setAuthToken, destroyAuthSession, setMobileNumber } = sessionSlice.actions

export default sessionSlice.reducer