import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let RequestSchema   = new Schema({
    email: String,
    time: { type : Date, default: Date.now },
    status: { type: String, enum: ['open',  'inWork', 'approved', 'canceled'] },
    formData: {
    	firstName: String,
    	secondName: String,
    	employeePosition: String,
    	company: String,
    	phone:String
    }
});

export default mongoose.model('Request', RequestSchema);