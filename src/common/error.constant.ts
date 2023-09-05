import status from "http-status";

export const ERROR_CODES = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  BAD_REQUEST: "BAD_REQUEST",
  REQUEST_DID_NOT_MATCH: "REQUEST_DID_NOT_MATCH",
  UNAUTHORIZED: "UNAUTHORIZED",
  INCORRECT_PASSWORD: "INCORRECT_PASSWORD",
  NOT_FOUND: "NOT_FOUND",
  CONFLICT: "CONFLICT",
  UNAUTHORIZE_TOKEN: "UNAUTHORIZED_TOKEN",
  SERVICE_UNAVAILABLE: "SERVICE UNAVAILABLE",
};

export const appErrorList = {
  [ERROR_CODES.INTERNAL_SERVER_ERROR]: {
    status: status.INTERNAL_SERVER_ERROR,
    message: "Internal server error",
  },
  [ERROR_CODES.BAD_REQUEST]: {
    status: status.BAD_REQUEST,
    message: "Bad request",
  },
  [ERROR_CODES.UNAUTHORIZED]: {
    status: status.UNAUTHORIZED,
    message: "User unauthorized",
  },
  [ERROR_CODES.NOT_FOUND]: {
    status: status.NOT_FOUND,
    message: "Not Found",
  },
  [ERROR_CODES.CONFLICT]: {
    status: status.CONFLICT,
    message: "Already Exists",
  },
  [ERROR_CODES.SERVICE_UNAVAILABLE]: {
    status: status.SERVICE_UNAVAILABLE,
    message: "Service Unavailable",
  },
};
