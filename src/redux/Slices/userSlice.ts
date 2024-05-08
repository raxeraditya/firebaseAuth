import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, actions: PayloadAction<any>) => {
      state.userData = actions.payload;
    },
  },
});

export const { setUserData } = UserSlice.actions;

export default UserSlice.reducer;
