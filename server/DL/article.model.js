const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    type:{
        type: String,
        enum: ['title', 'text', 'img'],
        default: 'text',
        required: true,
    },
    fill:{
        type: String,
        required: true,
    }
})
const commentsSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    date:{
        type: Date,
        default: Date.now
    }

})
const articelSchema = new mongoose.Schema({
    mainTitle:{
        type: String,
        required: true,
    },
    subTitle:{
        type: String,
        required: true,
    },
    createDate:{
        type: Date,
        default: Date.now,
        required: true,
    },
    writer:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    content:[{
        contentSchema
    }],
    slug:{
        type: String,
        required: true,
        unique: true,
    },
    views:{
        type: Number,
        default: 0
    },
    comments:{ commentsSchema}
});

const articleModel = mongoose.models.Article || mongoose.model('Article', articelSchema);

export default articleModel