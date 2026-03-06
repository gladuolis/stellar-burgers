import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type TProfileOrdersState = {
  orders: TOrder[];
  isLoading: boolean;
  error: string | null;
};

const initialState: TProfileOrdersState = {
  orders: [],
  isLoading: false,
  error: null
};

const ORDERS_STORAGE_KEY = 'allOrders';

export const getProfileOrders = createAsyncThunk(
  'profileOrders/getAll',
  async (_, { getState }) => {
    const state = getState() as any;
    const userEmail = state.user.user?.email;

    const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
    const allOrders = savedOrders ? JSON.parse(savedOrders) : [];

    const userOrders = userEmail
      ? allOrders.filter((order: any) => order.userEmail === userEmail)
      : [];

    return userOrders;
  }
);

const profileOrdersSlice = createSlice({
  name: 'profileOrders',
  initialState,
  reducers: {
    refreshProfileOrders: (state) => {
      state.isLoading = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProfileOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getProfileOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка загрузки истории заказов';
      });
  }
});

export const { refreshProfileOrders } = profileOrdersSlice.actions;
export default profileOrdersSlice.reducer;