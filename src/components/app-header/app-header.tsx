import { FC } from 'react';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';

export const AppHeader: FC = () => {
  const userName = useSelector((state) => state.user.user?.name);
  
  return <AppHeaderUI userName={userName || ''} />;
};
=======
import { AppHeaderUI } from '@ui';

export const AppHeader: FC = () => <AppHeaderUI userName='' />;
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
