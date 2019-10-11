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
}

module.exports = new UserController();
