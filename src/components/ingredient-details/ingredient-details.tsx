import { FC } from 'react';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector } from '../../services/store';
import { TIngredient } from '@utils-types';

export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  
  const ingredientData = ingredients.find((item: TIngredient) => item._id === id);
=======
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC = () => {
  /** TODO: взять переменную из стора */
  const ingredientData = null;
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
<<<<<<< HEAD
};
=======
};
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
