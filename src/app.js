import express from "express";
import cors from "cors";
import { Mongo } from "./database/mongo.js";
import { config } from "dotenv";
import requireDir from "require-dir";
import diaryRoute from "./diary/routes/diaryRoute.js";
import usersRoute from "./users/routes/usuariosRoutes.js"


config();

async function main() {
	const hostname = "localhost";
	const port = 3001;

	const app = express();

	const mongoConnection = await Mongo.connect(process.env.MONGO_CS);

	console.log(mongoConnection);

	requireDir('./src/users/models')

	app.use(express.json());
	app.use(cors());
	// Configura as rotas para o diary 
	app.use("/diary", diaryRoute);
	app.use("/users", usersRoute);


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