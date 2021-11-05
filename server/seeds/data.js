import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Kevin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'john@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },

    ],
    products: [
        {
            name: 'Desk Lamp',
            category: 'Energy',
            image: '/images/p1.jpg',
            price: 39.99,
            countInStock: 10,
            brand: 'GreenEnergy',
            rating: 5.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Water Light Canteen',
            category: 'Water',
            image: '/images/p2.jpg',
            price: 29.99,
            countInStock: 20,
            brand: 'CleanWater',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Desk Powerbank',
            category: 'Energy',
            image: '/images/p3.jpg',
            price: 19.99,
            countInStock: 0,
            brand: 'GreenEnergy',
            rating: 4.0,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            name: 'House Controller',
            category: 'Smart',
            image: '/images/p4.jpg',
            price: 78.99,
            countInStock: 15,
            brand: 'SmartHouses',
            rating: 3.0,
            numReviews: 14,
            description: 'high quality product'
        },
        {
            name: 'Solar Panels',
            category: 'Energy',
            image: '/images/p5.jpg',
            price: 299.99,
            countInStock: 5,
            brand: 'GreenEnergy',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Solar Powerbank',
            category: 'Energy',
            image: '/images/p6.jpg',
            price: 139.99,
            countInStock: 12,
            brand: 'GreenEnergy',
            rating: 3.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Water Dispenser',
            category: 'Water',
            image: '/images/p7.jpg',
            price: 89.99,
            countInStock: 0,
            brand: 'CleanWater',
            rating: 5.0,
            numReviews: 6,
            description: 'high quality product'
        },
        {
            name: 'Smart Speaker',
            category: 'Smart',
            image: '/images/p8.jpg',
            price: 119.99,
            countInStock: 12,
            brand: 'Smart',
            rating: 4.0,
            numReviews: 7,
            description: 'high quality product'
        },
    ],
};

export default data;