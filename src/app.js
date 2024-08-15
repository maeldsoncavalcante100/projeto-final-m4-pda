import express from "express";
import cors from "cors";
import { Mongo } from "./database/mongo.js";
import { config } from "dotenv";
import diaryRoute from "./diary/routes/diaryRoute.js";
import { usuariosRouter } from "./users/routes/usuariosRoutes.js"
import { routerLivro} from "./livros/routes/livroRoutes.js";
import  {router}  from "./satisfaction/routes/satisfactionRoutes.js"
import {routerTips} from "./tips/routes/tipsRoute.js"

config();

async function main() {
	const hostname = "localhost";
	const port = 3001;

	const app = express();

	const mongoConnection = await Mongo.connect(process.env.MONGO_CS);

	console.log(mongoConnection);


	app.use(express.json());
	app.use(cors());
	
	app.use("/api/diary", diaryRoute);
    app.use(routerLivro);
    app.use(router);
	app.use(usuariosRouter);
	app.use(routerTips);

	app.get("/", (_req, res) => {
		res.send({
			success: true,
			statusCode: 200,
			body: "Welcome to the Equilibrium API",
		});
	});

	app.listen(port, () => {
		console.log(`Server running : http://${hostname}:${port}`);
	});
}

main().catch((error) => {
	console.error("Error during mongo connection:", error);
});