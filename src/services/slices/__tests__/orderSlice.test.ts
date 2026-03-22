import orderReducer, { orderBurger, clearOrderModal } from '../orderSlice';
import { TOrder } from '@utils-types';

// Моковый заказ
const mockOrder: TOrder = {
  _id: 'test123',
  number: 12345,
  name: 'Тестовый бургер',
  status: 'done',
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z',
  ingredients: ['ingredient1', 'ingredient2']
};

describe('orderSlice', () => {
  it('должен возвращать начальное состояние', () => {
    expect(orderReducer(undefined, { type: 'unknown' })).toEqual({
      orderRequest: false,
      orderModalData: null,
      error: null
    });
  });

  it('должен очищать модальное окно заказа', () => {
    const initialState = {
      orderRequest: false,
      orderModalData: mockOrder,
      error: null
    };
    const newState = orderReducer(initialState, clearOrderModal());
    
    expect(newState.orderModalData).toBeNull();
    expect(newState.error).toBeNull();
  });

  describe('orderBurger', () => {
    it('должен установить orderRequest: true при pending', () => {
      const action = { type: orderBurger.pending.type };
      const state = orderReducer(undefined, action);
      
      expect(state.orderRequest).toBe(true);
      expect(state.error).toBeNull();
    });

    it('должен сохранить заказ и установить orderRequest: false при fulfilled', () => {
      const action = { type: orderBurger.fulfilled.type, payload: mockOrder };
      const state = orderReducer(undefined, action);
      
      expect(state.orderRequest).toBe(false);
      expect(state.orderModalData).toEqual(mockOrder);
      expect(state.error).toBeNull();
    });

    it('должен установить ошибку и orderRequest: false при rejected', () => {
      const errorMessage = 'Ошибка заказа';
      const action = { type: orderBurger.rejected.type, error: { message: errorMessage } };
      const state = orderReducer(undefined, action);
      
      expect(state.orderRequest).toBe(false);
      expect(state.error).toBe(errorMessage);
      expect(state.orderModalData).toBeNull();
    });
  });
});