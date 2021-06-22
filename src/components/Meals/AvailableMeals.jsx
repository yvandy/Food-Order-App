import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealITem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'matar paneer',
        description: 'Tasty and Healthy',
        price: 30.0,
    },
    {
        id: 'm2',
        name: 'Daal Tadka',
        description: 'yummy ...',
        price: 20,
    },
    {
        id: 'm3',
        name: 'Aalo Gobi',
        description: 'Punjabi style',
        price: 10,
    },
    {
        id: 'm4',
        name: 'Ice Cream',
        description: 'Tasty...',
        price: 4,
    },
];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => (
        <MealITem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />));

    return <section className={classes.meals}>
        <ul>
            <Card >
                {mealsList}
            </Card>
        </ul>
    </section>
};

export default AvailableMeals;