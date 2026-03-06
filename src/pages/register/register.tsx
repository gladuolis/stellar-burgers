import { FC, SyntheticEvent, useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { RegisterUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import { registerUser } from '../../services/slices/userSlice';
=======
import { RegisterUI } from '@ui-pages';
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd

export const Register: FC = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { error, isLoading } = useSelector((state) => state.user);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(registerUser({ email, name: userName, password }))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(() => {});
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <RegisterUI
      errorText={error || ''}
=======

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <RegisterUI
      errorText=''
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSubmit={handleSubmit}
    />
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
