import React, { FC, memo } from 'react';
import styles from './ingredient-details.module.css';
import { IngredientDetailsUIProps } from './type';

export const IngredientDetailsUI: FC<IngredientDetailsUIProps> = memo(
  ({ ingredientData }) => {
    const { name, image_large, calories, proteins, fat, carbohydrates } = ingredientData;

    return (
      <div className={styles.content}>
        <img
          className={styles.img}
          alt={name}
          src={image_large}
        />
        <h3 className="text text_type_main-medium mt-2 mb-4">{name}</h3>
        <ul className={`${styles.nutritional_values} text_type_main-default`}>
          <li className={styles.nutritional_value}>
            <span className="text mb-2">Калории, ккал</span>
            <span className="text text_type_digits-default">{calories}</span>
          </li>
          <li className={styles.nutritional_value}>
            <span className="text mb-2">Белки, г</span>
            <span className="text text_type_digits-default">{proteins}</span>
          </li>
          <li className={styles.nutritional_value}>
            <span className="text mb-2">Жиры, г</span>
            <span className="text text_type_digits-default">{fat}</span>
          </li>
          <li className={styles.nutritional_value}>
            <span className="text mb-2">Углеводы, г</span>
            <span className="text text_type_digits-default">{carbohydrates}</span>
          </li>
        </ul>
      </div>
    );
  }
);
