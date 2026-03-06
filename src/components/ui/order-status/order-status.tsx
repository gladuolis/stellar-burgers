import React, { FC } from 'react';
import { OrderStatusUIProps } from './type';

export const OrderStatusUI: FC<OrderStatusUIProps> = ({ textStyle, text }) => (
  <span
<<<<<<< HEAD
    className="text text_type_main-default pt-2"
=======
    className='text text_type_main-default pt-2'
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
    style={{ color: textStyle }}
  >
    {text}
  </span>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
