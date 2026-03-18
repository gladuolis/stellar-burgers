import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';

export const AppHeader: FC = () => {
  const userName = useSelector((state) => state.user.user?.name);
  
  return <AppHeaderUI userName={userName || ''} />;
};
