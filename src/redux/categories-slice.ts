import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const getCategories: any = createAsyncThunk<Category[], void>(
  'categories/getCategories',
  async () => {
    const response = await axios.get<Category[]>(`${BASE_URL}/new`);
    return response.data;
  }
);


type CategoryState = {
  list: Category[];
  isLoading: boolean;
};

const initialState: CategoryState = {
  list: [],
  isLoading: false,
};

type Category = {
  name: string;
  slug: string;
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.list = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setLoading, setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
