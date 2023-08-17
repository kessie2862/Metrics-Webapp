import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategory: null,
  filteredCategories: [],
  status: 'idle',
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch('https://api.coinstats.app/public/v1/coins');
    const data = await response.json();
    return data.coins;
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    filterCategories: (state, action) => {
      const filterValue = action.payload.toLowerCase();
      state.filteredCategories = state.categories.filter((category) => category
        .name.toLowerCase().includes(filterValue));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
        state.filteredCategories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectCategory, filterCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
