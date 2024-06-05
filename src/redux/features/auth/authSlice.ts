import { RootState } from "@/redux/app/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  user: null | { email: string; userId: string };
  token: null | string;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  token: null,
};

export const counterSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ email: string; userId: string } | null>
    ) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, setUser, logOut } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user;

export const selectToken = (state: RootState) => state.auth.token;

export default counterSlice.reducer;
