import multer from "multer";
import { ALLOWED_FILE_TYPES, FILE_UPLOAD_ERRORS, FILE_UPLOAD_RESPONSE } from "./fileUpload.constants";
import { AppError } from "../common/errorHandler";
import { ERROR_CODES } from "../common/error.constant";
import fileUploadRepository from "./fileUpload.repository";

const fileStorageEngine = multer.memoryStorage();

export const upload = multer({
  storage: fileStorageEngine,
  fileFilter: (req, file, fileFilterCallback) => {
    if (ALLOWED_FILE_TYPES.includes(file.mimetype)) {
      fileFilterCallback(null, true);
    } else {
      fileFilterCallback(
        new AppError(
          ERROR_CODES.BAD_REQUEST,
          FILE_UPLOAD_ERRORS.INVALID_FILE_FORMAT
        )
      );
    }
  },
});

const uploadFile = async (originalName: string, fileName: string) => {
  try {
    const uploadedFile = await fileUploadRepository.uploadFile(originalName, fileName);
    if(uploadedFile){
        return {message: FILE_UPLOAD_RESPONSE.FILE_UPLOAD_SUCCESS}
    }
  } catch (error) {
    throw error
  }
};

export default {
    uploadFile
}