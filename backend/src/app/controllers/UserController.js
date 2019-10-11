const { User } = require("../models");

class UserController {
  async store(req, res) {
    console.log(User);
    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email
    });
  }
}

module.exports = new UserController();
