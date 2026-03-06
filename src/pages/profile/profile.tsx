import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from '../../services/store';
import { updateUser } from '../../services/slices/userSlice';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  
  const [formValue, setFormValue] = useState({
    name: user?.name || '',
    email: user?.email || '',
=======

export const Profile: FC = () => {
  /** TODO: взять переменную из стора */
  const user = {
    name: '',
    email: ''
  };

  const [formValue, setFormValue] = useState({
    name: user.name,
    email: user.email,
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
    password: ''
  });

  useEffect(() => {
    setFormValue((prevState) => ({
      ...prevState,
      name: user?.name || '',
      email: user?.email || ''
    }));
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    dispatch(updateUser({
      name: formValue.name,
      email: formValue.email
    }));
=======
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    setFormValue({
<<<<<<< HEAD
      name: user?.name || '',
      email: user?.email || '',
=======
      name: user.name,
      email: user.email,
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      password: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
<<<<<<< HEAD
};
=======

  return null;
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
