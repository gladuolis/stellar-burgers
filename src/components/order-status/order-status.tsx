import React, { FC } from 'react';
import { OrderStatusProps } from './type';
import { OrderStatusUI } from '@ui';

<<<<<<< HEAD
const statusText: Record<string, string> = {
=======
const statusText: { [key: string]: string } = {
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
  pending: 'Готовится',
  done: 'Выполнен',
  created: 'Создан'
};

<<<<<<< HEAD
const statusColor: Record<string, string> = {
  pending: '#E52B1A',
  done: '#00CCCC'
};

export const OrderStatus: FC<OrderStatusProps> = ({ status }) => {
  const textStyle = statusColor[status] || '#F2F2F3';

  return <OrderStatusUI textStyle={textStyle} text={statusText[status]} />;
};
=======
export const OrderStatus: FC<OrderStatusProps> = ({ status }) => {
  let textStyle = '';
  switch (status) {
    case 'pending':
      textStyle = '#E52B1A';
      break;
    case 'done':
      textStyle = '#00CCCC';
      break;
    default:
      textStyle = '#F2F2F3';
  }

  return <OrderStatusUI textStyle={textStyle} text={statusText[textStyle]} />;
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
