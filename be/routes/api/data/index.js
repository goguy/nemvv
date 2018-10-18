const router = require('express').Router();
const board = require('./board');
const user = require('./user');

router.use('/board', board);
router.use('/user', user);

router.all('*', (req, res) => {
    res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});

module.exports = router;