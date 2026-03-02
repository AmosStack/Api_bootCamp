const user = require('../Models/userModel');

//add user
const addUser = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const result = await user.createUser({ name, email });
        res.status(201).json({ message: 'User added successfully', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add user', details: error.message });
    }
};

//fetch users
const fetchUsers = async (req, res) => {
    try {
        const users = await user.getAllUsers();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users', details: error.message });
    }
};

//exporting controllers
module.exports = {
    addUser,
    fetchUsers
};