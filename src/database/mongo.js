import mongoose from 'mongoose';

export const Mongo = {
    async connect(mongoConnectionString) {
        try {
            await mongoose.connect(mongoConnectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            const db = mongoose.connection;
            db.on('error', (err) => {
                console.error('MongoDB connection error:', err);
            });

            db.once('open', () => {
                console.log('Connected to MongoDB');
            });

            return { success: true };
        } catch (error) {
            console.error('Error during mongo connection:', error);
            return { success: false, error };
        }
    }
};
