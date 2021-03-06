const {Schema, model} = require('mongoose');

const UserSchema = ({
    name:{
        type:String,
        required:[true,'The nam eis mandatory']
    },
    email:{
        type:String,
        require:[true,'The email is mandatory'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'The password is mandatory']
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    status:{
        type:Boolean,
        default:true,
    },
    google:{
        type:Boolean,
        default:false
    }
});

module.exports = model('User', UserSchema);