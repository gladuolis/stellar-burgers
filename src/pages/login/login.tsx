import { FC, SyntheticEvent, useState } from 'react';
<<<<<<< HEAD
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import { loginUser } from '../../services/slices/userSlice';
=======
import { LoginUI } from '@ui-pages';
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const { error, isLoading } = useSelector((state) => state.user);
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <LoginUI
      errorText={error || ''}
=======

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <LoginUI
      errorText=''
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
