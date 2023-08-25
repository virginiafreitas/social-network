const connection = require('../config/connection');
const { User, Thought } = require('../models');


connection.on('error', (err) => err);

const users = [
    {
        username: 'virginiafreitas',
        email: 'test@gmail.com'
    },
    {
        username: 'farley',
        email: 'farley@gmail.com'
    }
]

const thoughts = [
    {
        thoughText: 'very good',
        username: 'farley'
    },
    {
        thoughText: 'very cool',
        username: 'virginiafreitas'
    },
]


connection.once('open', async () => {
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
    process.exit()
})



