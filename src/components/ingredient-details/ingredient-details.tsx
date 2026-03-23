import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector } from '../../services/store';
import { TIngredient } from '@utils-types';

export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  
  const ingredientData = ingredients.find((item: TIngredient) => item._id === id);

  if (!ingredientData) {
    return <Preloader />;
  }

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        data-cy="close-modal-btn"
        style={{ display: 'none' }}
      />
      <IngredientDetailsUI ingredientData={ingredientData} />
    </>
  );
};