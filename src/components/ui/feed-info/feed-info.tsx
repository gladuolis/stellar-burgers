import React, { FC, memo } from 'react';
<<<<<<< HEAD
import styles from './feed-info.module.css';
=======

import styles from './feed-info.module.css';

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { FeedInfoUIProps, HalfColumnProps, TColumnProps } from './type';

export const FeedInfoUI: FC<FeedInfoUIProps> = memo(
  ({ feed, readyOrders, pendingOrders }) => {
    const { total, totalToday } = feed;

    return (
      <section>
        <div className={styles.columns}>
          <HalfColumn
            orders={readyOrders}
<<<<<<< HEAD
            title="Готовы"
            textColor="blue"
          />
          <HalfColumn orders={pendingOrders} title="В работе" />
        </div>
        <Column title="Выполнено за все время" content={total} />
        <Column title="Выполнено за сегодня" content={totalToday} />
=======
            title={'Готовы'}
            textColor={'blue'}
          />
          <HalfColumn orders={pendingOrders} title={'В работе'} />
        </div>
        <Column title={'Выполнено за все время'} content={total} />
        <Column title={'Выполнено за сегодня'} content={totalToday} />
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      </section>
    );
  }
);

const HalfColumn: FC<HalfColumnProps> = ({ orders, title, textColor }) => (
  <div className={`pr-6 ${styles.column}`}>
    <h3 className={`text text_type_main-medium ${styles.title}`}>{title}:</h3>
<<<<<<< HEAD
    <ul className={`pt-6 ${styles.list}`}>
=======
    <ul className={`pt-6  ${styles.list}`}>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      {orders.map((item, index) => (
        <li
          className={`text text_type_digits-default ${styles.list_item}`}
          style={{ color: textColor === 'blue' ? '#00cccc' : '#F2F2F3' }}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Column: FC<TColumnProps> = ({ title, content }) => (
  <>
    <h3 className={`pt-15 text text_type_main-medium ${styles.title}`}>
      {title}:
    </h3>
    <p className={`text text_type_digits-large ${styles.content}`}>{content}</p>
  </>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
