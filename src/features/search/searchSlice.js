import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

const initialState = {
  keywords: "",
  type: "movie",
  results: [],
  totalResults: 0,
  currentPage: 1,
  totalPages: 0,
  status: "idle",
  error: null,
};

export const fetchSearchContents = createAsyncThunk(
  "feed/search",
  async ({ keywords, page, type }) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/${type}?api_key=685113a1507bae54f2638e286629cad1&language=en-US&query=${keywords}&page=${page}&include_adult=false`
    );
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setNextPage: (state, action) => {
      state.currentPage = state.currentPage + 1;
    },
    setPrevPage: (state, action) => {
      state.currentPage = state.currentPage - 1;
    },
    setManualPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchContents.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchSearchContents.fulfilled, (state, action) => {
      const { results, total_pages, total_results, page } = action.payload;
      state.currentPage = page;
      state.results = results;
      state.totalPages = total_pages;
      state.totalResults = total_results;
      state.error = null;
      state.status = "idle";
    });
    builder.addCase(fetchSearchContents.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const getSearchState = (state) => state.search;
export const { setKeywords, setNextPage, setPrevPage, setManualPage } =
  searchSlice.actions;
export default searchSlice.reducer;
