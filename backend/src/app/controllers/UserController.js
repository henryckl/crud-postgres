const { User } = require("../models");

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      console.log("existe");
      return res
        .status(400)
        .json({ error: `O Usuario com email ${req.body.email} ja existe` });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email
    });
  }

  async update(req, res) {
    const { email, name } = req.body;
    const user = await User.findByPk(req.headers.userid);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: `O Usuario ja existe` });
      }
    }

    const { id } = await user.update({ name, email });
    return res.json({
      id,
      name,
      email
    });
  }
}

module.exports = new UserController();
