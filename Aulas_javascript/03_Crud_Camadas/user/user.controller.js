
const UserService = require('./user.service');
const userService = new UserService();
const { GenericException } = require("../generic-exception.js");

class UserController {
    createUser(req, res) {
        const { id, email, password } = req.body;
        const user = userService.create(id, email, password);
        res.json(user);
    }

    getAllUsers(req, res) {
        const users = userService.findAll();
        res.json(users);
    }

    getUserById(req, res) {
        const { id } = req.params;
        const user = userService.findOne(id);

        if(!user) {
            return res.status(404).send('register not found');
        }
        res.json(user);
    }

    updateUser(req, res) {
        const { id } = req.params;
        const { email, password } = req.body;
        const updatedUser = userService.update(id, email, password);
        if(!updatedUser) return res.status(404).send('User not found');
        res.status(200).json(updatedUser);
    }

    deleteUser(req, res) {
        const { id } = req.params;
        const result = userService.remove(id);
        if(!result) return res.status(404).send('User not found');
        res.status(204).send();
    }
}

module.exports = UserController;
