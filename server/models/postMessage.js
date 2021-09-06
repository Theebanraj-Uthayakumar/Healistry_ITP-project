import { Mongoose } from "mongoose";

const postSchema = Mongoose.Schema({
    DName: String,
    Speci: String,
    SLNC: String,
    Exper: String,
    Gender: String,
    CPosistion: String,
    WHospital: String,
    WHistory: String,
    selectedFile: String,
    likeCont: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = Mongoose.model('PostMessage', postSchema);
export default PostMessage;