import ingredientsReducer, { getIngredients } from '../ingredientsSlice';
import { TIngredient } from '@utils-types';

// Моковые данные
const mockIngredients: TIngredient[] = [
  {
    _id: '1',
    name: 'Булка',
    type: 'bun',
    proteins: 10,
    fat: 5,
    carbohydrates: 30,
    calories: 200,
    price: 100,
    image: '',
    image_large: '',
    image_mobile: ''
  },
  {
    _id: '2',
    name: 'Начинка',
    type: 'main',
    proteins: 20,
    fat: 10,
    carbohydrates: 40,
    calories: 300,
    price: 150,
    image: '',
    image_large: '',
    image_mobile: ''
  }
];

describe('ingredientsSlice', () => {
  it('должен возвращать начальное состояние', () => {
    expect(ingredientsReducer(undefined, { type: 'unknown' })).toEqual({
      ingredients: [],
      isLoading: false,
      error: null
    });
  });

  describe('getIngredients', () => {
    it('должен установить isLoading: true при pending', () => {
      const action = { type: getIngredients.pending.type };
      const state = ingredientsReducer(undefined, action);
      
      expect(state.isLoading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('должен сохранить ингредиенты и установить isLoading: false при fulfilled', () => {
      const action = { type: getIngredients.fulfilled.type, payload: mockIngredients };
      const state = ingredientsReducer(undefined, action);
      
      expect(state.isLoading).toBe(false);
      expect(state.ingredients).toEqual(mockIngredients);
      expect(state.error).toBeNull();
    });

    it('должен установить ошибку и isLoading: false при rejected', () => {
      const errorMessage = 'Ошибка загрузки';
      const action = { type: getIngredients.rejected.type, error: { message: errorMessage } };
      const state = ingredientsReducer(undefined, action);
      
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe(errorMessage);
      expect(state.ingredients).toEqual([]);
    });
  });
});