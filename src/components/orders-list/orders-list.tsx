<<<<<<< HEAD
import { FC, memo, useMemo } from 'react';
=======
import { FC, memo } from 'react';

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { OrdersListProps } from './type';
import { OrdersListUI } from '@ui';

export const OrdersList: FC<OrdersListProps> = memo(({ orders }) => {
<<<<<<< HEAD
  const orderByDate = useMemo(
    () =>
      [...orders].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    [orders]
  );

  return <OrdersListUI orderByDate={orderByDate} />;
});
=======
  const orderByDate = [...orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return <OrdersListUI orderByDate={orderByDate} />;
});
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
