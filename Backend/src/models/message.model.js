import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Message', messageSchema);
