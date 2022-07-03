import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  status: "idle",
  error: null,
};

export const fetchGenres = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=685113a1507bae54f2638e286629cad1&language=en-US"
  );
  return response.data.genres;
});

const insightSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export const selectAllGenres = (state) => state.insight.genres;
export default insightSlice.reducer;
