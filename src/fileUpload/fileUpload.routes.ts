import { Router, Request, Response, NextFunction } from "express";
import { ResponseHandler } from "../utility/response-handler";
import fileUploadServices, { upload } from "./fileUpload.services";
import { IFileUpload } from "./fileUpload.type";

export const FileUploadRouter = Router();

FileUploadRouter.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { originalname, filename:fileName } = req.file!
      const uploadFile = await fileUploadServices.uploadFile(originalname, fileName)
      return res.send(new ResponseHandler(uploadFile))
    } catch (error) {
      console.error("Error uploading file:", error);
     next(error)
    }
  }
);
