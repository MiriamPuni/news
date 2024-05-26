const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['title', 'text', 'img'],
        default: 'text',
    },
    fill: {
        type: String,
    }
})
const commentsSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    title: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now
    }

})
const articelSchema = new mongoose.Schema({
    mainTitle: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    imgMain:{
        type: String,
        required: true,
    },
    createDate:{
        type: Date,
        default: Date.now,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    content: [contentSchema],
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    views: {
        type: Number,
        default: 0
    },
    comments: [ commentsSchema ]
});


const articleModel = mongoose.models?.Article || mongoose.model('Article', articelSchema);
console.log({articleModel})
export default articleModel