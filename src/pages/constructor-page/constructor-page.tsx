<<<<<<< HEAD
import { FC } from 'react';
import styles from './constructor-page.module.css';
import { BurgerIngredients, BurgerConstructor } from '../../components';

export const ConstructorPage: FC = () => (
  <main className={styles.containerMain}>
    <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
      Соберите бургер
    </h1>
    <div className={`${styles.main} pl-5 pr-5`}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  </main>
);
=======
import { useSelector } from '../../services/store';

import styles from './constructor-page.module.css';

import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC } from 'react';

export const ConstructorPage: FC = () => {
  /** TODO: взять переменную из стора */
  const isIngredientsLoading = false;

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
