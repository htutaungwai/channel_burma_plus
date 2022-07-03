import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  tv: [],
  moviesStatus: "idle",
  tvStatus: "idle",
  genres: [],
};

// To fetch movies
export const fetchMovies = createAsyncThunk(
  "feed/fetchMovies",
  async (time) => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${time}?api_key=685113a1507bae54f2638e286629cad1`
    );
    return resp.data.results;
  }
);

// To fetch TV Series
export const fetchTV = createAsyncThunk("feed/fetchSerieses", async (time) => {
  const response = await axios.get(`
    https://api.themoviedb.org/3/trending/tv/${time}?api_key=685113a1507bae54f2638e286629cad1
    `);

  return response.data.results;
});

export const fetchGenres = createAsyncThunk("feed/fetchGenres", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=685113a1507bae54f2638e286629cad1&language=en-US"
  );
  return response.data.genres;
});

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.moviesStatus = "idle";
    });
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.moviesStatus = "pending";
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.moviesStatus = "error";
      state.moviesError = action.payload;
    });
    builder.addCase(fetchTV.fulfilled, (state, action) => {
      state.tv = action.payload;
      state.tvStatus = "idle";
    });
    builder.addCase(fetchTV.pending, (state, action) => {
      state.tvStatus = "pending";
    });
    builder.addCase(fetchTV.rejected, (state, action) => {
      state.tvStatus = "error";
      state.tvStatus = action.payload;
    });

    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export const getAllMovies = (state) => state.feed.movies;
export const getMoviesStatus = (state) => state.feed.moviesStatus;
export const getAllTV = (state) => state.feed.tv;
export const getTVStatus = (state) => state.feed.tvStatus;
export const getAllGenres = (state) => state.feed.genres;
export default feedSlice.reducer;
