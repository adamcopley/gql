const database = require('../database');

class UserModel {

    constructor() {
        
    }

    getUser(id) {
       return database[id];
    }
}

module.exports = UserModel;
