import { FileUploadRouter } from "../fileUpload/fileUpload.routes";
import { Route, Routes } from "./routes.type";

export const routes: Routes = [new Route("/file", FileUploadRouter)];
