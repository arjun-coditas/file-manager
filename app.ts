import express from 'express';
import { registerRoutes } from './src/routes/routes.register';
import { connectToDatabase } from './src/config/databaseConnection';
export const startServer = async () => {
    try {
        const app = express();

        await connectToDatabase()
        registerRoutes(app);

        const { PORT } = process.env;
        app.listen(
            PORT,
            () => console.log(`SERVER STARTED ON PORT: ${PORT}`)
        )
    } catch (error) {
        console.error(error);
        console.error('COULD NOT START SERVER');
        process.exit(1);
    }
}