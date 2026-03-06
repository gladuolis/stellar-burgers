import { FC } from 'react';
<<<<<<< HEAD
import styles from './profile-orders.module.css';
=======

import styles from './profile-orders.module.css';

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { ProfileOrdersUIProps } from './type';
import { ProfileMenu, OrdersList } from '@components';

export const ProfileOrdersUI: FC<ProfileOrdersUIProps> = ({ orders }) => (
<<<<<<< HEAD
  <main className={styles.main}>
=======
  <main className={`${styles.main}`}>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
    <div className={`mt-30 mr-15 ${styles.menu}`}>
      <ProfileMenu />
    </div>
    <div className={`mt-10 ${styles.orders}`}>
      <OrdersList orders={orders} />
    </div>
  </main>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
