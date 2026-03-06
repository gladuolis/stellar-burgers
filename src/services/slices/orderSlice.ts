import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { getFeeds } from './feedSlice';
import { getProfileOrders } from './profileOrdersSlice';

type TOrderState = {
  orderRequest: boolean;
  orderModalData: TOrder | null;
  error: string | null;
};

const initialState: TOrderState = {
  orderRequest: false,
  orderModalData: null,
  error: null
};

const ORDERS_STORAGE_KEY = 'allOrders';

type TOrderWithUser = TOrder & {
  userEmail: string;
};

const updateOrderStatus = (orderId: string, dispatch: any) => {
  const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (!savedOrders) return;

  const orders = JSON.parse(savedOrders);
  const updatedOrders = orders.map((order: any) =>
    order._id === orderId ? { ...order, status: 'done' } : order
  );

  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updatedOrders));
  dispatch(getFeeds());
  dispatch(getProfileOrders());
};

export const orderBurger = createAsyncThunk(
  'order/orderBurger',
  async (data: string[], { getState, dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const state = getState() as any;
    const userEmail = state.user.user?.email || 'anonymous';

    const newOrder: TOrderWithUser = {
      _id: 'test_' + Date.now(),
      number: Math.floor(Math.random() * 10000),
      name: 'Космический бургер',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ingredients: data,
      userEmail
    };

    const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
    const orders = savedOrders ? JSON.parse(savedOrders) : [];
    const updatedOrders = [newOrder, ...orders];

    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updatedOrders));

    setTimeout(() => {
      updateOrderStatus(newOrder._id, dispatch);
    }, 300000);

    return newOrder;
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrderModal: (state) => {
      state.orderModalData = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderBurger.pending, (state) => {
        state.orderRequest = true;
        state.error = null;
      })
      .addCase(orderBurger.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderModalData = action.payload;
      })
      .addCase(orderBurger.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message || 'Ошибка заказа';
      });
  }
});

export const { clearOrderModal } = orderSlice.actions;
export default orderSlice.reducer;