import { ERROR_CODES } from "../common/error.constant";
import { AppError } from "../common/errorHandler";
import { FileModel } from "./fileUpload.model";

const uploadFile = async (originalName: string, fileName: string) => {
  try {
    return await FileModel.create({
      originalName: originalName,
      fileName: fileName,
    });
  } catch (error) {
    throw new AppError(ERROR_CODES.INTERNAL_SERVER_ERROR, error);
  }
};

export default {
    uploadFile,
};
