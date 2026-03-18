import { FC, useMemo } from 'react';
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

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (sum: number, item) => sum + item.price,
        0
      ),
    [constructorItems]
  );

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
};
