import {
  ALLOWED_MAX_FILE_SIZE,
  FILE_LIMIT,
  FILE_UPLOAD_ERRORS,
} from "./fileUpload.constants";
import { AppError } from "../common/errorHandler";
import { ERROR_CODES } from "../common/error.constant";
import { IFileUpload } from "./fileUpload.type";

export const validateFileUploads = (
  uploadedFiles: IFileUpload[],
  folderName: string,
) => {
  const filesToBeUploaded = [];

  if (uploadedFiles.length > FILE_LIMIT.MAXIMUM_FILE_LIMIT) {
    throw new AppError(
      ERROR_CODES.BAD_REQUEST,
      FILE_UPLOAD_ERRORS.MAX_FILE_LIMIT_REACHED,
    );
  }

  for (const uploadedFile of uploadedFiles) {
    const maxFileSize = ALLOWED_MAX_FILE_SIZE.IMAGE_MAX_SIZE;

    if (uploadedFile.size! > maxFileSize) {
      throw new AppError(
        ERROR_CODES.BAD_REQUEST,
        FILE_UPLOAD_ERRORS.FILE_SIZE_EXCEEDED,
      );
    }
    const fileName = uploadedFile.originalname;
    const key = `${new Date().getTime() + "_" + fileName}`;

    filesToBeUploaded.push({ fileName, key });
  }
  return filesToBeUploaded;
};
