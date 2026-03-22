import { TOrder, TIngredient } from '@utils-types';

export const transformOrder = (order: TOrder, ingredients: TIngredient[]) => {
  // Получаем все ингредиенты заказа
  const orderIngredients = order.ingredients
    .map(id => ingredients.find(item => item._id === id))
    .filter((item): item is TIngredient => item !== undefined);

  // Группируем ингредиенты для подсчета
  const ingredientCounts = orderIngredients.reduce((acc, item) => {
    acc[item._id] = (acc[item._id] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Уникальные ингредиенты для отображения
  const uniqueIngredients = Array.from(
    new Map(orderIngredients.map(item => [item._id, item])).values()
  );

  // Подсчет общей стоимости
  const total = orderIngredients.reduce((sum, item) => sum + item.price, 0);

  // Подготовка ingredientsToShow (первые 6 ингредиентов)
  const ingredientsToShow = uniqueIngredients.slice(0, 6).map(item => ({
    ...item,
    count: ingredientCounts[item._id]
  }));

  // Остаток (сколько еще ингредиентов не показано)
  const remains = uniqueIngredients.length > 6 ? uniqueIngredients.length - 6 : 0;

  return {
    ...order,
    ingredientsToShow,
    total,
    remains,
    date: order.createdAt
  };
};