import { FC, memo } from 'react';
<<<<<<< HEAD
import styles from './feed.module.css';
=======

import styles from './feed.module.css';

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { FeedUIProps } from './type';
import { OrdersList, FeedInfo } from '@components';
import { RefreshButton } from '@zlden/react-developer-burger-ui-components';

export const FeedUI: FC<FeedUIProps> = memo(({ orders, handleGetFeeds }) => (
  <main className={styles.containerMain}>
    <div className={`${styles.titleBox} mt-10 mb-5`}>
      <h1 className={`${styles.title} text text_type_main-large`}>
        Лента заказов
      </h1>
      <RefreshButton
<<<<<<< HEAD
        text="Обновить"
        onClick={handleGetFeeds}
        extraClass="ml-30"
=======
        text='Обновить'
        onClick={handleGetFeeds}
        extraClass={'ml-30'}
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      />
    </div>
    <div className={styles.main}>
      <div className={styles.columnOrders}>
        <OrdersList orders={orders} />
      </div>
      <div className={styles.columnInfo}>
        <FeedInfo />
      </div>
    </div>
  </main>
<<<<<<< HEAD
));
=======
));
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
