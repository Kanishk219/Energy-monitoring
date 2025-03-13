import mongoose from 'mongoose';

const energyUsageSchema = new mongoose.Schema({
    device: { type: String, required: true },
    energyConsumed: { type: Number, required: true }, 
    timestamp: { type: Date, default: Date.now }
});

const EnergyUsage = mongoose.model('EnergyUsage', energyUsageSchema);

export default EnergyUsage;
