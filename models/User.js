const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    thoughts: [{type: Schema.Types.ObjectId, ref: "thought"}],
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/,
    },
    friends: [{type: Schema.Types.ObjectId, ref: "user"}],
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
        }
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('user', userSchema);


module.exports = User;