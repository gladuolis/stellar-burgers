import { forwardRef, useMemo } from 'react';
<<<<<<< HEAD
import { useSelector } from '../../services/store';
=======
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { TIngredientsCategoryProps } from './type';
import { TIngredient } from '@utils-types';
import { IngredientsCategoryUI } from '../ui/ingredients-category';

export const IngredientsCategory = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryProps
>(({ title, titleRef, ingredients }, ref) => {
<<<<<<< HEAD
  const { bun, ingredients: constructorIngredients } = useSelector(
    (state) => state.burgerConstructor
  );

  const ingredientsCounters = useMemo(() => {
    const counters: { [key: string]: number } = {};
    
    constructorIngredients.forEach((ingredient: TIngredient) => {
      counters[ingredient._id] = (counters[ingredient._id] || 0) + 1;
    });
    
    if (bun) {
      counters[bun._id] = 2;
    }
    
    return counters;
  }, [bun, constructorIngredients]);
=======
  /** TODO: взять переменную из стора */
  const burgerConstructor = {
    bun: {
      _id: ''
    },
    ingredients: []
  };

  const ingredientsCounters = useMemo(() => {
    const { bun, ingredients } = burgerConstructor;
    const counters: { [key: string]: number } = {};
    ingredients.forEach((ingredient: TIngredient) => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });
    if (bun) counters[bun._id] = 2;
    return counters;
  }, [burgerConstructor]);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd

  return (
    <IngredientsCategoryUI
      title={title}
      titleRef={titleRef}
      ingredients={ingredients}
      ingredientsCounters={ingredientsCounters}
      ref={ref}
    />
  );
<<<<<<< HEAD
});
=======
});
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
