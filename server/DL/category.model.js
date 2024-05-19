import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    }
})

const categoryModel =mongoose.models.Category || mongoose.model('Category', categorySchema);

export default categoryModel