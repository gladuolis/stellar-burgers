import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TOrder, TOrdersData } from '@utils-types';

type TFeedState = {
  orders: TOrder[];
  total: number;
  totalToday: number;
  isLoading: boolean;
  error: string | null;
};

const initialState: TFeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  isLoading: false,
  error: null
};

const ORDERS_STORAGE_KEY = 'allOrders';

export const getFeeds = createAsyncThunk('feed/getFeeds', async () => {
  const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
  const orders = savedOrders ? JSON.parse(savedOrders) : [];

  const today = new Date().toDateString();
  const totalToday = orders.filter(
    (o: TOrder) => new Date(o.createdAt).toDateString() === today
  ).length;

  return {
    orders,
    total: orders.length,
    totalToday
  } as TOrdersData;
});

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    refreshFeed: (state) => {
      state.isLoading = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeeds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFeeds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.orders;
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
      })
      .addCase(getFeeds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка загрузки ленты';
      });
  }
});

export const { refreshFeed } = feedSlice.actions;
export default feedSlice.reducer;