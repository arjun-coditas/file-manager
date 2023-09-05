import { appErrorList } from "./error.constant";

export class AppError extends Error {
  status: number;
  errorList: any;
  constructor(error: string, errorList: any) {
    super(appErrorList[error].message);
    this.status = appErrorList[error].status;
    this.name = this.constructor.name;
    this.errorList = errorList;
  }

  statusCode() {
    return this.status;
  }
  getErrorList() {
    return this.errorList;
  }
}
