const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var usersSchema = new Schema(
    {
        organisation_name: { type: String, required: true },
        contact_name: { type: String, required: true },
        email: { type: String, required: true, unique:true },
        telephone_number: { type: String,required: true, unique:true },
        password: { type: String, required: true }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


module.exports = mongoose.model('Users', usersSchema, 'users');