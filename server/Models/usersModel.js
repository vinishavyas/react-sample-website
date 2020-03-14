const mongoose = require('mongoose');
const usersSchema = require('./usersSchema');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

module.exports = class Users extends usersSchema {
    registerNewUser(data) {
        return new Promise((resolve, reject) => {
            data.password = bcrypt.hashSync(data.password, salt);
            var newUserEntity = new usersSchema(data);
            newUserEntity.save().then(args => resolve(args)).catch(err => {console.log("catch error");reject(err)});
        })
    }
    validatePassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}

