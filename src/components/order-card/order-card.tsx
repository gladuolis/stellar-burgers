import { FC, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { useSelector } from '../../services/store';
=======

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { OrderCardProps } from './type';
import { TIngredient } from '@utils-types';
import { OrderCardUI } from '../ui/order-card';

<<<<<<< HEAD
const MAX_INGREDIENTS = 6;

export const OrderCard: FC<OrderCardProps> = memo(({ order }) => {
  const location = useLocation();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
=======
const maxIngredients = 6;

export const OrderCard: FC<OrderCardProps> = memo(({ order }) => {
  const location = useLocation();

  /** TODO: взять переменную из стора */
  const ingredients: TIngredient[] = [];
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd

  const orderInfo = useMemo(() => {
    if (!ingredients.length) return null;

    const ingredientsInfo = order.ingredients.reduce(
      (acc: TIngredient[], item: string) => {
        const ingredient = ingredients.find((ing) => ing._id === item);
<<<<<<< HEAD
        return ingredient ? [...acc, ingredient] : acc;
=======
        if (ingredient) return [...acc, ingredient];
        return acc;
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      },
      []
    );

<<<<<<< HEAD
    const total = ingredientsInfo.reduce(
      (sum, item) => sum + item.price,
      0
    );

    const ingredientsToShow = ingredientsInfo.slice(0, MAX_INGREDIENTS);
    const remains = Math.max(0, ingredientsInfo.length - MAX_INGREDIENTS);
    const date = new Date(order.createdAt);

=======
    const total = ingredientsInfo.reduce((acc, item) => acc + item.price, 0);

    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredients);

    const remains =
      ingredientsInfo.length > maxIngredients
        ? ingredientsInfo.length - maxIngredients
        : 0;

    const date = new Date(order.createdAt);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow,
      remains,
      total,
      date
    };
  }, [order, ingredients]);

  if (!orderInfo) return null;

  return (
    <OrderCardUI
      orderInfo={orderInfo}
<<<<<<< HEAD
      maxIngredients={MAX_INGREDIENTS}
      locationState={{ background: location }}
    />
  );
});
=======
      maxIngredients={maxIngredients}
      locationState={{ background: location }}
    />
  );
});
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
