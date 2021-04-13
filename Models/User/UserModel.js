const UserSchema = require('./UserSchema');

class UserModel {
    getUserById(id) {
       return UserSchema.findById(id);
    }

    getUser(args) {
        return UserSchema.find(args);
    }
}

module.exports = UserModel;
