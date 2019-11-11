const router = require('express').Router();
const bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  const pass = req.body.password;

  const hashedPass = bcrypt.hashSync(pass, 14);

  return {
    pass: pass,
    hashedPass: hashedPass
  }

  //read a pass from the body
  //hash the pass
  // return it to the user in an object that looks like
  // { password: 'original password', hash: 'hashed password }
})

module.exports = router;
