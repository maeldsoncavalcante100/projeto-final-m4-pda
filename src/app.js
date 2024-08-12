import express from "express";
import cors from "cors";
import { Mongo } from "./database/mongo.js";
import { config } from "dotenv";
import diaryRoute from "./diary/routes/diaryRoute.js";

config();

async function main() {
	const hostname = "localhost";
	const port = 3001;

	const app = express();

	const mongoConnection = await Mongo.connect(process.env.MONGO_CS);

	console.log(mongoConnection);

	app.use(express.json());
	app.use(cors());

	// Configura as rotas para o MoodRecord
	app.use("/diary", diaryRoute);


	app.get("/", (_req, res) => {
		res.send({
			success: true,
			statusCode: 200,
			body: "Welcome to the MoodRecord API",
		});
	});

	app.listen(port, () => {
		console.log(`Server running : http://${hostname}:${port}`);
	});
}

main().catch((error) => {
	console.error("Error during mongo connection:", error);
});