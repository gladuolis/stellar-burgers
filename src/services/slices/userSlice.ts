import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';

type TUserState = {
  user: TUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  isInit: boolean;
};

const initialState: TUserState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  isInit: false
};

export const getUser = createAsyncThunk('user/getUser', async () => {
  const savedUser = localStorage.getItem('mockUser');
  if (savedUser) {
    return JSON.parse(savedUser);
  }
  throw new Error('Не авторизован');
});

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ email, name, password }: { email: string; name: string; password: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const user = { email, name };
    localStorage.setItem('mockUser', JSON.stringify(user));
    return user;
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const user = { email, name: email.split('@')[0] };
    localStorage.setItem('mockUser', JSON.stringify(user));
    return user;
  }
);

export const logoutUser = createAsyncThunk('user/logout', async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  localStorage.removeItem('mockUser');
});

export const updateUser = createAsyncThunk(
  'user/update',
  async (userData: Partial<TUser>) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const currentUser = localStorage.getItem('mockUser');
    if (currentUser) {
      const updatedUser = { ...JSON.parse(currentUser), ...userData };
      localStorage.setItem('mockUser', JSON.stringify(updatedUser));
      return updatedUser;
    }
    throw new Error('Пользователь не найден');
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    init: (state) => {
      state.isInit = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isInit = true;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isAuthenticated = false;
        state.isInit = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isInit = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Ошибка регистрации';
        state.isInit = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isInit = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Ошибка входа';
        state.isInit = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  }
});

export const { clearError, init } = userSlice.actions;
export default userSlice.reducer;