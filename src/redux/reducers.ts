import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";

const reducer = combineReducers({
  authSlice: authSlice,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;