<<<<<<< HEAD
import { forwardRef } from 'react';
import styles from './ingredients-category.module.css';
=======
import styles from './ingredients-category.module.css';
import { forwardRef } from 'react';
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { TIngredientsCategoryUIProps } from './type';
import { BurgerIngredient } from '@components';

export const IngredientsCategoryUI = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryUIProps
>(({ title, titleRef, ingredients, ingredientsCounters }, ref) => (
  <>
<<<<<<< HEAD
    <h3 className="text text_type_main-medium mt-10 mb-6" ref={titleRef}>
=======
    <h3 className='text text_type_main-medium mt-10 mb-6' ref={titleRef}>
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
      {title}
    </h3>
    <ul className={styles.items} ref={ref}>
      {ingredients.map((ingredient) => (
        <BurgerIngredient
          ingredient={ingredient}
          key={ingredient._id}
          count={ingredientsCounters[ingredient._id]}
        />
      ))}
    </ul>
  </>
<<<<<<< HEAD
));
=======
));
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
