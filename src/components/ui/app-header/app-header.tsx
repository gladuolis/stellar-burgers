import React, { FC } from 'react';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
<<<<<<< HEAD
        <NavLink to="/" className={styles.link}>
          <BurgerIcon type="primary" />
          <span className="text text_type_main-default ml-2 mr-10">
            Конструктор
          </span>
        </NavLink>
        <NavLink to="/feed" className={styles.link}>
          <ListIcon type="primary" />
          <span className="text text_type_main-default ml-2">
            Лента заказов
          </span>
        </NavLink>
      </div>
      <div className={styles.logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className={styles.link_position_last}>
        <NavLink to="/profile" className={styles.link}>
          <ProfileIcon type="primary" />
          <span className="text text_type_main-default ml-2">
            {userName || 'Личный кабинет'}
          </span>
        </NavLink>
      </div>
    </nav>
  </header>
);
=======
        <>
          <BurgerIcon type={'primary'} />
          <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
        </>
        <>
          <ListIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </>
      </div>
      <div className={styles.logo}>
        <Logo className='' />
      </div>
      <div className={styles.link_position_last}>
        <ProfileIcon type={'primary'} />
        <p className='text text_type_main-default ml-2'>
          {userName || 'Личный кабинет'}
        </p>
      </div>
    </nav>
  </header>
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
