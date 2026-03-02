const express = require('express');
const router = express.Router();
const { addUser, fetchUsers } = require('../Controllers/userControllers');

router.post('/', addUser);
router.get('/', fetchUsers);

module.exports = router;