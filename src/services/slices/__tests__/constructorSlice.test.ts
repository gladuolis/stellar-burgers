import constructorReducer, {
  addIngredient,
  removeIngredient,
  moveIngredient,
  clearConstructor
} from '../constructorSlice';
import { TIngredient } from '@utils-types';

// Моковые данные для тестов
const mockBun: TIngredient = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png'
};

const mockIngredient: TIngredient = {
  _id: '643d69a5c3f7b9001cfa0941',
  name: 'Мясо бессмертных моллюсков Protostomia',
  type: 'main',
  proteins: 433,
  fat: 244,
  carbohydrates: 33,
  calories: 420,
  price: 1337,
  image: 'https://code.s3.yandex.net/react/code/meat-02.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png'
};

describe('constructorSlice', () => {
  it('должен возвращать начальное состояние', () => {
    expect(constructorReducer(undefined, { type: 'unknown' })).toEqual({
      bun: null,
      ingredients: []
    });
  });

  it('должен добавлять булку в конструктор', () => {
    const initialState = { bun: null, ingredients: [] };
    const newState = constructorReducer(initialState, addIngredient(mockBun));
    
    expect(newState.bun).toEqual(mockBun);
    expect(newState.ingredients).toEqual([]);
  });

  it('должен добавлять начинку в конструктор', () => {
    const initialState = { bun: null, ingredients: [] };
    const newState = constructorReducer(initialState, addIngredient(mockIngredient));
    
    expect(newState.bun).toBeNull();
    expect(newState.ingredients).toHaveLength(1);
    expect(newState.ingredients[0]).toEqual(mockIngredient);
  });

  it('должен заменять булку при добавлении другой', () => {
    const initialState = { bun: mockBun, ingredients: [] };
    const anotherBun = { ...mockBun, _id: 'another', name: 'Другая булка' };
    const newState = constructorReducer(initialState, addIngredient(anotherBun));
    
    expect(newState.bun).toEqual(anotherBun);
    expect(newState.bun?.name).toBe('Другая булка');
  });

  it('должен удалять начинку по индексу', () => {
    const initialState = {
      bun: null,
      ingredients: [mockIngredient, mockIngredient]
    };
    const newState = constructorReducer(initialState, removeIngredient(0));
    
    expect(newState.ingredients).toHaveLength(1);
  });

  it('должен очищать конструктор', () => {
    const initialState = {
      bun: mockBun,
      ingredients: [mockIngredient, mockIngredient]
    };
    const newState = constructorReducer(initialState, clearConstructor());
    
    expect(newState.bun).toBeNull();
    expect(newState.ingredients).toHaveLength(0);
  });
});