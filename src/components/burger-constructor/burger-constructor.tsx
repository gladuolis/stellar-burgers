import { FC, useMemo } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { BurgerConstructorUI } from '@ui';
import { useDispatch, useSelector } from '../../services/store';
import { orderBurger } from '../../services/slices/orderSlice';
import { clearConstructor } from '../../services/slices/constructorSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const constructorItems = useSelector((state) => state.burgerConstructor);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { orderRequest, orderModalData } = useSelector((state) => state.order);

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    const ingredientsIds = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((item) => item._id),
      constructorItems.bun._id
    ];
    
    dispatch(orderBurger(ingredientsIds));
  };
  
  const closeOrderModal = () => {
    dispatch({ type: 'order/clearOrderModal' });
    dispatch(clearConstructor());
  };
=======
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';

export const BurgerConstructor: FC = () => {
  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */
  const constructorItems = {
    bun: {
      price: 0
    },
    ingredients: []
  };

  const orderRequest = false;

  const orderModalData = null;

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
  };
  const closeOrderModal = () => {};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
<<<<<<< HEAD
        (sum: number, item) => sum + item.price,
=======
        (s: number, v: TConstructorIngredient) => s + v.price,
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
        0
      ),
    [constructorItems]
  );

<<<<<<< HEAD
=======
  return null;

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
