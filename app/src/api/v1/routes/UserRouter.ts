import Router from 'express-promise-router';
import User from '../../../models/User';

const UserRouter = Router();

UserRouter.post('/', async (req, res) => {
  if (!req.body.name) {
    res.status(500).send({ message: 'no user name, reject' });
    return;
  }
  const user = new User();
  user.name = req.body.name;
  user.age = req.body.age;
  try {
    const result = await user.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(501).send(err);
  }
});

UserRouter.get('/', async (req, res) => {
  res.send(await User.find());
});

UserRouter.get('/:id', async (req, res) => {
  res.send(await User.findOne(req.params.id));
});

UserRouter.put('/:id', async (req, res) => {
  const user = await User.findOne(req.params.id);
  if (!user) {
    res.status(500).send({ message: 'no user found' });
    return;
  }

  if (!req.body.name) {
    res.status(500).send({ message: 'no user name' });
    return;
  }
  user.name = req.body.name;
  user.age = req.body.age;

  try {
    const result = await user.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(501).send(err);
  }
});

UserRouter.delete('/:id', async (req, res) => {
  const user = await User.findOne(req.params.id);
  if (!user) {
    res.status(500).send({ message: 'no user found' });
    return;
  }

  try {
    const result = await user.remove();
    res.status(200).send(result);
  } catch (err) {
    res.status(501).send(err);
  }
});

export default UserRouter;
