import { FC } from 'react';
<<<<<<< HEAD
import styles from './orders-list.module.css';
=======

import styles from './orders-list.module.css';

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { OrdersListUIProps } from './type';
import { OrderCard } from '@components';

export const OrdersListUI: FC<OrdersListUIProps> = ({ orderByDate }) => (
<<<<<<< HEAD
  <div className={styles.content}>
=======
  <div className={`${styles.content}`}>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
    {orderByDate.map((order) => (
      <OrderCard order={order} key={order._id} />
    ))}
  </div>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
