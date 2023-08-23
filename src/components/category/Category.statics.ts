import {CategoryInterface} from "./Category.Interface";
const burger = 'Burger';
const fries = 'Fries';
const beverage = 'Beverage'

const categories: CategoryInterface[] = [
    {
        id:'1',
        title: burger,
        image: "/assets/default-burger.jpeg",
    },
    {
        id : '2',
        title: fries,
        image: '/assets/default-burger.jpeg',
    },
    {
        id : '3',
        title: beverage,
        image: '/assets/default-burger.jpeg',
    }
];

export default categories;