import { FC } from 'react';
<<<<<<< HEAD
import styles from './constructor-page.module.css';
=======

import styles from './constructor-page.module.css';

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { ConstructorPageUIProps } from './type';
import { Preloader } from '@ui';
import { BurgerIngredients, BurgerConstructor } from '@components';

export const ConstructorPageUI: FC<ConstructorPageUIProps> = ({
  isIngredientsLoading
}) => (
  <>
    {isIngredientsLoading ? (
      <Preloader />
    ) : (
      <main className={styles.containerMain}>
<<<<<<< HEAD
        <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
=======
        <h1
          className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
        >
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
          Соберите бургер
        </h1>
        <div className={`${styles.main} pl-5 pr-5`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    )}
  </>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
