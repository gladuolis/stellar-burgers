import { FC, useMemo } from 'react';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { useSelector } from '../../services/store';

export const OrderInfo: FC = () => {
  const params = useParams<{ number: string }>();
  
  const feedOrders = useSelector((state) => state.feed.orders);
  const profileOrders = useSelector((state) => state.profileOrders.orders);
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const orderData = [...feedOrders, ...profileOrders].find(
    (item) => item.number === Number(params.number)
  );

=======
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';

export const OrderInfo: FC = () => {
  /** TODO: взять переменные orderData и ingredients из стора */
  const orderData = {
    createdAt: '',
    ingredients: [],
    _id: '',
    status: '',
    name: '',
    updatedAt: 'string',
    number: 0
  };

  const ingredients: TIngredient[] = [];

  /* Готовим данные для отображения */
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
<<<<<<< HEAD
        if (acc[item]) {
          acc[item].count++;
        } else {
=======
        if (!acc[item]) {
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
<<<<<<< HEAD
        }
=======
        } else {
          acc[item].count++;
        }

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
<<<<<<< HEAD
      (sum, item) => sum + item.price * item.count,
=======
      (acc, item) => acc + item.price * item.count,
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
<<<<<<< HEAD
};
=======
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
