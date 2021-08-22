import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IAppState {
  selectedTopic: string;
}

const appState: IAppState = {
  selectedTopic: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState: appState,
  reducers: {
    selectTopic: (state: IAppState, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.selectedTopic = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const {selectTopic} = appSlice.actions;
