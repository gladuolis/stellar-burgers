import { FC } from 'react';
<<<<<<< HEAD
=======

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { Input, Button } from '@zlden/react-developer-burger-ui-components';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import { PageUIProps } from '../common-type';

export const ForgotPasswordUI: FC<PageUIProps> = ({
  errorText,
  email,
  setEmail,
  handleSubmit
}) => (
  <main className={styles.container}>
    <div className={`pt-6 ${styles.wrapCenter}`}>
<<<<<<< HEAD
      <h3 className="pb-6 text text_type_main-medium">Восстановление пароля</h3>
      <form className={`pb-15 ${styles.form}`} name="login" onSubmit={handleSubmit}>
        <div className="pb-6">
          <Input
            type="email"
            placeholder="Укажите e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            error={false}
            errorText=""
            size="default"
          />
        </div>
        <div className={`pb-6 ${styles.button}`}>
          <Button type="primary" size="medium" htmlType="submit">
=======
      <h3 className='pb-6 text text_type_main-medium'>Восстановление пароля</h3>
      <form
        className={`pb-15 ${styles.form}`}
        name='login'
        onSubmit={handleSubmit}
      >
        <div className='pb-6'>
          <Input
            type='email'
            placeholder='Укажите e-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
            error={false}
            errorText=''
            size='default'
          />
        </div>
        <div className={`pb-6 ${styles.button}`}>
          <Button type='primary' size='medium' htmlType='submit'>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
            Восстановить
          </Button>
        </div>
        {errorText && (
          <p className={`${styles.error} text text_type_main-default pb-6`}>
            {errorText}
          </p>
        )}
      </form>
      <div className={`${styles.question} text text_type_main-default pb-6`}>
        Вспомнили пароль?
<<<<<<< HEAD
        <Link to="/login" className={`pl-2 ${styles.link}`}>
=======
        <Link to={'/login'} className={`pl-2 ${styles.link}`}>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
          Войти
        </Link>
      </div>
    </div>
  </main>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
