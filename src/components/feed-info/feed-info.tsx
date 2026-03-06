import { FC } from 'react';
<<<<<<< HEAD
import { useSelector } from '../../services/store';
=======

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
<<<<<<< HEAD
  const { orders, total, totalToday } = useSelector((state) => state.feed);

  const readyOrders = getOrders(orders, 'done');
=======
  /** TODO: взять переменные из стора */
  const orders: TOrder[] = [];
  const feed = {};

  const readyOrders = getOrders(orders, 'done');

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
  const pendingOrders = getOrders(orders, 'pending');

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
<<<<<<< HEAD
      feed={{ total, totalToday }}
    />
  );
};
=======
      feed={feed}
    />
  );
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
