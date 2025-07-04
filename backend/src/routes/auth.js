const express = require('express');
const verifyToken = require('../middlewares/auth');
const router = express.Router();

router.get('/me', verifyToken, async (req, res) => {
    res.json({uid: req.user.uid, email: req.user.email});
});

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userRecord = await admin.auth().createUser({ email, password });
        res.status(201).json({ uid: userRecord.uid, email: userRecord.email });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;