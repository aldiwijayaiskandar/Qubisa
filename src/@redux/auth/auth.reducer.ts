import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IAuthState {
  token: string;
}

const authState: IAuthState = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    login: (state: IAuthState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state: IAuthState, action: PayloadAction<any>) => {
      state.token = '';
    },
  },
});

export const authReducer = authSlice.reducer;
export const {logout, login} = authSlice.actions;
