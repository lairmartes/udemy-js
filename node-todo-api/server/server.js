var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

/* 
var otherTodo = new Todo({
    text: 'Something to do'
});

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo', e);
});
 */
// User
// email - require it - trimm it - set type - set in length of 1

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlenght: 1
    }
});

var user = new User({
    email: 'lairmartes@example.com'
});

user.save().then((doc) => {
    console.log('User saved', doc);
}), (e) => {
    console.log('Unable to save user', e)
}