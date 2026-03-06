import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './burger-ingredient.module.css';
<<<<<<< HEAD
=======

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import {
  Counter,
  CurrencyIcon,
  AddButton
} from '@zlden/react-developer-burger-ui-components';
<<<<<<< HEAD
=======

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { TBurgerIngredientUIProps } from './type';

export const BurgerIngredientUI: FC<TBurgerIngredientUIProps> = memo(
  ({ ingredient, count, handleAdd, locationState }) => {
    const { image, price, name, _id } = ingredient;

    return (
      <li className={styles.container}>
        <Link
          className={styles.article}
          to={`/ingredients/${_id}`}
          state={locationState}
        >
          {count && <Counter count={count} />}
<<<<<<< HEAD
          <img className={styles.img} src={image} alt={name} />
          <div className={`${styles.cost} mt-2 mb-2`}>
            <span className="text text_type_digits-default mr-2">{price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <span className={`text text_type_main-default ${styles.text}`}>
            {name}
          </span>
        </Link>
        <AddButton
          text="Добавить"
=======
          <img className={styles.img} src={image} alt='картинка ингредиента.' />
          <div className={`${styles.cost} mt-2 mb-2`}>
            <p className='text text_type_digits-default mr-2'>{price}</p>
            <CurrencyIcon type='primary' />
          </div>
          <p className={`text text_type_main-default ${styles.text}`}>{name}</p>
        </Link>
        <AddButton
          text='Добавить'
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
          onClick={handleAdd}
          extraClass={`${styles.addButton} mt-8`}
        />
      </li>
    );
  }
<<<<<<< HEAD
);
=======
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
