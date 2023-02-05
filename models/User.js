import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema({
    name:{type: String, required: true, trim: true},
    email : {type: String, unique: true, required: true, trim: true},
    password : {type: String, required: true, trim: true , minlength: 8},
    isAdmin : {type: Boolean, default: false},
    isVerified : {type: Boolean, default: false},
},{timestamps: true});

// Hash the password before saving the user model
UserSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
}, function(err) {
    console.log(err);
},);


const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;