import { createSlice } from "@reduxjs/toolkit";

export interface RootState {
  isMenuOpen: boolean,
}

const initialState = {
  isMenuOpen: false,
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleMenuState: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    }
  }
})

export const { toggleMenuState } = globalSlice.actions
export default globalSlice.reducer