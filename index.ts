import { config } from "dotenv";
import { startServer } from "./app";

config(); //configuration of all variables in .env
startServer();
