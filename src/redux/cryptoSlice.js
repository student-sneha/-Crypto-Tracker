import { createSlice } from "@reduxjs/toolkit";
import { cryptoAssets } from "../utils/sampleData";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    assets: cryptoAssets
  },
  reducers: {
    updateAssets: (state, action) => {
      state.assets = action.payload;
    }
  }
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
