import React, { FC, memo } from 'react';
import {
  CurrencyIcon,
  FormattedDate
} from '@zlden/react-developer-burger-ui-components';
<<<<<<< HEAD
import styles from './order-info.module.css';
=======

import styles from './order-info.module.css';

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { OrderInfoUIProps } from './type';
import { OrderStatus } from '@components';

export const OrderInfoUI: FC<OrderInfoUIProps> = memo(({ orderInfo }) => (
  <div className={styles.wrap}>
<<<<<<< HEAD
    <h3 className={`text text_type_main-medium pb-3 pt-10 ${styles.header}`}>
      {orderInfo.name}
    </h3>
    <OrderStatus status={orderInfo.status} />
    <p className="text text_type_main-medium pt-15 pb-6">Состав:</p>
=======
    <h3 className={`text text_type_main-medium  pb-3 pt-10 ${styles.header}`}>
      {orderInfo.name}
    </h3>
    <OrderStatus status={orderInfo.status} />
    <p className={`text text_type_main-medium pt-15 pb=6`}>Состав:</p>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
    <ul className={`${styles.list} mb-8`}>
      {Object.values(orderInfo.ingredientsInfo).map((item, index) => (
        <li className={`pb-4 pr-6 ${styles.item}`} key={index}>
          <div className={styles.img_wrap}>
            <div className={styles.border}>
              <img
                className={styles.img}
                src={item.image_mobile}
                alt={item.name}
              />
            </div>
          </div>
<<<<<<< HEAD
          <span className="text text_type_main-default pl-4">{item.name}</span>
=======
          <span className='text text_type_main-default pl-4'>{item.name}</span>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
          <span
            className={`text text_type_digits-default pl-4 pr-4 ${styles.quantity}`}
          >
            {item.count} x {item.price}
          </span>
<<<<<<< HEAD
          <CurrencyIcon type="primary" />
=======
          <CurrencyIcon type={'primary'} />
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
        </li>
      ))}
    </ul>
    <div className={styles.bottom}>
<<<<<<< HEAD
      <p className="text text_type_main-default text_color_inactive">
=======
      <p className='text text_type_main-default text_color_inactive'>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
        <FormattedDate date={orderInfo.date} />
      </p>
      <span className={`text text_type_digits-default pr-4 ${styles.total}`}>
        {orderInfo.total}
      </span>
<<<<<<< HEAD
      <CurrencyIcon type="primary" />
    </div>
  </div>
));
=======
      <CurrencyIcon type={'primary'} />
    </div>
  </div>
));
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
