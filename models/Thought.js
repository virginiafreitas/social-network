const {Schema, model, Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timeStamp => new Date(timeStamp).toLocaleDateString(),
    }
},
    {
    toJSON: {
        getters: true,
        },
        id: false,
    }
)



const thoughtSchema = new Schema({
    reaction: [reactionSchema],
    thoughText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timeStamp => new Date(timeStamp).toLocaleDateString(),
    },
    username: {
        type: String,
        required: true,  
    }
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);

thoughtSchema.virtual('reactionsCount').get(function(){
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;