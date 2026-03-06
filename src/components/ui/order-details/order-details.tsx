import React from 'react';
import styles from './order-details.module.css';
import doneImg from '../../../images/done.svg';
import { OrderDetailsUIProps } from './type';

<<<<<<< HEAD
export const OrderDetailsUI: React.FC<OrderDetailsUIProps> = ({ orderNumber }) => (
=======
export const OrderDetailsUI: React.FC<OrderDetailsUIProps> = ({
  orderNumber
}) => (
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
  <>
    <h2 className={`${styles.title} text text_type_digits-large mt-2 mb-4`}>
      {orderNumber}
    </h2>
<<<<<<< HEAD
    <p className="text text_type_main-medium">идентификатор заказа</p>
    <img
      className={styles.img}
      src={doneImg}
      alt="Заказ готов"
    />
    <p className="text text_type_main-default mb-1">
=======
    <p className='text text_type_main-medium'>идентификатор заказа</p>
    <img
      className={styles.img}
      src={doneImg}
      alt='изображение статуса заказа.'
    />
    <p className='text text_type_main-default mb-1'>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      Ваш заказ начали готовить
    </p>
    <p className={`${styles.text} text text_type_main-default`}>
      Дождитесь готовности на орбитальной станции
    </p>
  </>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
