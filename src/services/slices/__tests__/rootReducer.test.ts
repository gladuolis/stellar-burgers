import { rootReducer } from '../index';
import { initialState as ingredientsInitialState } from '../../slices/ingredientsSlice';
import { initialState as constructorInitialState } from '../../slices/constructorSlice';
import { initialState as userInitialState } from '../../slices/userSlice';
import { initialState as orderInitialState } from '../../slices/orderSlice';
import { initialState as feedInitialState } from '../../slices/feedSlice';
import { initialState as profileOrdersInitialState } from '../../slices/profileOrdersSlice';

describe('rootReducer', () => {
  it('должен возвращать корректное начальное состояние', () => {
    const initialState = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
    
    expect(initialState).toEqual({
      ingredients: ingredientsInitialState,
      burgerConstructor: constructorInitialState,
      user: userInitialState,
      order: orderInitialState,
      feed: feedInitialState,
      profileOrders: profileOrdersInitialState
    });
  });

  it('не должен изменять состояние при неизвестном экшене', () => {
    const currentState = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
    const newState = rootReducer(currentState, { type: 'ANOTHER_UNKNOWN_ACTION' });
    
    expect(newState).toEqual(currentState);
  });
});